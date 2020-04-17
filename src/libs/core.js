import Vue from 'vue'
import config from '@/config/index'
import Bus from './bus'
import { ls } from '@/libs/utils'
import '@/directive'
import '@/mock'
import VueFormCreation from '@/components/VueFormCreation'


// if (process.env.NODE_ENV !== 'production') require('@/mock')
Vue.component(VueFormCreation.name, VueFormCreation)
Vue.prototype.$ls = ls
Vue.prototype.$bus = Bus
Vue.prototype.$config = config
Vue.prototype.$color = config.color
window.document.title = config.title
