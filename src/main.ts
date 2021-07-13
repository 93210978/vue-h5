/*
 * @Author: 陆伟
 * @Date: 2021-07-13 13:41:04
 * @LastEditTime: 2021-07-13 14:15:27
 * @LastEditors: 陆伟
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)
app.use(Vant)

app.mount('#app')