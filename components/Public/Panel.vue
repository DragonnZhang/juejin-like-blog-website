<script setup lang="ts">
defineProps<{
  modelValue: boolean
  title: string
}>()
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="panel" v-show="modelValue">
    <div class="title">{{ title }}</div>
    <slot></slot>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  position: absolute;
  margin: 1.8rem 0 0 0;
  top: 100%;
  right: 0;
  width: 560px;
  font-size: 1.2rem;
  white-space: nowrap;
  color: #909090;
  background-color: black;
  border: 1px solid #ddd;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 2px #f1f1f1;
  box-shadow: 0 1px 2px #f1f1f1;
  cursor: default;
  z-index: 100;
  user-select: none;

  .title {
    padding: 24px 20px 16px 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: white;
    border-bottom: 1px solid #e5e6eb;
  }

  :deep(.form-item) {
    display: flex;
    margin: 20px 20px 32px;
  }

  :deep(.summary-box) {
    margin-bottom: 1.6rem;
  }
}

.footer {
  border-top: 1px solid #e5e6eb;
  height: 72px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 20px;

  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.panel::before {
  content: '';
  position: absolute;
  margin-left: -0.5rem;
  top: -0.6rem;
  right: 2rem;
  width: 1rem;
  height: 1rem;
  background-color: black;
  border: 1px solid #ddd;
  border-right: none;
  border-bottom: none;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
