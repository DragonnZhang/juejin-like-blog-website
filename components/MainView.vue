<script setup lang="ts">
const leftBarData = ref([
  {
    text: '关注',
    url: '/following'
  },
  {
    text: '综合',
    url: '/recommended'
  },
  {
    text: '后端',
    url: '/backend'
  },
  {
    text: '前端',
    url: '/frontend'
  },
  {
    text: 'Android',
    url: '/android'
  },
  {
    text: 'iOS',
    url: '/ios'
  },
  {
    text: '人工智能',
    url: '/ai'
  },
  {
    text: '开发工具',
    url: '/freebie'
  },
  {
    text: '代码人生',
    url: '/career'
  },
  {
    text: '阅读',
    url: '/article'
  },
])

const bodyData = ref([
  {
    id: 0,
    title: '🚀3.40秒到231.84毫秒，我用Performance面板分析性能瓶颈全流程（多',
    article_link: '',
    abstract: 'Today is a good day.',
    author: 'Dragon',
    view: 1,
    tags: [
      {
        tag: 'Vue',
        url: ''
      },
      {
        tag: 'Front-end',
        url: ''
      }
    ],
    likes: 0,
    imgUrl: '',
    alt: 'No content.'
  }
])
</script>

<template>
  <div class="view timeline-index-view">
    <MainViewLeftSideBar :data="leftBarData" />
    <MainViewBody :data="bodyData" />
  </div>
</template>

<style scoped lang="scss">
.view.timeline-index-view {
  margin-top: 1.66rem;
}

.timeline-index-view {
  display: flex;
  flex-direction: row;
}
</style>