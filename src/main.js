// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// import './assets/css/index.css'
import './assets/css/layout.css'
import DefaultLayout from '~/layouts/Layout.vue'
// import DefaultLayout from '~/layouts/Default.vue'

import Vue from 'vue'
import './plugins/element.js'

// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
