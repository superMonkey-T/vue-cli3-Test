import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import echarts from 'echarts'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(echarts)
// Vue.prototype.$ajax = axios

Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
