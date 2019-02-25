import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import gridIndex from '@/components/grid/gridIndex'

Vue.use(Router)

export default new Router({
  routes: [
    // 管理首页
    {
      path: '/',
      name: 'index',
      component: index
    },
    // 百万格子首页
    {
      path: '/grid/gridIndex',
      name: 'gridIndex',
      component: gridIndex
    }
  ]
})
