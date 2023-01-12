<template>
  <div class="ribbon">
    <!-- The left side -->
    <div class="ribbon__side ribbon__side--l"></div>

    <!-- The left triangle displayed below the content -->
    <div class="ribbon__triangle ribbon__triangle--l"></div>
    <div class="triangle-top-right"></div>
    <!-- The right triangle displayed below the content -->
    <div class="ribbon__triangle ribbon__triangle--r"></div>

    <!-- The right side -->
    <div class="ribbon__side ribbon__side--r"></div>

    <!-- The content -->
    <div class="ribbon__content">{{ rankName }}</div>
    <div class="triangle-top-left"></div>
  </div>
</template>

<script setup>
const props = defineProps(["mainColor", "sideColor", "rankName"]);
</script>

<style lang="less" scoped>
.triangle-top-right {
  margin-top: 51px;
  margin-right: -12px;
  width: 0;
  height: 0;
  border-top: 12px solid #333;
  border-left: 12px solid transparent;
  z-index: 2;
}
.triangle-top-left {
  margin-top: 51px;
  margin-left: -12px;
  width: 0;
  height: 0;
  border-top: 12px solid #333;
  border-right: 12px solid transparent;
  z-index: 2;
}
.ribbon {
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;
  user-select: none;
  /* Size */
  height: 3rem;

  /* Use to position the corners */
  position: relative;
}

.ribbon__content {
  /* Background color */
  background-image: v-bind(mainColor);
  z-index: 1;
  line-height: 40px;
  height: 100%;
  width: 100%;
}
.ribbon__side {
  bottom: -0.75rem;
  position: absolute;

  /* Displayed under the ribbon */
  z-index: 1;

  /* Background */
  border: 1.5rem solid v-bind(sideColor);
}

.ribbon__side--l {
  /* Position */
  left: -2.25rem;
  border-color: v-bind(sideColor) v-bind(sideColor) v-bind(sideColor)
    transparent;
}

.ribbon__side--r {
  /* Position */
  right: -2.25rem;
  border-color: v-bind(sideColor) transparent v-bind(sideColor)
    v-bind(sideColor);
}

.ribbon__triangle {
  position: absolute;
  top: 100%;

  border: 0.75rem solid transparent;
  border-bottom-width: 0;
  border-top-color: #aaa;
}

.ribbon__triangle--l {
  border-right-width: 0;
  left: 0;
}

.ribbon__triangle--r {
  border-left-width: 0;
  right: 0;
}
</style>
