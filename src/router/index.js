import { createRouter, createWebHistory } from 'vue-router'
// 项目自带的是 HomeView.vue，不是 Home.vue
import Home from '../views/HomeView.vue'
// 下面这几个页面，哪个文件还没建好，就把对应的 import 和路由注释掉
import Box from '../views/Box.vue'
import Transport from '../views/Transport.vue'

import SystemUser from '../views/SystemUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/box',
    name: 'box',
    component: Box
  },
  {
    path: '/transport',
    name: 'transport',
    component: Transport
  },
  
  {
    path: '/systemUser',
    name: 'systemUser',
    component: SystemUser
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
