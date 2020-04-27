import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);		
//引入vant

import './assets/js/flexible.min.js'

Vue.config.productionTip = false

//注册axios
import * as api from "./api/index.js";
console.log(api);
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
