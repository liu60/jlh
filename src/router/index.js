import Vue from 'vue'
import Router from 'vue-router'
import index from './../components/index.vue'
import daili from './../components/daili.vue'
import personal from './../components/personal'
import saveMoney from './../components/personal-comp/save-money.vue'
import getMoney from './../components/personal-comp/get-money.vue'
import transfer from './../components/personal-comp/transfer.vue'
import qq from './../components/personal-comp/qq.vue'
import wx from './../components/personal-comp/wx.vue'
import pay from './../components/personal-comp/pay.vue'
import bank from './../components/personal-comp/bank.vue'
import union from './../components/personal-comp/union.vue'
import online from './../components/personal-comp/online.vue'
import reg from  './../components/register.vue'
import favourable from './../components/favourable'

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
      path: '/daili',
      name: 'daili',
      component: daili
    },
    {
      path:'/favourable',
      name:'favourable',
      component:favourable
    },
    {
      path: '/personal',
      name: '/personal',
      component: personal,
      children: [{
        path: 'save-money',
        component: saveMoney,
        children: [{
          path: 'qq',
          component: qq,
        },
        {
          path: 'wx',
          component: wx,
        },
        {
          path: 'pay',
          component: pay,
        },
        {
          path: 'bank',
          component: bank,
        },
        {
          path: 'union',
          component: union,
        },
        {
          path: 'online',
          component: online,
        }]
      },
      {
        path: 'get-money',
        component: getMoney,
      },
      {
        path: 'transfer',
        component: transfer,
      }]
    },
    {
      path: '/daili',
      name: 'daili',
      component: daili
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    }
  ]
})
