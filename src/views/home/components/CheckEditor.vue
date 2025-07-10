<template>
  <div class="check-editor">
    <div class="check" :class="{ checked: modelValue }" @click="handleClick"></div>
    <input type="text" :value="desc" @input="handleTextChange" />
    <p>{{ modelValue }}</p>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
    desc: String
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit('update:modelValue', !props.modelValue);
    };
    const handleTextChange = (e) => {
      emit('update:desc', e.target.value);
    };
    return {
      handleClick,
      handleTextChange
    };
  }
};
</script>
<style scoped lang="less">
.check {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: #fff;
  vertical-align: middle;
  cursor: pointer;
}
.check.checked {
  background-color: #007bff;
  border-color: #007bff;
}
.check-editor {
  display: flex;
}
</style>
