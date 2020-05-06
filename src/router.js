import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Bank from './views/bank.vue'
import Sblist from './views/sblist.vue'
import Info from './views/info.vue'
import Login from './views/login.vue'
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
      path: '/bank/',
      name: 'Bank',
      component:resolve => require(['./views/bank.vue'], resolve)
    },
    {
      path: '/sblist/',
      name: 'Sblist',
      component:resolve => require(['./views/sblist.vue'], resolve)
    },
    {
      path: '/login//',
      name: 'Login',
      component:resolve => require(['./views/login.vue'], resolve)
    },
    {
      path: '/info//',
      name: 'Info',
      component:resolve => require(['./views/info.vue'], resolve)
    }
  ]
})
