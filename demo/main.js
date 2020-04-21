import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import './plugins/ant-design-vue'
import './less/WMlib.less'
import VueFormCreation from '../packages/index'
// import VueFormCreation from 'vue-form-creation'
// import 'vue-form-creation/dist/vue-form-creation.css'
// process.env.NODE_ENV === 'production' ? '' : require('./mock')
require('./mock')

Vue.use(Vuex)
Vue.use(VueFormCreation)
Vue.config.productionTip = false
const store = new Vuex.Store(VueFormCreation.store)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
