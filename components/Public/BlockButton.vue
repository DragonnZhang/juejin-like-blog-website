<script setup lang="ts">
defineProps<{
  type: 'line' | 'primary'
  size?: 'medium' | 'thin'
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
    color 0.3s,
    border 0.3s;
  cursor: pointer;
}

.line {
  background-color: #121212;

  border: 1px solid #2986ff;
  color: #1e80ff;
}

.line:hover {
  border: 1px solid #2e58a5;
  color: #4783f7;
}

.thin {
  width: 90px;
  padding: 4px 0;
  border-radius: 4px;
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
