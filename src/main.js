/*
 * @Author: 陆伟
 * @Date: 2021-01-24 11:47:34
 * @LastEditTime: 2021-01-24 11:55:58
 * @LastEditors: 陆伟
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)
app.use(Vant)

app.mount('#app')