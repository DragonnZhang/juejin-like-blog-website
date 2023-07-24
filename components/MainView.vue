<script setup lang="ts">
const data = ref([
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
</script>

<template>
  <div class="view timeline-index-view">
    <MainLeftSideBar :data="data" />
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