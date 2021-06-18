<template>
  <view :class="[theme, 'page-mine']">
    <uni-list>
      <uni-list-item link="navigateTo" to="/pages/mine/theme/index" :show-extra-icon="true" :extra-icon="{
         type: 'smallcircle',
         color: this.mineIconColor
        }" :title="$t('themeSetting')"></uni-list-item>
      <uni-list-item link="navigateTo" to="/pages/mine/language/index" :show-extra-icon="true" :extra-icon="{
          type: 'chat',
          color: this.mineIconColor
        }" :title="$t('languageSetting')"></uni-list-item>
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
    }
  }
</script>

<style lang="scss" scoped>
  .page-mine {}
</style>
