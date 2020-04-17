import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/libs/core'
import '@babel/polyfill'
import '@/plugins/ant-design-vue'
import '@/less/WMlib.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
