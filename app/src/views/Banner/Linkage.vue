<template>
  <div class="list-box">
    <div class="item">
      <span>前端开发：</span>
      <span>HTML5/Vue.js/Node.js</span>
      <span style="float: right"><caret-right-outlined /></span>
    </div>
    <div class="item">
      <span>前端开发：</span>
      <span>HTML5/Vue.js/Node.js</span>
      <span style="float: right"><caret-right-outlined /></span>
    </div>
    <div class="item">
      <span>前端开发：</span>
      <span>HTML5/Vue.js/Node.js</span>
      <span style="float: right"><caret-right-outlined /></span>
    </div>
    <div class="item">
      <span>前端开发：</span>
      <span>HTML5/Vue.js/Node.js</span>
      <span style="float: right"><caret-right-outlined /></span>
    </div>
    <div class="item">
      <span>前端开发：</span>
      <span>HTML5/Vue.js/Node.js</span>
      <span style="float: right"><caret-right-outlined /></span>
    </div>
    <div class="item">
      <span>前端开发：</span>
      <span>HTML5/Vue.js/Node.js</span>
      <span style="float: right"><caret-right-outlined /></span>
    </div>
    <div class="item">
      <span>前端开发：</span>
      <span>HTML5/Vue.js</span>
      <span style="float: right"><caret-right-outlined /></span>
    </div>
  </div>
</template>

<script setup>
import { CaretRightOutlined } from "@ant-design/icons-vue";
</script>
<script>
export default defineComponent({
  components: {
    CaretRightOutlined,
  },
});
</script>

<style lang="less" scoped>
.list-box {
  height: 360px;
  margin-top: 16px;
  background-color: transparent;
  .item {
    height: 50px;
    line-height: 50px;
    padding: 0 14px;
    color: #fff;
  }
  .item:hover {
    background: rgb(57, 54, 77);
    background: -moz-linear-gradient(
      270deg,
      rgba(57, 54, 77, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
      270deg,
      rgba(57, 54, 77, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    background: linear-gradient(
      270deg,
      rgba(57, 54, 77, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
  }
}
</style>
