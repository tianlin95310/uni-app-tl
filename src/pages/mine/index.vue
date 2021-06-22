<template>
  <view class="page-mine">
    <uni-list>
      <uni-list-item link="navigateTo" :show-extra-icon="true" :extra-icon="{
         type: 'smallcircle',
         color: this.mineIconColor
        }" :title="$t('themeSetting')" @click="onItemClick(0)"></uni-list-item>
      <uni-list-item link="navigateTo" :show-extra-icon="true" :extra-icon="{
          type: 'chat',
          color: this.mineIconColor
        }" :title="$t('languageSetting')" @click="onItemClick(1)"></uni-list-item>

      <uni-list-item link="navigateTo" :show-extra-icon="true" :extra-icon="{
            type: 'chat',
            color: this.mineIconColor
          }" title="获取页面内的的节点信息" @click="onClick"></uni-list-item>

    </uni-list>
  </view>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import mixin from '@/mixins/index.js'
  export default {
    mixins: [mixin],
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['mineIconColor'])
    },
    onPullDownRefresh() {
      console.log('onPullDownRefresh')
      setTimeout(() => {
        uni.stopPullDownRefresh()
      }, 500)
    },
    methods: {
      getParent(pname = 'Layout') {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== pname) {
          parent = parent.$parent;
          if (!parent) {
            return false
          }
          parentName = parent.$options.name
          console.log('parentName', parentName, parent.$el)
        }
        return parent;
      },
      onClick() {
        let pagecomp = this.getParent()
        if (pagecomp) {
          let pageDiv = pagecomp.$el
          console.log('getParent', pageDiv)
          pageDiv.classList.remove(this.$store.state.theme.theme)
          pageDiv.classList.add('theme2')
        }
        const query = uni.createSelectorQuery();
        query.select('.page-mine').boundingClientRect(data => {
          console.log("得到布局位置信息" + JSON.stringify(data));
          console.log("节点离页面顶部的距离为" + data.top);
          console.log("节点离页面底部的距离为" + data.bottom);
        }).exec();
      },
      onItemClick(index) {
        if (index === 0) {
          this.router.push('/pages/mine/theme/index')
        } else if (index === 1) {
          this.router.push('/pages/mine/language/index')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-mine {}
</style>
