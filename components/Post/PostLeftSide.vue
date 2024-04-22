<script setup lang="ts">
import LeftButton from '~/components/Public/LeftButton.vue'
import LeftBar from '~/components/Svg/LeftBar.vue'

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
    <LeftButton @click.prevent="console.log(1)" :has-badge="Boolean(likes)" type="icon-zan" :badge-number="likes" />
    <LeftButton :has-badge="Boolean(comments)" type="icon-comment" :badge-number="comments" />
    <LeftButton :has-badge="Boolean(collections)" type="icon-collect" :badge-number="collections" />
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
