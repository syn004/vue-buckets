import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '',
  //   redirect: 'index' // 地址为空的时候,重定向到index页面
  // },
  {
    path: '/',
    name: 'index',
    component: () => import('pages/index/index'), //懒加载路由
    meta: {
      title: '勿忘初心'
    }
  }
]

export default new VueRouter({
  routes
})