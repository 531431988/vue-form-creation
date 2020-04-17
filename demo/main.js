import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import '@babel/polyfill'
import './plugins/ant-design-vue'
import './less/WMlib.less'
import './mock'
// import VueFormCreation from '../packages/index'
import VueFormCreation from 'vue-form-creation'

Vue.use(Vuex)
Vue.use(VueFormCreation)
Vue.config.productionTip = false
const store = new Vuex.Store(VueFormCreation.vfcStore)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
