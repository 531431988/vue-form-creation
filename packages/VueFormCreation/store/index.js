// import Vuex from 'vuex'
import vfc from './modules/vfc'
import localStorage from './plugins/localStorage'
// Vue.use(Vuex)
export default {
  modules: {
    vfc
  },
  plugins: [localStorage]
}
