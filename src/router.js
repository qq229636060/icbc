import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Index from './views/index.vue'
import List from './views/list.vue'
import Info from './views/info.vue'
import So from './views/so.vue'
import Infomsg from './views/infomsg.vue'
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
      path: '/list//',
      name: 'List',
      component:resolve => require(['./views/list.vue'], resolve)
    },
    {
      path: '/info///',
      name: 'Info',
      component:resolve => require(['./views/info.vue'], resolve)
    },
    {
      path: '/so////',
      name: 'So',
      component:resolve => require(['./views/so.vue'], resolve)
    },
    {
      path: '/login//',
      name: 'Login',
      component:resolve => require(['./views/login.vue'], resolve)
    },
    {
      path: '/infomsg///',
      name: 'Infomsg',
      component:resolve => require(['./views/infomsg.vue'], resolve)
    }
  ]
})
