<script setup lang="ts">
import MainViewHeader from '~/components/MainView/MainViewHeader.vue'
import PostMain from '~/components/Post/PostMain.vue'
import type { Article } from '~/types/article'

const id = useRoute().params.id as string

const { data } = await useFetch('/api/articleInfo', {
  method: 'POST',
  body: {
    id
  }
})

const articleData: Article = data.value!

const headerData = ref([
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
</script>

<template>
  <Head>
    <Title>{{ articleData.title }}</Title>
  </Head>
  <MainViewHeader :data="headerData" :avatar-u-r-l="url" />
  <PostMain :id="id" :articleData="articleData" />
</template>
