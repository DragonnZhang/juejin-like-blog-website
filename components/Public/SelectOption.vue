<script setup lang="ts">
const props = defineProps<{
  modelValue: string[]
  option: string[]
  show: boolean
  maxLength: number
}>()
const emit = defineEmits(['update:modelValue'])

function selectItem(item: string) {
  if (props.modelValue.length >= props.maxLength || props.modelValue.indexOf(item) !== -1) return
  emit('update:modelValue', [...props.modelValue, item])
}
</script>

<template>
  <Transition>
    <div class="popper" v-show="show">
      <div class="select-dropdown">
        <ul class="select-dropdown__list">
          <li v-for="k in option" :key="k" @click="selectItem(k)" class="select-dropdown__item">{{ k }}</li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.popper {
  position: absolute;
  font-size: 12px;
  line-height: 20px;
  word-wrap: break-word;
  background-color: var(--juejin-background-color-5);
  border: 1px solid var(--juejin-border-dark);
  margin-top: 3px;
  width: 335px;
  max-height: 242px;
  overflow: scroll;
  z-index: 2000;

  .select-dropdown {
    box-sizing: border-box;

    .select-dropdown__list {
      .select-dropdown__item {
        font-size: 14px;
        padding: 0 32px 0 20px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #cfd3dc;
        height: 34px;
        line-height: 34px;
        box-sizing: border-box;
        cursor: pointer;
      }
    }
  }
}
</style>
