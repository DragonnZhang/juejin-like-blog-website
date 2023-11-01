<script setup lang="ts">
defineProps<{
  modelValue: string
}>()
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input">
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      maxlength="100"
      rows="5"
      spellcheck="false"
    ></textarea>
  </div>
</template>

<style scoped lang="scss">
.input {
  position: relative;
  width: 100%;
  display: inline-block;
  font-size: 14px;
  line-height: 1.5;

  vertical-align: middle;
  border-collapse: separate;
  border-spacing: 0;
}

textarea {
  border: 1px solid #515151;
  border-radius: 2px;
  position: relative;
  width: 100%;
  display: inline-block;
  color: white;
  line-height: 1.5;
  background-color: var(--juejin-background-color-4);
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
}
</style>
