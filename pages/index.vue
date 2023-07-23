<script setup lang="ts">
const data = ref([
  {
    text: '首页',
    url: ''
  },
  {
    text: '沸点',
    url: ''
  },
  {
    text: '课程',
    url: ''
  },
  {
    text: '直播',
    url: ''
  },
  {
    text: '活动',
    url: ''
  },
  {
    text: '竞赛',
    url: ''
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
</script>

<template>
  <div>
    <MainHeader :data="data"
      avatar-u-r-l="https://p3-passport.byteimg.com/img/user-avatar/4d142fd37c164eb5069cab0af2bd8a03~100x100.awebp" />
    <NuxtPage />
  </div>
</template>