<script setup lang="ts">
import PostContent from './PostContent.vue'
import PostLeftSide from './PostLeftSide.vue'
import PostRecommendation from './PostRecommendation.vue'
import PostRightSide from './PostRightSide.vue'

const props = defineProps<{
  id: string
}>()
const { id } = toRefs(props)
</script>

<template>
  <main class="container main-container">
    <div class="view column-view">
      <PostContent :id="id" />
      <PostRecommendation :id="id" />
      <PostLeftSide :id="id" />
      <PostRightSide :id="id" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;

  .view {
    margin-top: 1.767rem;
  }

  .column-view {
    padding: 0 0 8rem;
  }
}
</style>
