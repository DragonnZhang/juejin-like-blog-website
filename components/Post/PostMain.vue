<script setup lang="ts">
import PostContent from './PostContent.vue'
import PostLeftSide from './PostLeftSide.vue'
import PostRecommendation from './PostRecommendation.vue'
import PostRightSide from './PostRightSide.vue'
import { Article } from '~/utils/type'

const props = defineProps<{
  id: string
  articleData: Article
}>()
const { id, articleData } = toRefs(props)
</script>

<template>
  <main class="container main-container">
    <div class="view column-view">
      <PostContent
        :id="id"
        :title="articleData.title"
        :content="articleData.content"
        :author="articleData.author"
        :views="articleData.views"
      />
      <PostRecommendation :id="id" />
      <PostLeftSide :id="id" :likes="articleData.likes" :comments="articleData.comments" :collections="articleData.collections" />
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
