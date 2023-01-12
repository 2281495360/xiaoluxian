<template>
  <div class="box">
    <div class="ui container" style="padding: 32px 0">
      <div class="header-box">
        <Tag :value="tagName" :color="tagColor"></Tag>
        <div style="font-size: 22px">
          <b><em>进站必学</em></b>
        </div>
        <a-space style="margin-left: 20px" :size="20">
          <span class="new-good-class-item">推荐</span>
          <span class="new-good-class-item">计算机基础</span>
          <span class="new-good-class-item">前端开发</span>
          <span class="new-good-class-item">后端开发</span>
          <span class="new-good-class-item">免费精品</span>
        </a-space>
      </div>
      <div class="new-good-class-content">
        <div class="ui four cards">
          <div class="card class-item">
            <div class="image">
              <img
                src="https://img4.mukewang.com/szimg/63bbd16b09928a0605400304.png"
              />
            </div>
            <div class="content">
              <a class="header" style="font-size: 16px">
                <a-typography-paragraph
                  :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                  content="Netty-+SpringBoot开发即时通讯系统"
                />
              </a>
              <div class="meta">
                <span class="date">初级-366人报名</span>
              </div>
              <div class="description">
                <a-tag color="#f76e6e">上新特惠</a-tag>
                <b style="color: red">￥299</b>
                <span style="text-decoration: line-through">￥499</span>
              </div>
            </div>
            <!-- <div class="extra content">
                <a><i class="user icon"></i> 22 个好友 </a>
              </div> -->
          </div>
          <div class="card class-item">
            <div class="image">
              <img
                src="https://img4.mukewang.com/szimg/63bbd16b09928a0605400304.png"
              />
            </div>
            <div class="content">
              <a class="header" style="font-size: 16px">
                <a-typography-paragraph
                  :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                  content="Netty-+SpringBoot开发即时通讯系统"
                />
              </a>
              <div class="meta">
                <span class="date">初级-366人报名</span>
              </div>
              <div class="description">
                <a-tag color="#f76e6e">上新特惠</a-tag>
                <b style="color: red">￥299</b>
                <span style="text-decoration: line-through">￥499</span>
              </div>
            </div>
            <!-- <div class="extra content">
                <a><i class="user icon"></i> 22 个好友 </a>
              </div> -->
          </div>
          <div class="card class-item">
            <div class="image">
              <img
                src="https://img4.mukewang.com/szimg/63bbd16b09928a0605400304.png"
              />
            </div>
            <div class="content">
              <a class="header" style="font-size: 16px">
                <a-typography-paragraph
                  :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                  content="Netty-+SpringBoot开发即时通讯系统"
                />
              </a>
              <div class="meta">
                <span class="date">初级-366人报名</span>
              </div>
              <div class="description">
                <a-tag color="#f76e6e">上新特惠</a-tag>
                <b style="color: red">￥299</b>
                <span style="text-decoration: line-through">￥499</span>
              </div>
            </div>
            <!-- <div class="extra content">
                <a><i class="user icon"></i> 22 个好友 </a>
              </div> -->
          </div>
          <div class="card class-item">
            <div class="image">
              <img
                src="https://img4.mukewang.com/szimg/63bbd16b09928a0605400304.png"
              />
            </div>
            <div class="content">
              <a class="header" style="font-size: 16px">
                <a-typography-paragraph
                  :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                  content="Netty-+SpringBoot开发即时通讯系统"
                />
              </a>
              <div class="meta">
                <span class="date">初级-366人报名</span>
              </div>
              <div class="description">
                <a-tag color="#f76e6e">上新特惠</a-tag>
                <b style="color: red">￥299</b>
                <span style="text-decoration: line-through">￥499</span>
              </div>
            </div>
            <!-- <div class="extra content">
                <a><i class="user icon"></i> 22 个好友 </a>
              </div> -->
          </div>
          <div class="card class-item">
            <div class="image">
              <img
                src="https://img4.mukewang.com/szimg/63bbd16b09928a0605400304.png"
              />
            </div>
            <div class="content">
              <a class="header" style="font-size: 16px">
                <a-typography-paragraph
                  :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                  content="Netty-+SpringBoot开发即时通讯系统"
                />
              </a>
              <div class="meta">
                <span class="date">初级-366人报名</span>
              </div>
              <div class="description">
                <a-tag color="#f76e6e">上新特惠</a-tag>
                <b style="color: red">￥299</b>
                <span style="text-decoration: line-through">￥499</span>
              </div>
            </div>
            <!-- <div class="extra content">
                <a><i class="user icon"></i> 22 个好友 </a>
              </div> -->
          </div>
          <div class="card class-item">
            <div class="image">
              <img
                src="https://img4.mukewang.com/szimg/63bbd16b09928a0605400304.png"
              />
            </div>
            <div class="content">
              <a class="header" style="font-size: 16px">
                <a-typography-paragraph
                  :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                  content="Netty-+SpringBoot开发即时通讯系统"
                />
              </a>
              <div class="meta">
                <span class="date">初级-366人报名</span>
              </div>
              <div class="description">
                <a-tag color="#f76e6e">上新特惠</a-tag>
                <b style="color: red">￥299</b>
                <span style="text-decoration: line-through">￥499</span>
              </div>
            </div>
            <!-- <div class="extra content">
                <a><i class="user icon"></i> 22 个好友 </a>
              </div> -->
          </div>
          <div class="card class-item">
            <div class="image">
              <img
                src="https://img4.mukewang.com/szimg/63bbd16b09928a0605400304.png"
              />
            </div>
            <div class="content">
              <a class="header" style="font-size: 16px">
                <a-typography-paragraph
                  :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                  content="Netty-+SpringBoot开发即时通讯系统"
                />
              </a>
              <div class="meta">
                <span class="date">初级-366人报名</span>
              </div>
              <div class="description">
                <a-tag color="#f76e6e">上新特惠</a-tag>
                <b style="color: red">￥299</b>
                <span style="text-decoration: line-through">￥499</span>
              </div>
            </div>
            <!-- <div class="extra content">
                <a><i class="user icon"></i> 22 个好友 </a>
              </div> -->
          </div>
          <div class="card class-item">
            <div class="image">
              <img
                src="https://img4.mukewang.com/szimg/63bbd16b09928a0605400304.png"
              />
            </div>
            <div class="content">
              <a class="header" style="font-size: 16px">
                <a-typography-paragraph
                  :ellipsis="{ rows: 2, expandable: false, tooltip: true }"
                  content="Netty-+SpringBoot开发即时通讯系统"
                />
              </a>
              <div class="meta">
                <span class="date">初级-366人报名</span>
              </div>
              <div class="description">
                <a-tag color="#f76e6e">上新特惠</a-tag>
                <b style="color: red">￥299</b>
                <span style="text-decoration: line-through">￥499</span>
              </div>
            </div>
            <!-- <div class="extra content">
                <a><i class="user icon"></i> 22 个好友 </a>
              </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tag from "@/components/Tag.vue";
const tagName = ref("Good");
const tagColor = ref("#f9b94c");
</script>

<style lang="less" scoped>
.box {
  border-bottom: 1px solid #dededf;
}
.header-box {
  display: flex;
  align-items: center;
  height: 36px;
  line-height: 36px;
  .new-good-class-item:hover {
    color: #1890ff;
    cursor: pointer;
  }
}
.new-good-class-content {
  margin-top: 30px;
  .class-item {
    cursor: pointer;
    transition: box-shadow 0.2s;
  }
  .class-item:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
}
</style>
