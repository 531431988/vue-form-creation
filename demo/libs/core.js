import Vue from 'vue'
import config from '@/config/index'
import { ls } from '@/libs/utils'
import '@/directive'
import '@/mock'
import VueFormCreation from '../../packages/index'
console.log(VueFormCreation)

// if (process.env.NODE_ENV !== 'production') require('@/mock')
Vue.use(VueFormCreation)
Vue.prototype.$ls = ls
Vue.prototype.$config = config
Vue.prototype.$color = config.color
window.document.title = config.title
