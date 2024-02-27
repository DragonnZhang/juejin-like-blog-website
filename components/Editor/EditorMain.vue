<script setup lang="ts">
import UploadFile from '~/components/Public/UploadFile.vue'
import { useArticle } from '~/composables/states'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Editor } from '@bytemd/vue-next'
import 'bytemd/dist/index.css'
import zhHans from 'bytemd/locales/zh_Hans.json'
import highlight from '@bytemd/plugin-highlight-ssr'
import frontmatter from '@bytemd/plugin-frontmatter'
import { highlightPlugin, themePlugin, importPlugin } from '~/utils/editorPlugin'

const article = useArticle()
const plugins = ref([highlight(), frontmatter(), themePlugin(), highlightPlugin(), importPlugin()])

function handleChange(v: string) {
  article.value = v
}
</script>

<template>
  <RenderCacheable>
    <div class="main">
      <Editor :plugins="plugins" :value="article" @change="handleChange" :locale="zhHans" />
      <UploadFile id="upload-markdown" v-model="article" type="md" />
    </div>
  </RenderCacheable>
</template>

<style scoped lang="scss" src="~/assets/stylesheets/editor.scss"></style>
