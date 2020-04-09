import Vue from 'vue'
import Vuex from 'vuex'
import vfc from './modules/vfc'
import getters from './getters'
import localStorage from './plugins/localStorage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vfc
  },
  state: {},
  mutations: {},
  actions: {},
  getters,
  plugins: [localStorage]
})
