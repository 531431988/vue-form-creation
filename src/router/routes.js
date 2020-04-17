const routers = [
  {
    path: '/login',
    component: () => import('@/views/login.vue')
  }, {
    path: '/',
    component: () => import('@/layouts/PageView.vue'),
    children: [{
      path: '',
      component: () => import('@/views/index.vue')
    }, {
      path: 'add',
      component: () => import('@/views/add.vue')
    }, {
      path: 'edit',
      component: () => import('@/views/edit.vue')
    }, {
      path: 'view',
      component: () => import('@/views/view.vue')
    }]
  }
]
export default routers
