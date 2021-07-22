<!--
 * @Author: 陆伟
 * @Date: 2021-07-13 14:13:51
 * @LastEditTime: 2021-07-22 16:50:04
 * @LastEditors: 陆伟
 * @Description: 
-->
<template>
  <van-button type="primary" @click="toDetail">去详情</van-button>
  <div class="red">

  </div>
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
<style lang="less" scoped>
.red{
  background: #0ff;
  width: 100px;
  height: 100px;
}
</style>