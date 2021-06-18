import Vuex from 'vuex'
import Vue from 'vue'
import theme from './theme.js'
import user from './user.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    theme
  }
})

export default store