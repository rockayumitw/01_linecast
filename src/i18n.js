import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    'zh': require('./common/lang/zh.json'),
    'en': require('./common/lang/en.json'),
    'cn': require('./common/lang/cn.json')
  }
})
