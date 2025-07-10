<template>
  <div>
    <el-form :inline="true" :model="searchData" class="demo-form-inline">
      <el-form-item label="名称">
        <el-input v-model="searchData.name" placeholder="Approved by" clearable />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="searchData.description" placeholder="Approved by" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="showListData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column prop="description" label="描述" />
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, sizes"
      :total="total"
      :page-sizes="[5, 10, 15, 20]"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue';
import { getProjectList, IProjectListItem } from '@/api/project';

const projectList = ref<IProjectListItem[]>([]);
const total = ref<number>(0);
const searchData = reactive({
  pageNum: 1,
  pageSize: 10,
  name: '',
  description: ''
});
onMounted(() => {
  fetchData();
});
const fetchData = () => {
  getProjectList().then((res) => {
    console.log(res);
    projectList.value = res;
    total.value = res.length;
  });
};
const handleSizeChange = (val: number) => {
  console.log(val);
  searchData.pageSize = val;
};
const handleCurrentChange = (val: number) => {
  console.log(val);

  searchData.pageNum = val;
};
// 根据当前页数、页码、搜索条件获取列表数据
const showListData = computed(() => {
  return projectList.value.slice(
    (searchData.pageNum - 1) * searchData.pageSize,
    searchData.pageNum * searchData.pageSize
  );
});
const onSearch = () => {
  if (!searchData.name && !searchData.description) {
    return;
  }
  let result: IProjectListItem[] = [];
  if (searchData.name) {
    result = projectList.value.filter((item) => item.name.includes(searchData.name));
  }
  if (searchData.description) {
    result = projectList.value.filter((item) => item.description.includes(searchData.description));
  }
  projectList.value = result;
  searchData.pageNum = 1;
  total.value = result.length;
};
// watch([() => searchData.name, () => searchData.description], () => {
//   fetchData();
// });
</script>
