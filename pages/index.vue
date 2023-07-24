<script setup lang="ts">
const data = ref([
  {
    text: '首页',
    url: '/',
    relate: ['/', '/following', '/recommended', '/backend', '/frontend', '/android', '/ios', '/ai', '/freebie', '/career', '/article']
  },
  {
    text: '沸点',
    url: '/pins',
  },
  {
    text: '课程',
    url: '/course',
  },
  {
    text: '直播',
    url: '/live',
  },
  {
    text: '活动',
    url: '/events/all',
  },
  {
    text: '竞赛',
    url: '/challenge'
  },
  {
    text: '商城',
    url: ''
  },
  {
    text: 'APP',
    url: ''
  },
  {
    text: '插件',
    url: ''
  },
])
const url = ref('https://p3-passport.byteimg.com/img/user-avatar/4d142fd37c164eb5069cab0af2bd8a03~100x100.awebp')
</script>

<template>
  <div>
    <MainHeader :data="data" :avatar-u-r-l="url" />
    <main class="container main-container with-view-nav">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped lang="scss">
main.container {
  max-width: 1200px;
}

.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
}
</style>