<!--
 * @Author: 陆伟
 * @Date: 2021-01-24 11:56:44
 * @LastEditTime: 2021-01-24 17:16:43
 * @LastEditors: 陆伟
 * @Description: 
-->
<template>
  <van-search v-model="value" placeholder="请输入搜索关键词" />
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('');
    return { value };
    // const router = useRouter()
    // const toDetail = () => {
    //   router.push('login')
    // }
    // return { toDetail }
  }
}
</script>