<template>
  <div style="border-bottom: 1px solid #dededf">
    <div class="ui container top-box">
      <div class="header-box">
        <Tag :value="tagName" :color="tagColor"></Tag>
        <div style="font-size: 22px">
          <b><em>学习榜单</em></b>
        </div>
      </div>
      <div class="ui three cards top-content">
        <div class="card rank-List">
          <div class="top_icon">
            <Ribbon
              :mainColor="mainColor_left"
              :sideColor="sideColor_left"
              :rankName="rankName_left"
            ></Ribbon>
          </div>
          <a-space style="margin-top: 40px" direction="vertical" :size="20">
            <div class="rank_list_item">
              <a-space :size="10">
                <img
                  class="ui rounded mini image"
                  src="https://static.mukewang.com/static/img/index-v3/top1.png"
                />
                <img
                  class="ui rounded image"
                  style="width: 250px"
                  src="https://img3.mukewang.com/szimg/6124bf8c09eb7d2700000000.png"
                />
                <div class="item_content">
                  <!-- <div>Python3.8系统入门+进阶 (程序员必备第二语言)</div> -->
                  <a-typography-paragraph
                    :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                    content="Python3.8系统入门+进阶 (程序员必备第二语言)"
                  />
                  <div class="price"><b>￥366.00</b></div>
                  <div>1376人在学</div>
                </div>
              </a-space>
            </div>
            <div class="rank_list_item">
              <a-space>
                <img
                  class="ui rounded mini image"
                  src="https://static.mukewang.com/static/img/index-v3/top2.png"
                />
                <img
                  class="ui rounded image"
                  style="width: 250px"
                  src="https://img3.mukewang.com/szimg/6124bf8c09eb7d2700000000.png"
                />
                <div class="item_content">
                  <!-- <div>Python3.8系统入门+进阶 (程序员必备第二语言)</div> -->
                  <a-typography-paragraph
                    :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                    content="Python3.8系统入门+进阶 (程序员必备第二语言)"
                  />
                  <div class="price"><b>￥366.00</b></div>
                  <div>1376人在学</div>
                </div>
              </a-space>
            </div>
            <div class="rank_list_item">
              <a-space>
                <img
                  class="ui rounded mini image"
                  src="https://static.mukewang.com/static/img/index-v3/top3.png"
                />
                <img
                  class="ui rounded image"
                  style="width: 250px"
                  src="https://img3.mukewang.com/szimg/6124bf8c09eb7d2700000000.png"
                />
                <div class="item_content">
                  <!-- <div>Python3.8系统入门+进阶 (程序员必备第二语言)</div> -->
                  <a-typography-paragraph
                    :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                    content="Python3.8系统入门+进阶 (程序员必备第二语言)"
                  />
                  <div class="price"><b>￥366.00</b></div>
                  <div>1376人在学</div>
                </div>
              </a-space>
            </div>
          </a-space>
          <footer>
            <a-button size="small" type="primary" shape="round" danger>
              查看完整榜单</a-button
            >
          </footer>
        </div>
        <div class="card rank-List">
          <div class="top_icon">
            <Ribbon
              :mainColor="mainColor_center"
              :sideColor="sideColor_center"
              :rankName="rankName_center"
            ></Ribbon>
          </div>
          <a-space style="margin-top: 40px" direction="vertical" :size="20">
            <div class="rank_list_item">
              <a-space>
                <img
                  class="ui rounded mini image"
                  src="https://static.mukewang.com/static/img/index-v3/top1.png"
                />
                <img
                  class="ui rounded image"
                  style="width: 250px"
                  src="https://img3.mukewang.com/szimg/6124bf8c09eb7d2700000000.png"
                />
                <div class="item_content">
                  <!-- <div>Python3.8系统入门+进阶 (程序员必备第二语言)</div> -->
                  <a-typography-paragraph
                    :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                    content="Python3.8系统入门+进阶 (程序员必备第二语言)"
                  />
                  <div class="price"><b>￥366.00</b></div>
                  <div>1376人在学</div>
                </div>
              </a-space>
            </div>
            <div class="rank_list_item">
              <a-space>
                <img
                  class="ui rounded mini image"
                  src="https://static.mukewang.com/static/img/index-v3/top2.png"
                />
                <img
                  class="ui rounded image"
                  style="width: 250px"
                  src="https://img3.mukewang.com/szimg/6124bf8c09eb7d2700000000.png"
                />
                <div class="item_content">
                  <!-- <div>Python3.8系统入门+进阶 (程序员必备第二语言)</div> -->
                  <a-typography-paragraph
                    :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                    content="Python3.8系统入门+进阶 (程序员必备第二语言)"
                  />
                  <div class="price"><b>￥366.00</b></div>
                  <div>1376人在学</div>
                </div>
              </a-space>
            </div>
            <div class="rank_list_item">
              <a-space>
                <img
                  class="ui rounded mini image"
                  src="https://static.mukewang.com/static/img/index-v3/top3.png"
                />
                <img
                  class="ui rounded image"
                  style="width: 250px"
                  src="https://img3.mukewang.com/szimg/6124bf8c09eb7d2700000000.png"
                />
                <div class="item_content">
                  <!-- <div>Python3.8系统入门+进阶 (程序员必备第二语言)</div> -->
                  <a-typography-paragraph
                    :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                    content="Python3.8系统入门+进阶 (程序员必备第二语言)"
                  />
                  <div class="price"><b>￥366.00</b></div>
                  <div>1376人在学</div>
                </div>
              </a-space>
            </div>
          </a-space>
          <footer>
            <a-button size="small" type="primary" shape="round" danger>
              查看完整榜单</a-button
            >
          </footer>
        </div>
        <div class="card rank-List">
          <div class="top_icon">
            <Ribbon
              :mainColor="mainColor_right"
              :sideColor="sideColor_right"
              :rankName="rankName_right"
            ></Ribbon>
          </div>
          <a-space style="margin-top: 40px" direction="vertical" :size="20">
            <div class="rank_list_item">
              <a-space>
                <img
                  class="ui rounded mini image"
                  src="https://static.mukewang.com/static/img/index-v3/top1.png"
                />
                <img
                  class="ui rounded image"
                  style="width: 250px"
                  src="https://img3.mukewang.com/szimg/6124bf8c09eb7d2700000000.png"
                />
                <div class="item_content">
                  <!-- <div>Python3.8系统入门+进阶 (程序员必备第二语言)</div> -->
                  <a-typography-paragraph
                    :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                    content="Python3.8系统入门+进阶 (程序员必备第二语言)"
                  />
                  <div class="price"><b>￥366.00</b></div>
                  <div>1376人在学</div>
                </div>
              </a-space>
            </div>
            <div class="rank_list_item">
              <a-space>
                <img
                  class="ui rounded mini image"
                  src="https://static.mukewang.com/static/img/index-v3/top2.png"
                />
                <img
                  class="ui rounded image"
                  style="width: 250px"
                  src="https://img3.mukewang.com/szimg/6124bf8c09eb7d2700000000.png"
                />
                <div class="item_content">
                  <!-- <div>Python3.8系统入门+进阶 (程序员必备第二语言)</div> -->
                  <a-typography-paragraph
                    :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                    content="Python3.8系统入门+进阶 (程序员必备第二语言)"
                  />
                  <div class="price"><b>￥366.00</b></div>
                  <div>1376人在学</div>
                </div>
              </a-space>
            </div>
            <div class="rank_list_item">
              <a-space>
                <img
                  class="ui rounded mini image"
                  src="https://static.mukewang.com/static/img/index-v3/top3.png"
                />
                <img
                  class="ui rounded image"
                  style="width: 250px"
                  src="https://img3.mukewang.com/szimg/6124bf8c09eb7d2700000000.png"
                />
                <div class="item_content">
                  <!-- <div>Python3.8系统入门+进阶 (程序员必备第二语言)</div> -->
                  <a-typography-paragraph
                    :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                    content="Python3.8系统入门+进阶 (程序员必备第二语言)"
                  />
                  <div class="price"><b>￥366.00</b></div>
                  <div>1376人在学</div>
                </div>
              </a-space>
            </div>
          </a-space>
          <footer>
            <a-button size="small" type="primary" shape="round" danger>
              查看完整榜单</a-button
            >
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tag from "@/components/Tag.vue";
import Ribbon from "@/components/Ribbon.vue";
const tagName = ref("Top");
const tagColor = ref("#fb924c");
const mainColor_left = ref("linear-gradient(120deg, #f6d365 0%, #fda085 100%)");
const sideColor_left = ref("#fcaa7f");
const rankName_left = ref("畅销榜");
const mainColor_center = ref(
  "linear-gradient(-20deg,#b721ff 0%, #21d4fd 100%)"
);
const sideColor_center = ref("#6263f5");
const rankName_center = ref("新课榜");
const mainColor_right = ref(
  "linear-gradient(-225deg,#A445B2 0%, #D41872 52%, #FF0066 100%)"
);
const sideColor_right = ref("#cd3ea0");
const rankName_right = ref("学习榜");
</script>

<style lang="less" scoped>
.top-box {
  height: 530px;
  padding: 32px 0;
  .header-box {
    display: flex;
    align-items: center;
    height: 36px;
    line-height: 36px;
  }
  .top-content {
    margin-top: 20px;
  }
  .rank-List {
    height: 400px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    .top_icon {
      display: block;
      width: 129px;
      height: 43px;
      line-height: 32px;
      position: absolute;
      left: 119px;
      top: -22px;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      text-align: center;
    }
    .rank_list_item {
      padding: 0 10px;
      .item_content {
        //padding-right: 10px;
        font-size: 12px;
        .price {
          font-size: 14px;
          color: red;
        }
      }
      &:hover {
        cursor: pointer;
        background-color: #f7f7f7;
      }
    }
    footer {
      margin-top: 12px;
      text-align: center;
    }
  }
}
</style>
