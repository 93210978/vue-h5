<!--
 * @Author: 陆伟
 * @Date: 2021-04-09 16:40:33
 * @LastEditTime: 2021-04-09 16:41:22
 * @LastEditors: 陆伟
 * @Description: 
-->
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