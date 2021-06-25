<template>
  <view :class="theme">
    <view class="page-language-set">
      <uni-list>
        <uni-list-item :title="$t('chinese')" :rightText="isApplyed('zh-CN')" @click="onChange('zh-CN')" clickable></uni-list-item>
        <uni-list-item :title="$t('english')" :rightText="isApplyed('en-US')" @click="onChange('en-US')" clickable></uni-list-item>
      </uni-list>
    </view>
  </view>
  
</template>

<script>
  import mixin from '@/mixins/index.js'
  import {
    post
  } from '@/utils/EventBus.js'
  export default {
    mixins: [mixin],
    data() {
      return {
        
      }
    },
    methods: {
      isApplyed(lang) {
        return this.$i18n.locale === lang ? this.$t('applied') : ''
      },
      onChange(lang){
        this.$i18n.locale = lang
        post('main-onLoad', '向main-onLoad事件监听发送了点击切换语言按钮事件')
        // 刷新页面
        uni.redirectTo({
          url: '/pages/mine/language/index'
        })
        console.log(this.$i18n.locale)
      }
    }
  }
</script>

<style>
  .page-language-set {
    
  }
</style>
