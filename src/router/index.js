/*
 * @Author: 陆伟
 * @Date: 2021-01-24 11:55:22
 * @LastEditTime: 2021-01-24 18:15:25
 * @LastEditors: 陆伟
 * @Description: 
 */
import { createRouter, createWebHashHistory, createWebHistory, START_LOCATION } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

// createRouter 创建路由实例
const router = createRouter({
  // hash模式：createWebHashHistory、history模式：createWebHistory
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/Login', component: Login },
  ]
})
router.beforeEach((to, from, next) => {
  const isCookie = document.cookie.split(';').some(item => item.indexOf('username=') === 0)
  if (to.path == '/login') {
    if (isCookie) {
      router.push('/')
    }
  } else {
    if (!isCookie) {
      router.push('login')
    }
  }
  next()
})
// 抛出路由实例, 在 main.js 中引用
export default router