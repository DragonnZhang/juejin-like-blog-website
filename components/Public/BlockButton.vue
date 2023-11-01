<script setup lang="ts">
defineProps<{
  type: 'line' | 'primary'
  size?: 'medium'
}>()
</script>

<template>
  <button :class="[type, size]">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.line {
  background-color: #fff;
  border: 1px solid #2986ff;
  border-color: #1e80ff;
  color: #1e80ff;
}

.primary {
  background-color: #1e80ff;
}

.medium {
  height: 32px;
  padding: 2px 16px;
  font-size: 14px;
  line-height: 22px;
}
</style>
