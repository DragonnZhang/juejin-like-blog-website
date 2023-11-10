<script setup lang="ts">
import Tag from '~/components/Public/Tag.vue'
import SelectOption from '~/components/Public/SelectOption.vue'

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

// arrow
const down = ref(true)

// input
const input = ref()
const wrapperRef = ref()
const focus = ref(false)
function inputFocus() {
  if (focus.value) return
  input.value.focus()
  down.value = !down.value
}
function handleFocus() {
  focus.value = true
}
function handleBlur(event: FocusEvent) {
  focus.value = false
  // focus change appears inside the wrapper
  if (event.relatedTarget && wrapperRef.value?.contains(event.relatedTarget as Node)) {
    inputFocus()
    return
  }
  down.value = true
}
</script>

<template>
  <div class="select" ref="wrapperRef" :class="{ 'select--hover': focus }">
    <div class="select__wrap" @click="inputFocus">
      <div class="select__content-wrap" tabindex="-1">
        <div class="select__placeholder" v-if="!modelValue.length">请搜索添加标签</div>
        <Tag v-else v-for="tag in modelValue" :key="tag" @close="handleClose(tag)">{{ tag }}</Tag>
        <input class="select__input" ref="input" @focus="handleFocus" @blur="handleBlur" />
      </div>
      <div class="select__icon-wrap">
        <span class="select__suffix" :class="{ down: down }">
          <i class="icon">
            <svg
              t="1561636079192"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="396971"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M512 393.6l-346.88 346.88a21.12 21.12 0 0 1-30.08 0l-30.08-30.08a21.12 21.12 0 0 1 0-30.08l376.96-377.6a42.24 42.24 0 0 1 60.16 0l376.96 377.6a21.12 21.12 0 0 1 0 30.08l-30.08 30.08a21.12 21.12 0 0 1-30.08 0z"
                p-id="396972"
              ></path>
            </svg>
          </i>
        </span>
      </div>
    </div>
  </div>
  <SelectOption />
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
  background: var(--juejin-background-color-5);
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

.select:hover,
.select--hover {
  border: 1px solid var(--juejin-panel-hover-border-color);
}

.select__input {
  padding: 0;
  border: none;
  outline: none;
  height: 30px;
  color: #c2c6cc;
  cursor: pointer;
  background-color: var(--juejin-background-color-5);
  width: 30px;
}

.select__icon-wrap {
  margin-right: -4px;
  line-height: 30px;

  .select__suffix {
    color: #c2c6cc;
    transition:
      transform 0.3s,
      -webkit-transform 0.3s;
    display: inline-block;

    .icon {
      width: 12px;
      height: 12px;
      display: inline-block;
      line-height: 1;

      svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
        pointer-events: none;
      }
    }
  }

  .down {
    transform: rotate(180deg);
  }
}
</style>