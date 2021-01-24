<!--
 * @Author: 陆伟
 * @Date: 2021-01-24 11:57:04
 * @LastEditTime: 2021-01-24 17:49:17
 * @LastEditors: 陆伟
 * @Description: 
-->
<template>
  <div class="login-box">
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">登陆</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue';
import { Toast } from 'vant'

export default {
  setup() {
    const state = reactive({
      username: 'admin',
      password: '123456',
    });
    const router = useRouter()
    const onSubmit = (values) => {
      Toast('登陆成功！')
      router.push('/')
      document.cookie = `username=${123456};expires=${new Date().setTime(new Date().getTime() + 10 * 60 * 1000)}`
      console.log('submit', values);
    };
    return { state,onSubmit }
  }
}
</script>
<style lang="less" scoped>
.login-box{
  padding: 20px;
  background: #f6f7f9;
  height: 100vh;
  box-sizing: border-box;
}
</style>