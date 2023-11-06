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
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #007fff;
  color: #fff;
  border-radius: 2px;
  border: none;
  padding: 0.5rem 1.3rem;
  outline: none;
  transition:
    background-color 0.3s,
    color 0.3s;
  cursor: pointer;
}

.line {
  background-color: #fff;
  border: 1px solid #2986ff;
  border-color: #fff;
  color: #1e80ff;
}

.primary {
  background-color: #1e80ff;
}

.primary:hover {
  background-color: var(--juejin-brand-2-hover);
}

.medium {
  height: 32px;
  padding: 2px 16px;
  font-size: 14px;
  line-height: 22px;
}
</style>
