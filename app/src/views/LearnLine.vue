<template>
  <div>
    <div class="ui container learn_line_box">
      <div class="header-box">
        <Tag :value="tagName" :color="tagColor"></Tag>
        <div style="font-size: 22px">
          <b><em>学习路线</em></b>
        </div>
        <a-space style="margin-left: 20px" :size="20">
          <span class="new-good-class-item">推荐</span>
          <span class="new-good-class-item">前端开发</span>
          <span class="new-good-class-item">后端开发</span>
          <span class="new-good-class-item">移动开发</span>
        </a-space>
      </div>
      <div class="ui three cards">
        <div class="card">
          <div class="image">
            <img
              src="https://img2.mukewang.com/szimg/5fc0981a09a4956107360180.png"
            />
          </div>
          <div class="ui top right attached label" style="background: #e98000">
            <b style="font-size: 14px; color: #fff"><em>New</em></b>
          </div>
          <div class="content">
            <div class="description">
              本路线精选程序员必修的计算机基础核心知识，有序打基 础职场走更远。
            </div>
            <div class="meta">
              <span>3步骤</span>
              <span>3门课</span>
              <div class="right floated">3786收藏</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img
              src="https://img2.mukewang.com/szimg/5fc0981a09a4956107360180.png"
            />
          </div>
          <div class="content">
            <div class="description">
              本路线精选程序员必修的计算机基础核心知识，有序打基 础职场走更远。
            </div>
            <div class="meta">
              <span>3步骤</span>
              <span>3门课</span>
              <div class="right floated">3786收藏</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img
              src="https://img2.mukewang.com/szimg/5fc0981a09a4956107360180.png"
            />
          </div>
          <div class="content">
            <div class="description">
              本路线精选程序员必修的计算机基础核心知识，有序打基 础职场走更远。
            </div>
            <div class="meta">
              <span>3步骤</span>
              <span>3门课</span>
              <div class="right floated">3786收藏</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img
              src="https://img2.mukewang.com/szimg/5fc0981a09a4956107360180.png"
            />
          </div>
          <div class="content">
            <div class="description">
              本路线精选程序员必修的计算机基础核心知识，有序打基 础职场走更远。
            </div>
            <div class="meta">
              <span>3步骤</span>
              <span>3门课</span>
              <div class="right floated">3786收藏</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img
              src="https://img2.mukewang.com/szimg/5fc0981a09a4956107360180.png"
            />
          </div>
          <div class="content">
            <div class="description">
              本路线精选程序员必修的计算机基础核心知识，有序打基 础职场走更远。
            </div>
            <div class="meta">
              <span>3步骤</span>
              <span>3门课</span>
              <div class="right floated">3786收藏</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img
              src="https://img2.mukewang.com/szimg/5fc0981a09a4956107360180.png"
            />
          </div>
          <div class="content">
            <div class="description">
              本路线精选程序员必修的计算机基础核心知识，有序打基 础职场走更远。
            </div>
            <div class="meta">
              <span>3步骤</span>
              <span>3门课</span>
              <div class="right floated">3786收藏</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tag from "@/components/Tag.vue";
const tagName = ref("Line");
const tagColor = ref("#5cd3fa");
</script>

<style lang="less" scoped>
.learn_line_box {
  padding: 30px 0;
}
.header-box {
  display: flex;
  align-items: center;
  height: 36px;
  line-height: 36px;
  margin-bottom: 30px;
  .new-good-class-item:hover {
    color: #1890ff;
    cursor: pointer;
  }
}
.card:hover {
  cursor: pointer;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
</style>
