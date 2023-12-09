<script setup lang="ts">
const props = defineProps<{
  title: string
  relateEl: HTMLElement
}>()

const modelValue = defineModel<boolean>()

function handleClose(e: Event) {
  // when I click delete button or sth else,
  // e.target will no longer exists in dom, so added document contains judge
  if (props.relateEl.contains(e.target as Node) || !document.contains(e.target as Node)) return
  modelValue.value = false
}
</script>

<template>
  <div v-clickoutside="handleClose" class="panel" v-show="modelValue">
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
  background-color: var(--juejin-background-color-4);
  border: 1px solid var(--juejin-border-dark);
  border-radius: 2px;
  cursor: default;
  z-index: 100;
  user-select: none;

  &::before {
    content: '';
    position: absolute;
    margin-left: -0.5rem;
    top: -0.6rem;
    right: 2rem;
    width: 1rem;
    height: 1rem;
    background-color: var(--juejin-background-color-4);
    border: 1px solid var(--juejin-border-dark);
    border-right: none;
    border-bottom: none;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .title {
    padding: 24px 20px 18px 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: white;
    border-bottom: 1px solid var(--juejin-border-dark);
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
  border-top: 1px solid var(--juejin-border-dark);
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
</style>
