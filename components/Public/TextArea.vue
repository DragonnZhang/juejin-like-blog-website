<script setup lang="ts">
const modelValue = defineModel<string>()
</script>

<template>
  <div class="input">
    <textarea
      :value="modelValue"
      @input="modelValue = ($event.target as HTMLInputElement).value"
      maxlength="100"
      rows="5"
      spellcheck="false"
    ></textarea>
  </div>
</template>

<style scoped lang="scss">
.input {
  width: 100%;
  display: inline-block;
  font-size: 14px;
  line-height: 1.5;

  vertical-align: middle;
  border-collapse: separate;
  border-spacing: 0;
}

textarea {
  border: 1px solid var(--jujin-border-color-1);
  border-radius: 2px;
  width: 100%;
  display: inline-block;
  color: white;
  line-height: 1.5;
  background-color: var(--juejin-panel-background-color);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  font-size: 14px;
  height: auto;
  padding: 6px 10px;
  vertical-align: top;
  -webkit-transition:
    all 0.3s,
    height 0s;
  transition:
    all 0.3s,
    height 0s;
  resize: none;

  &:hover {
    background: var(--juejin-panel-hover-color);
    border-color: var(--juejin-panel-hover-border-color);
  }

  &:focus {
    background-color: var(--juejin-background-color-4);
    border-color: var(--juejin-panel-hover-border-color);
  }
}
</style>
