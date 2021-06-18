import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({  
  locale: 'en-US',  
  messages: {
    'en-US': {
      home: 'Home',
      news: 'New',
      mine: 'Mine',
      currentUser: 'Current User :',
      english: 'English',
      chinese: 'Chinese',
      applied: 'Applied',
      themeSetting: 'Theme Setting',
      languageSetting: 'Language Setting'
    },  
    'zh-CN': {
      home: '首页',
      news: '咨询',
      mine: '我的',
      currentUser: '当前用户名：',
      english: '英语',
      chinese: '中文',
      applied: '应用中',
      themeSetting: '主题设置',
      languageSetting: '语言设置'
    }  
  }  
})  
export default i18n