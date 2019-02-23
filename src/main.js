import Vue from 'vue'
import router from './router/router'
import store from './store'
import App from './App.vue'
import Cookies from 'js-cookie'
import 'common/css/reset.scss'

Vue.config.productionTip = false

// 遍历所有路由,设置页面title
router.beforeEach((to, from, next) => {
  const user = Cookies.get('user')
  if (!user && to.path !== '/') {
    next('/')
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
