import Vue from 'vue'
import config from '@/config/index'
import '@/directive'
import '@/mock'

// if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.prototype.$config = config
Vue.prototype.$color = config.color
window.document.title = config.title
