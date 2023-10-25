<script setup lang="ts">
const props = defineProps<{
  id: string
}>()
</script>

<template>
  <div class="main-area article-area"></div>
</template>

<style scoped lang="scss">
.article-area {
  margin-bottom: 1.67rem;
}
.main-area {
  position: relative;
  width: 820px;
  max-width: 100%;
  box-sizing: border-box;
}
</style>
