<template>
  <div class="tag-box">
    <div class="tag">
      <em
        ><b>{{ value }}</b></em
      >
    </div>
    <div class="triangle-top-left"></div>
  </div>
</template>

<script setup>
const props = defineProps(["value", "color"]);
</script>

<style lang="less" scoped>
.tag-box {
  display: flex;
  height: 30px;
}
.tag {
  text-align: center;
  height: 30px;
  line-height: 30px;
  width: 50px;
  color: #fff;
  background-color: v-bind(color);
  border-radius: 6px 0 6px 6px;
}
.triangle-top-left {
  width: 0;
  height: 0;
  border-top: 6px solid v-bind(color);
  border-right: 6px solid transparent;
}
</style>
