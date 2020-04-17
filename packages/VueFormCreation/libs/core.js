import Vue from 'vue'
import config from '../config/index'
import { ls } from './utils'
import '../directive'

Vue.prototype.$ls = ls
Vue.prototype.$config = config
Vue.prototype.$color = config.color
window.document.title = config.title
