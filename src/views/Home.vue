<!--
 * @Author: 陆伟
 * @Date: 2021-01-24 11:56:44
 * @LastEditTime: 2021-01-24 11:56:44
 * @LastEditors: 陆伟
 * @Description: 
-->
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