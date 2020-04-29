import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Bank from './views/bank.vue'
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
      path: '/bank',
      name: 'Bank',
      component:resolve => require(['./views/bank.vue'], resolve)
    }
  ]
})
