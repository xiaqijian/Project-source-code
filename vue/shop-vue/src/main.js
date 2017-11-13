// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAMap from 'vue-amap';
import axios from 'axios'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'b1c7b3d8f2da87805e5d1b8df1e0877a',
  // 插件集合
  plugin: [ 'AMap.Geolocation']
});

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
