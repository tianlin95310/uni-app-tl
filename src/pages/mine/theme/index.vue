<template>
  <view :class="['page-theme-set', theme]">
    <view>
      <text class="text-color">{{ $t('currentUser') }} {{ username }}</text>
    </view>
    <view class="themes">
      <view class="card theme1" @click="changeTheme('theme1')">
        <uni-icons v-if="theme == 'theme1'" type="checkmarkempty" color="white" size="52"></uni-icons>
      </view>
      <view class="card theme2" @click="changeTheme('theme2')">
        <uni-icons v-if="theme == 'theme2'" type="checkmarkempty" color="white" size="52"></uni-icons>
      </view>
    </view>
  </view>
</template>

<script>
  import mixin from '@/mixins/index.js'
  import { post } from '@/utils/EventBus.js'
  export default {
    mixins: [mixin],
    data() {
      return {
        username: this.$store.state.user.username
      }
    },
    methods: {
      changeTheme(theme) {
        this.$store.commit('setTheme', theme)
        post('main-onLoad', '点击了切换主题按钮')
        console.log(this.$store.state.theme.theme)
        // 刷新页面
        uni.redirectTo({
          url: '/pages/mine/theme/index'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-theme-set {
    padding: 16px;

    .themes {
      margin-top: 10px;
    }

    .card {
      display: inline-block;
      width: 200rpx;
      height: 200rpx;
      text-align: center;
      border-radius: 8px;

      .uni-icons {
        line-height: 200rpx;
      }
    }

    .theme1 {
      background-color: red;
      margin-right: 16px;
      vertical-align: top;
    }

    .theme2 {
      background-color: blue;
      vertical-align: top;
    }
  }
</style>
