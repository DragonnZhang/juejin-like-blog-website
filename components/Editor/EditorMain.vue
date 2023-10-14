<script setup lang="ts">
// import UploadButton from '~/components/Editor/UploadButton.vue'
import { useArticle } from '~/composables/states'
import 'bytemd/dist/index.css'
import 'highlight.js/styles/monokai-sublime.css'
// import 'highlight.js/styles/github.css'
import zhHans from 'bytemd/lib/locales/zh_Hans.json'
import highlight from '@bytemd/plugin-highlight-ssr'
import frontmatter from '@bytemd/plugin-frontmatter'
import { Editor } from '@bytemd/vue-next'

const article = useArticle()
const plugins = ref([highlight(), frontmatter()])

function handleChange(v: string) {
  article.value = v
}
</script>

<template>
  <div class="main">
    <Editor :plugins="plugins" :value="article" @change="handleChange" :locale="zhHans" />
  </div>
</template>

<style lang="scss" src="~/assets/stylesheets/editor.scss"></style>
