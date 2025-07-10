<template>
  <div class="login-box">
    <div class="login-form">
      <h1>中后台管理系统</h1>
      <el-form ref="formRef" :model="userInfo" :rules="rules" center class="login-info">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userInfo.username" :prefix-icon="User"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="userInfo.password" :prefix-icon="Lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="userLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { User, Lock } from '@element-plus/icons-vue';
import { useUserStore } from '@/store/user/index';
const router = useRouter();
const userStore = useUserStore();
const userInfo = reactive({
  username: '',
  password: ''
});
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
});
function userLogin() {
  userStore.storeUserLogin(userInfo).then((res) => {
    console.log(res);
    router.push('/');
  });
}
</script>
<style lang="less" scoped>
.login-box {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background-color: var(--background-color);
  .logon-form {
    display: flex;
    width: 300px;
    text-align: center;
    flex-direction: column;
    .login-info {
      height: max-content;
    }
  }
}
</style>
