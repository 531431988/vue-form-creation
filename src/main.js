import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import '@/libs/core'
import '@babel/polyfill'
import '@/plugins/ant-design-vue'
import '@/less/WMlib.less'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
