<template>
  <view :class="[theme, 'page-mine']">
    <uni-list>
      <uni-list-item link="navigateTo" :show-extra-icon="true" :extra-icon="{
         type: 'smallcircle',
         color: this.mineIconColor
        }" :title="$t('themeSetting')" @click="onItemClick(0)"></uni-list-item>
      <uni-list-item link="navigateTo" :show-extra-icon="true" :extra-icon="{
          type: 'chat',
          color: this.mineIconColor
        }" :title="$t('languageSetting')" @click="onItemClick(1)"></uni-list-item>
    </uni-list>
  </view>
</template>

<script>
  import { mapGetters } from 'vuex'
  import mixin from '@/mixins/index.js'
  export default {
    mixins: [mixin],
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters(['mineIconColor'])
    },
    methods: {
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
