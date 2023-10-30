<script setup lang="ts">
import LeftButton from './LeftButton.vue'
import LeftBar from '~/components/SVG/LeftBar.vue'

defineProps<{
  id: string
  likes: number
  comments: number
  collections: number
}>()
</script>

<template>
  <div class="article-suspended-panel dynamic-data-ready">
    <LeftBar />
    <LeftButton @click.prevent="console.log(1)" :has-badge="likes !== 0" type="icon-zan" :badge-number="likes" />
    <LeftButton :has-badge="comments !== 0" type="icon-comment" :badge-number="comments" />
    <LeftButton :has-badge="collections !== 0" type="icon-collect" :badge-number="collections" />
    <LeftButton :has-badge="false" type="icon-share" />
  </div>
</template>

<style scoped lang="scss">
.article-suspended-panel {
  position: fixed;
  margin-left: -7rem;
  top: 140px;
  z-index: 2;
}
</style>
