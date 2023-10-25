<script setup lang="ts">
const props = defineProps<{
  id: string
}>()
</script>

<template>
  <div class="main-area recommended-area entry-list-container shadow"></div>
</template>

<style scoped lang="scss">
.main-area {
  position: relative;
  width: 820px;
  max-width: 100%;
  box-sizing: border-box;
}

.shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
</style>
