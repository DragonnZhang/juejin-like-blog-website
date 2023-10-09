<script setup lang="ts">
import MainCard from '~/components/MainView/MainCard.vue'

await new Promise((resolve) => {
  setTimeout(resolve, 500)
})

const { articleList } = await $fetch('/api/articleList')
const bodyData = ref(articleList)
</script>

<template>
  <div class="entry-list list">
    <li class="item" v-for="data in bodyData" :key="data.id">
      <MainCard :data="data" />
    </li>
  </div>
</template>

<style scoped lang="scss">
.entry-list {
  width: 100%;
  background-color: var(--juejin-layer-1);
  position: relative;

  .item {
    transition: all 0.3s ease-in;
  }
}
</style>
