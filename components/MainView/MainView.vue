<script setup lang="ts">
import MainViewLeftSideBar from '~/components/MainView/MainViewLeftSideBar.vue'
import MainViewBody from '~/components/MainView/MainViewBody.vue'
import MainViewHeader from '~/components/MainView/MainViewHeader.vue'

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
  }
])

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
</script>

<template>
  <MainViewHeader :data="data" :avatar-u-r-l="url" />
  <main class="container main-container with-view-nav">
    <div class="view timeline-index-view">
      <MainViewLeftSideBar :data="leftBarData" />
      <MainViewBody />
    </div>
  </main>
</template>

<style scoped lang="scss">
.view.timeline-index-view {
  margin-top: 1.66rem;
}

.timeline-index-view {
  display: flex;
  flex-direction: row;
}

main.container {
  max-width: 1200px;
}

@media (max-width: 1220px) {
  main.container {
    max-width: 1000px;
  }
}

.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
}
</style>
