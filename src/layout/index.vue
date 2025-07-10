<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router :default-active="activePath" class="el-menu-vertical-demo">
            <el-menu-item v-for="item in menuList" :index="item.path" :key="item.path">
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import Header from './components/Header.vue';
const route = useRoute();
const router = useRouter();
const menuList = router.getRoutes().filter((item) => {
  return item.meta.isShow;
});
const activePath = route.path;
console.log(menuList, 'menuList');
</script>
<style scoped lang="less">
.common-layout {
  height: 100%;
  .el-container {
    height: 100%;
  }
}
.el-menu {
  height: 100%;
}
.el-header {
  padding: 0;
  height: auto;
}
</style>
