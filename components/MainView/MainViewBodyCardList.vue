<script setup lang="ts">
import MainViewBodyCardListItem from '~/components/MainView/MainViewBodyCardListItem.vue'
import VirtualList from '~/components/Public/VirtualList.vue'

await new Promise((resolve) => {
  setTimeout(resolve, 500)
})

const { articleList } = await $fetch('/api/articleList')
const bodyData = ref(articleList.slice(0, 15))

function handleGetMoreData() {
  setTimeout(() => {
    bodyData.value = articleList
  }, 1000)
}
</script>

<template>
  <div class="entry-list list">
    <VirtualList :dataSource="bodyData" :itemHeight="99" @getMoreData="handleGetMoreData">
      <template #item="{ item }">
        <MainViewBodyCardListItem :data="item" />
      </template>
    </VirtualList>
  </div>
</template>

<style scoped lang="scss">
.entry-list {
  width: 100%;
  background-color: var(--juejin-layer-1);
  position: relative;
}
</style>
