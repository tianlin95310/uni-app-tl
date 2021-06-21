<script>
  export default {
    globalData: {
      key: 'value'
    },
    onLaunch: function() {
      console.log('App Launch', process.env.NODE_ENV, process.env.VUE_APP_BASE_URL)
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    },
    onError: function() {
      console.log('App onError')
    },
    onPageNotFound: function() {
      console.log('App onPageNotFound')
    },
    onThemeChange: function() {
      console.log('App onThemeChange')
    }
  }
</script>

<style lang="scss">
  /*每个页面公共css */
  
  // 将该文件移至main.js导入能解决scss,子样式无法选择问题
  // @import url("~@/common/theme.scss");
</style>
