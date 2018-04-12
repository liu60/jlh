import Vue from 'vue'
import Router from 'vue-router'
import index from './../components/index'
import daili from './../components/daili'
import reg from  './../components/register'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path:'/daili',
      name:'daili',
      component:daili
    },
    {
      path:'/reg',
      name:'reg',
      component:reg
    }
  ]
})
