<template>
  <div class="container">
    <div class="ui massive very relaxed horizontal divided animated list">
      <div class="item">
        <img
          class="ui avatar image"
          src="https://img.mukewang.com/601bd59c0001fc1800900090.jpg"
        />
        <div class="content">
          <div class="header" style="font-size: 16px">Java工程师</div>
          <div class="bottom aligned content" style="font-size: 12px">
            王牌编程语言
          </div>
        </div>
      </div>
      <div class="item">
        <img
          class="ui avatar image"
          src="https://img2.mukewang.com/601bd5b2000180bb00900090.jpg"
        />
        <div class="content">
          <div class="header" style="font-size: 16px">手写操作系统</div>
          <div class="bottom aligned content" style="font-size: 12px">
            搞懂计算机本质
          </div>
        </div>
      </div>
      <div class="item">
        <img
          class="ui avatar image"
          src="https://img4.mukewang.com/601bd5ba0001fbfa00900090.jpg"
        />
        <div class="content">
          <div class="header" style="font-size: 16px">前端工程师</div>
          <div class="bottom aligned content" style="font-size: 12px">
            零基础首选易上手
          </div>
        </div>
      </div>
      <div class="item">
        <img
          class="ui avatar image"
          src="https://img.mukewang.com/601bd5d700019a9500900090.jpg"
        />
        <div class="content">
          <div class="header" style="font-size: 16px">Python工程师</div>
          <div class="bottom aligned content" style="font-size: 12px">
            超强生命力
          </div>
        </div>
      </div>
      <div class="item">
        <img
          class="ui avatar image"
          src="https://img.mukewang.com/639fcb780001cba701000100.jpg"
        />
        <div class="content">
          <div class="header" style="font-size: 16px">大数据开发</div>
          <div class="bottom aligned content" style="font-size: 12px">
            行业平均薪资高
          </div>
        </div>
      </div>
    </div>

    <div style="margin-left: 20px; padding-top: 5px">
      <a-button type="link">更多体系课程 >></a-button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  line-height: 100px;
  .item:hover {
    cursor: pointer;
    .header {
      color: #1890ff;
    }
  }
  .header:hover {
    color: #1890ff;
  }
}
.more {
  width: 100px;
  text-align: center;
}
</style>
