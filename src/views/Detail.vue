<!--
 * @Author: 陆伟
 * @Date: 2021-01-24 11:57:04
 * @LastEditTime: 2021-01-24 12:02:39
 * @LastEditors: 陆伟
 * @Description: 
-->
<template>
  <van-button type="success" @click="toHome">回首页</van-button>
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