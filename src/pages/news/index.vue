<template>
  <view :class="theme">
    <view class="page-news">
      <news-item :news="news"></news-item>
      <view v-if="showLoading" class="loadding-more">加载中...</view>
    </view>
  </view>
</template>

<script>
  import mixin from '@/mixins/index.js'
  import NewsItem from './NewsItem.vue'
  const data = [{
    desc: '美媒恶毒提问诱他批中国，结果……'
  }, {
    desc: '女排七连胜！朱婷眼睛被球打红，这句话让人心疼安抚沙发各行业样式阿絮不少地方都是而非'
  }, {
    desc: '美媒恶毒提问诱他批中国，结果……'
  }, {
    desc: '女排七连胜！朱婷眼睛被球打红，这句话让人心疼'
  }, {
    desc: '美媒恶毒提问诱他批中国，结果……'
  }, {
    desc: '女排七连胜！朱婷眼睛被球打红，这句话让人心疼'
  }, {
    desc: '美媒恶毒提问诱他批中国，结果……'
  }, {
    desc: '女排七连胜！朱婷眼睛被球打红，这句话让人心疼'
  }, {
    desc: '美媒恶毒提问诱他批中国，结果……'
  }, {
    desc: '女排七连胜！朱婷眼睛被球打红，这句话让人心疼'
  }, {
    desc: '美媒恶毒提问诱他批中国，结果……'
  }, {
    desc: '女排七连胜！朱婷眼睛被球打红，这句话让人心疼'
  }]
  export default {
    mixins: [mixin],
    components: {
      NewsItem
    },
    data() {
      return {
        showLoading: true,
        news: data
      }
    },
    onPullDownRefresh() {
      console.log('onPullDownRefresh')
      setTimeout(() => {
        this.news = data
        uni.stopPullDownRefresh()
      }, 300)
    },
    onReachBottom() {
      console.log('onReachBottom')
      setTimeout(() => {
        this.news = this.news.concat(data)
      }, 500)
    },
    methods: {
      getTitle() {
        return this.$t('news')
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-news {}
</style>
