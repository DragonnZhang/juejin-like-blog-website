<script setup lang="ts">
defineProps<{
  type: 'line' | 'primary'
}>()
</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss"></style>
