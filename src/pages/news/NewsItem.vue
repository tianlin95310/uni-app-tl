<template>
  <div class="news-items">
    <view v-for="(item, index) in news" :key="index" class="new-item">
      <view class="desc">{{ item.desc }}</view>
      <view class="divider"></view>
    </view>
  </div>
</template>

<script>
  export default {
    name: 'NewsItemS',
    props: {
      news: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .news-items {
    font-size: 28rpx;

    .new-item {
      padding: 8rpx 16rpx;

      .desc {
        height: 60px;
        line-height: 30px;
      }
    }

  }
</style>
