<script setup lang="ts">
import UploadFile from '~/components/Public/UploadFile.vue'

const url = ref('123')

function handleClick() {
  ;(document.querySelector('#upload-image') as HTMLInputElement).click()
}

watchEffect(() => {
  console.log(url.value)
})
</script>

<template>
  <button @click="handleClick">1123</button>
  <ClientOnly>
    <UploadFile id="upload-image" v-model="url" type="image" />
  </ClientOnly>
</template>
