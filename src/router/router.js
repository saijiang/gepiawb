import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const routes = [
    {
        path: '/',
        component: Layout,
        redirect: 'index',
        children: [
          {
            path: 'index',
            component: () => import('@/views/gepa/index'),
            name: 'index',
            meta: { title: '首页', icon: 'dashboard', affix: true }
          }
        ]
      },
]

// 防止连续点击多次路由报错
let routerPush = Router.prototype.push;
let routerReplace = Router.prototype.replace;
// push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}
// replace
Router.prototype.replace = function push(location) {
  return routerReplace.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})
