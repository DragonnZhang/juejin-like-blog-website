<script setup lang="ts">
import UploadFile from '~/components/Public/UploadFile.vue'

const modelValue = defineModel<string>()

function handleClick() {
  ;(document.querySelector('#upload-image') as HTMLInputElement).click()
}
function handleDelete() {
  modelValue.value = ''
}
</script>

<template>
  <button v-if="!modelValue" class="select-btn" @click="handleClick">
    <div class="button-slot">
      <img src="~/assets/svg/add.svg" height="20" alt="add_cover" />
      <div class="upload">上传封面</div>
    </div>
  </button>
  <div v-else class="preview-box">
    <img :src="modelValue" class="preview-image" />
    <button class="delete-button" @click="handleDelete">
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
        <path
          d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" />
        <path
          d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
      </svg>
    </button>
  </div>
  <UploadFile id="upload-image" v-model="modelValue" type="image" />
</template>

<style scoped lang="scss">
.select-btn {
  width: 192px;
  height: 128px;
  background-color: var(--juejin-panel-hover-color);
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
      color: #727a85;
      margin-top: 10px;
    }
  }
}

.preview-box {
  position: relative;
  width: 160px;
  overflow: hidden;
  z-index: 100;

  .preview-image {
    width: 100%;
  }

  .delete-button {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;

    svg {
      width: 12px;
    }
  }
}
</style>
