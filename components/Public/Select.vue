<script setup lang="ts">
import Tag from '~/components/Public/Tag.vue'

const props = defineProps<{
  modelValue: string[]
  selection: string[]
  maxLength: number
}>()
const emit = defineEmits(['update:modelValue'])

function handleClose(tag: string) {
  const newArray = props.modelValue.filter((value) => value !== tag)
  emit('update:modelValue', newArray)
}

function inputFocus() {
  ;(document.querySelector('.select__input') as HTMLInputElement).focus()
}
</script>

<template>
  <div class="select">
    <div class="select__wrap" @click="inputFocus">
      <div class="select__content-wrap">
        <div class="select__placeholder" v-if="modelValue.length === 0">请搜索添加标签</div>
        <Tag v-else v-for="tag in modelValue" :key="tag" @close="handleClose(tag)">{{ tag }}</Tag>
        <input class="select__input" style="width: 30px" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.select {
  width: 335px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  background: var(--juejin-panel-background-color);
  border-radius: 2px;
  border: 1px solid var(--jujin-border-color-1);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  .select__wrap {
    position: relative;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    padding: 0 12px;

    .select__content-wrap {
      flex: 1;
      flex-wrap: wrap;
      overflow: hidden;
      display: flex;
      position: relative;

      .select__placeholder {
        line-height: 30px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #c2c6cc;
        text-align: left;
      }
    }
  }
}

.select:hover {
  border: 1px solid var(--juejin-panel-hover-border-color);
}

.select__input {
  padding: 0;
  border: none;
  outline: none;
  height: 30px;
  color: #c2c6cc;
  cursor: pointer;
  background-color: var(--juejin-panel-background-color);
}
</style>
