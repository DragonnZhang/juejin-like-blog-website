<script setup lang="ts">
defineProps<{
  label: string
  required?: boolean
}>()
</script>

<template>
  <div class="form-item">
    <div class="label" :class="{ required }">{{ label }}</div>
    <div class="form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-item {
  .label {
    line-height: 28px;

    font-weight: 400;
    font-size: 14px;
    text-align: right;
    color: white;
    width: 85px;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;

    &.required::before {
      content: '*';
      color: #f53f3f;
      vertical-align: -2px;
    }
  }

  .form-item-content {
    flex: auto;
    white-space: normal;
  }
}
</style>
