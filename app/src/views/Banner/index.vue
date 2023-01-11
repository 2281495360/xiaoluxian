<template>
  <div class="ui fluid container banner-box">
    <div class="ui container banner">
      <div class="ui container banner-top">
        <div class="banner-top-left">
          <Linkage></Linkage>
        </div>
        <div class="banner-top-right">
          <Carousel></Carousel>
        </div>
      </div>
      <div class="ui container banner-bottom">
        <BottomClass></BottomClass>
      </div>
    </div>
  </div>
</template>

<script setup>
import Linkage from "./Linkage.vue";
import Carousel from "./Carousel.vue";
import BottomClass from "./BottomClass.vue";
</script>

<style lang="less" scoped>
.banner-box {
  margin-top: 4.7857rem;
  height: 546px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dededf;
}
.banner {
  height: 482.0004px;
  //   background-color: skyblue;
}
.banner-top {
  display: flex;
  height: 372px;
  //background-color: rgb(73, 222, 158);
}
.banner-bottom {
  height: 110px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 20px 0px;
  border-radius: 0px 0px 8px 8px;
}
.banner-top-left {
  width: 256px;
  background-color: #39364d;
  border-radius: 8px 0px 0px 0px;
}
.banner-top-right {
  width: 872px;
  border-radius: 0px 8px 0px 0px;
  overflow: hidden;
  //background-color: rgb(233, 117, 207);
}
</style>
