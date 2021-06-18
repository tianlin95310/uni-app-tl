<template>
  <view class="page-language-set">
    <uni-list>
      <uni-list-item :title="$t('chinese')" :rightText="this.$i18n.locale == 'zh-CN' ? $t('applied') : ''" @click="onChange('zh-CN')" clickable></uni-list-item>
      <uni-list-item :title="$t('english')" :rightText="this.$i18n.locale == 'en-US' ? $t('applied') : ''" @click="onChange('en-US')" clickable></uni-list-item>
    </uni-list>
  </view>
</template>

<script>
  import mixin from '@/mixins/index.js'
  export default {
    mixins: [mixin],
    data() {
      return {
        
      }
    },
    methods: {
      onChange(lang){
        this.$i18n.locale = lang
        console.log(this.$i18n.locale)
      }
    }
  }
</script>

<style>
  .page-language-set {
    
  }
</style>
