<script setup lang="ts">
defineProps<{
  choices: string[]
  modelValue: string
}>()
defineEmits(['update:modelValue'])
</script>

<template>
  <div
    class="item"
    :class="{ active: choice === modelValue }"
    v-for="choice in choices"
    :key="choice"
    @click="$emit('update:modelValue', choice)"
  >
    {{ choice }}
  </div>
</template>

<style scoped lang="scss">
.item {
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 10px;
  padding: 0 0.7rem;
  font-size: 14px;
  line-height: 28px;
  width: 88px;
  height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  border-radius: 2px;
  cursor: pointer;
  color: #727a85;
  background-color: var(--juejin-panel-background-color);
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.item:hover {
  background-color: #2d2d31;
}

.item.active {
  color: var(--juejin-panel-brand);
  background-color: #1f262e;
}
</style>
