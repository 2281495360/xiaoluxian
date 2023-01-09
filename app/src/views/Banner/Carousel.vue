<template>
  <a-carousel effect="fade" autoplay arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div>
      <img
        src="https://img3.mukewang.com/63bb7bbc000195e717920764.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        src="	https://img2.mukewang.com/63bbbb5a0001b07517920764.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        src="https://img2.mukewang.com/63bb79d60001ec0d17920764.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        src="https://img3.mukewang.com/63bb7b37000121de17920764.jpg"
        alt=""
      />
    </div>
  </a-carousel>
</template>

<script setup></script>
<script>
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
  },
});
</script>
<style scoped>
.ant-carousel :deep(.slick-slide) {
  height: 372px;
  background: transparent;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide img) {
  width: 100%;
}
.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 10;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}
</style>
