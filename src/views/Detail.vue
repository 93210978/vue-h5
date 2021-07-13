<!--
 * @Author: 陆伟
 * @Date: 2021-07-13 14:14:19
 * @LastEditTime: 2021-07-13 14:14:31
 * @LastEditors: 陆伟
 * @Description: 
-->
<template>
  <van-button type="primary" @click="toHome">去首页</van-button>
</template>

<script lang="ts">
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