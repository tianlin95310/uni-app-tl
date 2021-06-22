import Vue from 'vue'
import App from './App'

import store from './store/index.js'
import i18n from './i18n/index.js'
import router from './utils/router.js'
// 全局使用是没有必要的
// import mixin from './mixins/index.js'
// Vue.mixin(mixin)

import '@/common/theme.scss'

Vue.config.productionTip = false
// uni router
Vue.prototype.router = router

App.mpType = 'app'

const app = new Vue({
  store,
  i18n,
  ...App
})
app.$mount()
