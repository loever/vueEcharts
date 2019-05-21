import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
