<script setup lang="ts">
import Upload from '~/components/Editor/Upload.vue'
import { useArticle } from '~/composables/states'
import { Editor } from '@bytemd/vue-next'
import 'bytemd/dist/index.css'
import zhHans from 'bytemd/locales/zh_Hans.json'
import highlight from '@bytemd/plugin-highlight-ssr'
import frontmatter from '@bytemd/plugin-frontmatter'
import mermaid from '@bytemd/plugin-mermaid'
import { highlightPlugin, themePlugin, importPlugin } from '~/utils/editorPlugin'

const article = useArticle()
const plugins = ref([highlight(), frontmatter(), mermaid(), highlightPlugin(), themePlugin(), importPlugin()])

function handleChange(v: string) {
  article.value = v
}
</script>

<template>
  <div class="main">
    <Editor :plugins="plugins" :value="article" @change="handleChange" :locale="zhHans" />
    <Upload />
  </div>
</template>

<style lang="scss" src="~/assets/stylesheets/editor.scss"></style>
