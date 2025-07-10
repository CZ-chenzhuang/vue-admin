<template>
  <div>
    <CheckEditor v-for="item in products" :key="item.id" v-model="item.sell" v-model:desc="item.name"></CheckEditor>
    <template v-for="(item, index) in sells" :key="item.id">
      <span>{{ index }}</span>
      <span>{{ item.name }}</span>
    </template>
  </div>
</template>
<script>
const list = [
  {
    id: 1,
    sell: true,
    name: 'xiaomin'
  },
  {
    id: 2,
    sell: false,
    name: 'huawei'
  },
  {
    id: 3,
    sell: false,
    name: 'iphone'
  }
];
import { ref, computed } from 'vue';
import CheckEditor from './components/CheckEditor.vue';
export default {
  components: {
    CheckEditor
  },
  setup() {
    const productsRef = ref(list);
    const sellProducts = computed(() => productsRef.value.filter((item) => item.sell));
    return {
      products: productsRef,
      sells: sellProducts
    };
  }
};
</script>
