/*
 * @Author: 陆伟
 * @Date: 2021-07-13 13:41:04
 * @LastEditTime: 2021-07-13 15:17:55
 * @LastEditors: 陆伟
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()]
})
