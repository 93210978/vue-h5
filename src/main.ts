/*
 * @Author: 陆伟
 * @Date: 2021-07-13 13:41:04
 * @LastEditTime: 2021-07-22 16:39:07
 * @LastEditors: 陆伟
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible/index.js'

const app = createApp(App)

app.use(router)
app.use(Vant)

app.mount('#app')