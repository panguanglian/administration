import Vue from 'vue'
import Router from 'vue-router'


import home from '@/components/home/home'
import navbars from '@/components/navbar/navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/navbars/home',
    },
    {
      path:'/navbars',
        name:'navbars',
        component:navbars,
        children:[
          {
              path: 'home',
              name: 'home',
              component: home,
              meta: {
                  keepAlive: true
              }
          },]
    }
  ]
})
