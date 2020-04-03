import Vue from 'vue'
import VueStorage from 'vue-ls'
import VueHighlightJS from 'vue-highlight.js'
import config from '@/config/index'
import '@/directive'
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import vue from 'vue-highlight.js/lib/languages/vue'
import 'highlight.js/styles/default.css'
import 'highlight.js/styles/atelier-dune-light.css'

if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(VueStorage, config.storageOptions)
Vue.use(VueHighlightJS, {
  languages: {
    css,
    javascript,
    vue
  }
})

Vue.prototype.$config = config
Vue.prototype.$color = config.color
window.document.title = config.title
