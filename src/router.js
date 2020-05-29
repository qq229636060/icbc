import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Index from './views/index.vue'


Vue.use(Router) 
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
   {
      path: '/',
      name: 'Index',
      component:resolve => require(['./views/index.vue'], resolve)
    },
    {
      path: '/login//',
      name: 'Login',
      component:resolve => require(['./views/login.vue'], resolve)
    },
  ]
})
