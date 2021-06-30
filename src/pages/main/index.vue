<template>

</template>

<script>
  import mixin from '@/mixins/index.js'
  import { register } from '@/utils/EventBus.js'
  export default {
    mixins: [mixin],
    data() {
      return {}
    },
    onReady() {
      console.log('---main-onReady---register event---')
      register('main-onLoad', (data) => {
        console.log('---main-onReady---called---', data)
      })
    }
  }
</script>

<style scoped lang="scss">
</style>
