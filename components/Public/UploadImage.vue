<script setup lang="ts">
import UploadFile from '~/components/Public/UploadFile.vue'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])

// bind modelValue to url so that when url changes modelValue will also change.
const url = ref(props.modelValue)
watch(url, () => {
  console.log('changed')
  emit('update:modelValue', url.value)
})

function handleClick() {
  ;(document.querySelector('#upload-image') as HTMLInputElement).click()
}
function handleDelete() {
  url.value = ''
}
</script>

<template>
  <div v-if="!url">
    <button class="select-btn" @click="handleClick">
      <div class="button-slot">
        <img src="~/assets/svg/add.svg" height="20" alt="add_cover" />
        <div class="upload">上传封面</div>
      </div>
    </button>
  </div>
  <div v-else class="preview-box">
    <img :src="url" class="preview-image" />
    <button class="delete-button" @click="handleDelete">
      <i class="icon-trash"></i>
    </button>
  </div>
  <UploadFile id="upload-image" v-model="url" type="image" />
</template>

<style scoped lang="scss">
.select-btn {
  width: 192px;
  height: 128px;
  background-color: var(--juejin-background-color-4);
  border: 1px dashed var(--jujin-border-color-1);
  cursor: pointer;

  .button-slot {
    cursor: pointer;
    display: flex;
    flex-flow: column nowrap;

    .upload {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #565d65;
      margin-top: 10px;
    }
  }
}

.preview-box {
  position: relative;
  width: 160px;
  overflow: hidden;

  .preview-image {
    width: 100%;
  }

  .delete-button {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  .icon-trash::before {
    content: '\f252';
  }
}
</style>
