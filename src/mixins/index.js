import { mapGetters } from 'vuex'
import { getPageTitle } from './pageTitle.js'
export default {
  data() {
    return {
      updateFlag: false
    }
  },
  // 保证新打开的页面状态栏也是跟随主题的
  onReady() {
    this.updateNavigationBar()
  },
  onShow(){
    let pages = getCurrentPages()
    let route = pages[pages.length - 1].route
    console.log('---mixin onShow---', route)
    if (this.updateFlag){
      this.updateNavigationBar()
      this.updateTabbar()
      this.updateFlag = false
    }
  },
  methods: {
    updateNavigationBar(){
      let pages = getCurrentPages()
      let route = pages[pages.length - 1].route
      uni.setNavigationBarTitle({
          title: getPageTitle(route, this)
      });
      uni.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: this.theme === 'theme1' ? "#ff0000" : "#0000ff"
      })
      console.log('---mixin updateNavigationBar---')
    },
    updateTabbar(){
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
      console.log('---mixin updateTabbar---')
    }
  },
  computed: {
    ...mapGetters(['theme'])
  },
  watch: {
    theme(){
      this.updateFlag = true
      console.log('mixin 主题发生变化')
    }
  }
}