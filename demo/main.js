import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@babel/polyfill'
import './plugins/ant-design-vue'
import './less/WMlib.less'
import './mock'
import VueFormCreation from '../packages/index'
// import VueFormCreation from 'vue-form-creation'
// import 'vue-form-creation/dist/vue-form-creation.css'
Vue.use(VueFormCreation)

Vue.config.productionTip = false

new Vue({
  store: VueFormCreation.vfcStore,
  router,
  render: h => h(App)
}).$mount('#app')
