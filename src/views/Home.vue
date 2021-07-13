<!--
 * @Author: 陆伟
 * @Date: 2021-07-13 14:13:51
 * @LastEditTime: 2021-07-13 14:14:03
 * @LastEditors: 陆伟
 * @Description: 
-->
<template>
  <van-button type="primary" @click="toDetail">去详情</van-button>
</template>

<script lang="ts">
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