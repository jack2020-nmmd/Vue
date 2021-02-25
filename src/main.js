import Vue from 'vue'
import 'lib-flexible/flexible'//淘宝自适应库
import  './components/Vee-Validate/Vee-Validate';

import App from './App.vue'
import router from './router'
import ShopHeader from './components/ShopHeader/ShopHeader.vue'
import store from './store';
import * as API from './api/index';
Vue.config.productionTip = false
Vue.prototype.$API = API
// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')
//注册全局组件
Vue.component("ShopHeader", ShopHeader)
new Vue({
  el:"#app",
  components : {App},
  template : '<App/>', //声明APP以标签的方式使用
  router,
  store
})