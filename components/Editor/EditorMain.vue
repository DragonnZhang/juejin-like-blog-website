<script setup lang="ts">
// import UploadButton from '~/components/Editor/UploadButton.vue'
import { useArticle } from '~/composables/states'
import 'bytemd/dist/index.css'
import 'highlight.js/styles/default.css'
import zhHans from 'bytemd/lib/locales/zh_Hans.json'
import highlight from '@bytemd/plugin-highlight-ssr'
import { Editor } from '@bytemd/vue-next'

const article = useArticle()
const plugins = ref([highlight()])

function handleChange(v: string) {
  article.value = v
}
</script>

<template>
  <div class="main">
    <Editor :locale="zhHans" :plugins="plugins" :value="article" @change="handleChange" />
  </div>
</template>

<style lang="scss" src="~/assets/stylesheets/editor.scss"></style>
