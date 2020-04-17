import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.VUE_APP_PUBLIC_PATH,
  scrollBehavior: () => ({ y: 0 }),
  routes
})