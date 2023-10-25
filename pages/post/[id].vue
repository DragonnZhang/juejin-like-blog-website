<script setup lang="ts">
import MainHeader from '~/components/MainView/MainHeader.vue'
import PostMain from '~/components/Post/PostMain.vue'

const data = ref([
  {
    text: '首页',
    url: '/',
    relate: ['/', '/following', '/recommended', '/backend', '/frontend', '/android', '/ios', '/ai', '/freebie', '/career', '/article']
  },
  {
    text: '沸点',
    url: '/pins'
  },
  {
    text: '课程',
    url: '/course'
  },
  {
    text: '直播',
    url: '/live'
  },
  {
    text: '活动',
    url: '/events/all'
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
  }
])
const url = ref('https://p3-passport.byteimg.com/img/user-avatar/4d142fd37c164eb5069cab0af2bd8a03~100x100.awebp')

const route = useRoute()
const id = route.params.id as string
</script>

<template>
  <MainHeader :data="data" :avatar-u-r-l="url" />
  <PostMain :id="id" />
</template>
