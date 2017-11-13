import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import lists from '@/components/com/lists'
import detail from '@/components/detail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/lists/:id',
      name:'lists',
      component: lists
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:detail
    }
  ]
})
