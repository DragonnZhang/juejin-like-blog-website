<script setup lang="ts">
import { useArticle } from '~/composables/states'

const article = useArticle()

function readFileToArrayBuffer(file: File) {
  return new Promise((resolve) => {
    const reader = new FileReader()

    reader.onload = function (e: Event) {
      const arrayBuffer = (e.target as FileReader).result
      resolve(arrayBuffer)
    }

    reader.readAsArrayBuffer(file)
  })
}

function arrayBufferToString(arrayBuffer: ArrayBuffer) {
  const uint8Array = new Uint8Array(arrayBuffer)
  const decoder = new TextDecoder()
  let s = decoder.decode(uint8Array)

  return s
}

async function handleFileChange(e: Event) {
  let file = (e.target as HTMLInputElement).files![0]

  if (file) {
    try {
      const arrayBuffer = await readFileToArrayBuffer(file)
      article.value = arrayBufferToString(arrayBuffer as ArrayBuffer)
    } catch (error) {
      console.error('文件读取失败:', error)
    }
  }
}
</script>

<template>
  <ClientOnly>
    <input id="upload" type="file" :oninput="handleFileChange" accept=".md" v-show="false" />
  </ClientOnly>
</template>
