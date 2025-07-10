<template>
  <div class="header">
    <div class="header-logo flex-center m05">Header</div>
    <div class="flex-grow"></div>
    <div class="header-user flex-center text-color-dark m05">
      <el-icon><User /></el-icon>{{ userStore.username }}
    </div>
    <div class="header-setting flex-center text-color-dark m05" @click="drawer = true">
      <el-icon><Setting /></el-icon>
      设置
    </div>

    <el-drawer v-model="drawer" :with-header="false">
      <div class="drawer-header">
        <span>项目设置</span>
        <span class="drawer-close">
          <el-icon @click="drawer = false">
            <Close />
          </el-icon>
        </span>
      </div>
      <div class="drawer-content">
        <!-- 退出登录 -->
        <el-button @click="logout">退出登录</el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { User, Setting, Close } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useUserStore } from '@/store/user';
const router = useRouter();
const userStore = useUserStore();

const drawer = ref(false);

const logout = () => {
  window.sessionStorage.removeItem('userInfo');
  router.push('/login');
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #eee;
  margin-bottom: 5px;
}
.header-setting {
  cursor: pointer;
}
.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  .drawer-close {
    cursor: pointer;
  }
}
</style>
