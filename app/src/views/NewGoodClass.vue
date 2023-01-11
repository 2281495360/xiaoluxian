<template>
  <div class="box">
    <div class="ui container" style="padding: 32px 0; height: 100%">
      <div class="header-box">
        <Tag :value="tagName" :color="tagColor"></Tag>
        <div style="font-size: 22px">
          <b><em>新上好课</em></b>
        </div>
        <a-space style="margin-left: 20px" :size="20">
          <span class="new-good-class-item">推荐</span>
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
              <a class="header">Kristy</a>
              <div class="meta">
                <span class="date">2013年加入</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
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
              <a class="header">Kristy</a>
              <div class="meta">
                <span class="date">2013年加入</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
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
              <a class="header">Kristy</a>
              <div class="meta">
                <span class="date">2013年加入</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
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
              <a class="header">Kristy</a>
              <div class="meta">
                <span class="date">2013年加入</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
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
              <a class="header">Kristy</a>
              <div class="meta">
                <span class="date">2013年加入</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
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
              <a class="header">Kristy</a>
              <div class="meta">
                <span class="date">2013年加入</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
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
              <a class="header">Kristy</a>
              <div class="meta">
                <span class="date">2013年加入</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
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
              <a class="header">Kristy</a>
              <div class="meta">
                <span class="date">2013年加入</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
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
const tagName = ref("Hot");
const tagColor = ref("#e66061");
</script>

<style lang="less" scoped>
.box {
  height: 698px;
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
  height: 568px;
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
