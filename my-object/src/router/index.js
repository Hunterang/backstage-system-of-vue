import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import vueRsource from 'vue-resource'
import home from '@/components/home'
Vue.use(Router)
Vue.use(vueRsource)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect: 'hello',
      name: 'register',
      component: register
    },
    {
      path:'/home:id',
      name:'home',
      component:home
    }
  ]
})
