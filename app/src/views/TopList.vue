<template>
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
          <Ribbon></Ribbon>
        </div>
        <a-space style="margin-top: 40px" direction="vertical" :size="20">
          <div class="rank_list_item">
            <a-space>
              <span>icon</span>
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
              <span>icon</span>
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
              <span>icon</span>
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
          <Ribbon></Ribbon>
        </div>
        <a-space style="margin-top: 40px" direction="vertical" :size="20">
          <div class="rank_list_item">
            <a-space>
              <span>icon</span>
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
              <span>icon</span>
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
              <span>icon</span>
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
          <Ribbon></Ribbon>
        </div>
        <a-space style="margin-top: 40px" direction="vertical" :size="20">
          <div class="rank_list_item">
            <a-space>
              <span>icon</span>
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
              <span>icon</span>
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
              <span>icon</span>
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
</template>

<script setup>
import Tag from "@/components/Tag.vue";
import Ribbon from "@/components/Ribbon.vue";
const tagName = ref("Top");
const tagColor = ref("#fb924c");
</script>

<style lang="less" scoped>
.top-box {
  height: 530px;
  padding: 32px 0;
  background-color: pink;
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
    .top_icon {
      display: block;
      width: 129px;
      height: 43px;
      line-height: 32px;
      position: absolute;
      left: 119px;
      top: -22px;
      background-color: pink;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      text-align: center;
    }
    .rank_list_item {
      .item_content {
        padding-right: 25px;
        font-size: 12px;
        .price {
          font-size: 14px;
          color: red;
        }
      }
    }
    footer {
      margin-top: 12px;
      text-align: center;
    }
  }
}
</style>
