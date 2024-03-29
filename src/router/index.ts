/*
 * @Author: 陆伟
 * @Date: 2021-07-13 14:07:45
 * @LastEditTime: 2021-07-13 15:31:14
 * @LastEditors: 陆伟
 * @Description: 
 */
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'

// createRouter 创建路由实例
const router = createRouter({
  // hash模式：createWebHashHistory、history模式：createWebHistory
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/detail', component: Detail },
  ]
})

// 抛出路由实例, 在 main.js 中引用
export default router


