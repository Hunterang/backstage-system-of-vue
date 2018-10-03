import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import vueRsource from 'vue-resource'
import home from '@/components/home'
import self from '@/components/self'
import photo from '@/components/photo'
import article from '@/components/article'
import things from '@/components/things'
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
      component:home,
      children:[
        {
          path:'/home:id/self',
          name:'self',
          component:self
        },
        {
          path:'/home:id/article',
          name:'article',
          component:article
        },
        {
          path:'/home:id/photo',
          name:'photo',
          component:photo
        },
        {
          path:'/home:id/things',
          name:'things',
          component:things
        }
      ]
    }
  ]
})
