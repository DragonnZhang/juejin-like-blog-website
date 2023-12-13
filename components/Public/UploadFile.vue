<script setup lang="ts">
const props = defineProps<{
  type: 'md' | 'image'
  id: string
}>()

const modelValue = defineModel<string>()

// compute the type input accepts
const accept = computed(() => {
  const strategy = {
    md: '.md',
    image: 'image/*'
  }

  return strategy[props.type]
})

function readFileToString(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader()

    reader.onload = function (e: Event) {
      const arrayBuffer = (e.target as FileReader).result

      // arrayBuffer to string
      const uint8Array = new Uint8Array(arrayBuffer as ArrayBuffer)
      const decoder = new TextDecoder()
      const s = decoder.decode(uint8Array)

      resolve(s)
    }

    reader.readAsArrayBuffer(file)
  })
}

function readFileToUrl(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader()

    reader.onload = function (e: Event) {
      const url = (e.target as FileReader).result as string
      resolve(url)
    }

    reader.readAsDataURL(file)
  })
}

async function handleFileChange(e: Event) {
  let file = (e.target as HTMLInputElement).files![0]

  if (!file) return

  try {
    if (props.type === 'md') {
      const value = await readFileToString(file)
      modelValue.value = value
    } else if (props.type === 'image') {
      const url = await readFileToUrl(file)
      modelValue.value = url
    }
  } catch (err) {
    console.log('文件读取出错:', err)
  }

  ;(e.target as HTMLInputElement).value = ''
}
</script>

<template>
  <!-- <ClientOnly> -->
  <input :id="id" type="file" :onchange="handleFileChange" :accept="accept" v-show="false" />
  <!-- </ClientOnly> -->
</template>
