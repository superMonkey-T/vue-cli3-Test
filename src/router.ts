import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home/Home.vue'),
      children:[
        {
          path:'/Content',
          name:'Content',
          component: () => import('./views/Other/Content.vue')
        },
        {
          path:'/Test',
          name:'Test',
          component: () => import('./views/Other/Test.vue')
        },
        {
          path:'/Hello',
          name:'Hello',
          component: () => import('./views/Other/HelloWorld.vue')
        }
      ]
    },
    {
      path: '/MemberContent',
      name: 'MemberContent',
      component: () => import('./views/MemberContent/MemberContent.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/Other/About.vue')
    }
  ]
})
