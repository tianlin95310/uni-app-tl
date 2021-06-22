import {
  mapGetters
} from 'vuex'
import {
  getPageTitle,
  getParent
} from './utils.js'
export default {
  data() {
    return {
      // 保证第一次能执行方法
      updateFlag: true,
      initClass: true
    }
  },
  // 保证新打开的页面状态栏也是跟随主题的
  onReady() {
    console.log('---mixin onReady---')
    this.updateNavigationBar('onReady')
    this.initPageClassName('onReady')
  },
  onShow() {
    let pages = getCurrentPages()
    let route = pages[pages.length - 1].route
    console.log('---mixin onShow---', route, 'updateFlag =', this.updateFlag)
    if (this.updateFlag) {
      this.updateNavigationBar('onShow')
      this.updateTabbar('onShow')
      this.updateFlag = false
    }
  },
  methods: {
    initPageClassName(callFun) {
      if (this.initClass) {
        console.log('---mixin initClassName---', callFun)
        let pagecomp = getParent(this)
        if (pagecomp) {
          let pageDiv = pagecomp.$el
          pageDiv.classList.add(this.theme)
        }
        this.initClass = false
      }
    },
    updateNavigationBar(callFun) {
      let pages = getCurrentPages()
      let route = pages[pages.length - 1].route
      uni.setNavigationBarTitle({
        title: getPageTitle(route, this)
      });
      uni.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: this.theme === 'theme1' ? "#ff0000" : "#0000ff"
      })
      console.log('---mixin updateNavigationBar---', callFun)
    },
    updateTabbar(callFun) {
      uni.setTabBarStyle({
        selectedColor: this.theme === 'theme1' ? "#ff0000" : "#0000ff",
      })
      let tabBarOptions0 = {
        index: 0,
        text: this.$t('home'),
        iconPath: '/static/home-uns.png',
        selectedIconPath: this.theme === 'theme1' ? '/static/home1.png' : '/static/home2.png'
      }
      let tabBarOptions1 = {
        index: 1,
        text: this.$t('news'),
        iconPath: '/static/news-uns.png',
        selectedIconPath: this.theme === 'theme1' ? '/static/news1.png' : '/static/news2.png'
      }
      let tabBarOptions2 = {
        index: 2,
        text: this.$t('mine'),
        iconPath: '/static/mine-uns.png',
        selectedIconPath: this.theme === 'theme1' ? '/static/mine1.png' : '/static/mine2.png'
      }
      uni.setTabBarItem(tabBarOptions0)
      uni.setTabBarItem(tabBarOptions1)
      uni.setTabBarItem(tabBarOptions2)
      console.log('---mixin updateTabbar---', callFun)
    }
  },
  computed: {
    ...mapGetters(['theme'])
  },
  watch: {
    theme(newv, oldv) {
      console.log('mixin 主题发生变化', oldv, newv)
      if (newv) {
        this.updateFlag = true
        let pagecomp = getParent(this)
        if (pagecomp) {
          let pageDiv = pagecomp.$el
          console.log('---update class name---', pageDiv)
          pageDiv.classList.remove(oldv)
          pageDiv.classList.add(newv)
        }
      }
    },
    '$i18n.locale'() {
      this.updateFlag = true
      console.log('mixin 语言发生变化')
    }

  }
}
