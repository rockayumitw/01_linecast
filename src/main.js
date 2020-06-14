import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from './i18n'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import './assets/scss/main.scss'

import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import { gsap, ScrollToPlugin, Draggable, MotionPathPlugin } from 'gsap/all'
import { VueMasonryPlugin } from 'vue-masonry'
import VueScrollProgress from 'vue-scroll-progress'

gsap.registerPlugin(ScrollToPlugin, Draggable, MotionPathPlugin)
Vue.config.productionTip = false
Vue.prototype.$ = $
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(VueMasonryPlugin)
Vue.use(VueScrollProgress)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
