<template>
  <view class="page-login">
    <view class="user-info">
      <view>
        <input v-model="username" size="default" placeholder="请输入用户名" />
        <input v-model="openid" size="default" placeholder="请输入openID" />
      </view>

    </view>
    <view class="button">
      <button type="primary" size="default" @click="login">登录</button>
    </view>
  </view>
</template>

<script>
  import {
    getOpenId
  } from '@/utils/auth.js'
  export default {
    data() {
      return {
        username: 'admin',
        openid: 'asi5498749849849849489874164'
      }
    },
    methods: {
      login() {
        console.log(this.$store.state.user)
        this.$store.commit('setOpenId', '12312312312312')
        uni.switchTab({
          url: '/pages/main/index'
        })
      }
    },
    onInit(data) {
      console.log('login onInit', data)
    },
    onLoad(data) {
      console.log('login onLoad', data)
      getOpenId().then(res => {
        uni.switchTab({
          url: '/pages/main/index'
        })
      }).catch(res => {})
    },
    onShow() {
      console.log('login onShow')
    },
    onReady() {
      console.log('login onReady')
    },
    onHide() {
      console.log('login onHide')
    },
    onUnload() {
      console.log('login onUnload')
    }
  }
</script>

<style lang="scss" scoped>
  .page-login {
    padding: 16rpx;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    .user-info {
      width: 100%;
      flex: 1;
      display: flex;
      align-items: center;

      view {
        width: 100%;

        input {
          border: 1px solid grey !important;
          margin-top: 10px;
          padding: 4px 6px;
          border-radius: 4px;
        }
      }

    }

    .button {
      width: 100%;
      flex: 1;
    }

  }
</style>
