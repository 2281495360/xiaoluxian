<template>
  <Header></Header>
  <div style="margin-top: 4.7857rem">
    <div class="course_infos_top">
      <div class="ui container title_box">
        <span> 首页>课程页>课程详情 </span>
        <h1 class="ui center aligned header">
          Netty+SpringBoot开发即时通讯系统
        </h1>
        <h4 class="ui center aligned header">
          云通信 / 游戏 / 社交等热门赛道中的必会项目
        </h4>
        <div class="price_box">
          <div class="left_box">
            <div class="left_box_top">
              <a class="ui red tag label" style="font-size: 16px"
                >上新特惠 截止2月2日</a
              >
              <span class="sale_price">￥366.00</span>
              <span class="ori_price">原价￥999.00</span>
            </div>
            <a-space style="margin-top: 8px">
              <span><b>难度：</b>初级</span>
              <span><b>时长：</b>21小时</span>
              <span><b>学习人数：</b>70</span>
              <span><b>综合评分：</b>10.0</span>
            </a-space>
          </div>
          <div class="right_box">
            <a-space>
              <a-button type="primary" shape="round" danger size="large"
                >立即购买</a-button
              >
              <a-button shape="round" danger size="large">加入购物车</a-button>
            </a-space>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <Footer></Footer> -->
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="less" scoped>
.course_infos_top {
  height: 288px;
  background-image: url(https://img.mukewang.com/szimg/63b3ee7309187c1b40000576.jpg);
  .title_box {
    padding-top: 16px;
    position: relative;
    h1 {
      font-size: 40px;
      color: #fff;
    }
    h4 {
      color: #fff;
    }
    .price_box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 128px;
      width: 100%;
      height: 128px;
      position: absolute;
      bottom: -195px;
      padding: 32px 40px;
      background-image: url(https://coding.imooc.com/static/module/img/fixed_bg.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 18px;
      box-shadow: 0 8px 16px 0 rgb(28 31 33 / 10%);
      .left_box {
        .left_box_top {
          display: flex;
          align-items: center;
        }
      }
      .sale_price {
        font-size: 32px;
        color: #f01414;
        line-height: 32px;
        font-weight: 700;
      }
      .ori_price {
        font-size: 14px;
        color: #93999f;
        font-weight: 700;
        line-height: 32px;
        margin-left: 8px;
        margin-right: 2px;
        text-decoration: line-through;
      }
    }
  }
}
</style>
