<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="" class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <span>项目介绍</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span>用户</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span>角色</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span>权限</span>
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
import Header from './components/Header.vue';
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
