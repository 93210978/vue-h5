<!--
 * @Author: 陆伟
 * @Date: 2021-01-22 15:40:32
 * @LastEditTime: 2021-01-24 11:54:02
 * @LastEditors: 陆伟
 * @Description: 
-->
创建项目
```
  yarn create vite-app vue-h5  
  cd vue-h5  
  yarn  
  yarn dev  
```

安装依赖
```
  yarn add vue-router@next
  yarn add vant@next
```

新增 router/index.js 文件，并定义好路由
```
  import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
  import Home from '../views/Home.vue'
  import Detail from '../views/Detail.vue'

  // createRouter 创建路由实例
  const router = createRouter({
    // hash模式：createWebHashHistory、history模式：createWebHistory
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/detail', component: Detail },
    ]
  })

  // 抛出路由实例, 在 main.js 中引用
  export default router
```
在 main.js 文件引入依赖
```
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
```

修改 App.vue 文件
```
<template>
  <router-view />
</template>
<script>
export default {
  name: 'App'
}
</script>
```

新增views/Home.vue文件
```
<template>
  <van-button type="primary" @click="toDetail">去详情</van-button>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const toDetail = () => {
      router.push('detail')
    }
    return { toDetail }
  }
}
</script>
```
新增views/Detail.vue文件
```
<template>
  <van-button type="primary" @click="toHome">去首页</van-button>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const toHome = () => {
      router.push('/')
    }
    return { toHome }
  }
}
</script>
```
启动
```
yarn dev
```




