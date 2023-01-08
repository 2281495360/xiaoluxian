<template>
  <div class="ui huge borderless main fixed shadow menu">
    <div class="ui container">
      <div class="item" id="logo">logo</div>
      <a class="item">免费课</a>
      <a class="item">实战课</a>
      <a class="item">体系课</a>
      <a class="item">专栏</a>
      <a class="item">手记</a>
      <div class="right menu">
        <div class="item">
          <div class="ui action left icon input">
            <i class="search icon"></i>
            <input type="text" placeholder="请输入关键字..." />
            <button class="ui button">搜索</button>
          </div>
        </div>
        <a class="item">登录</a>
        <a class="item">注册</a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.shadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
</style>
