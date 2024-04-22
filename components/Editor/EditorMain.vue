<script setup lang="ts">
import UploadFile from '~/components/Public/UploadFile.vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Editor } from '@bytemd/vue-next'
import 'bytemd/dist/index.css'
import zhHans from 'bytemd/locales/zh_Hans.json'
import highlight from '@bytemd/plugin-highlight-ssr'
import frontmatter from '@bytemd/plugin-frontmatter'
import { highlightPlugin, themePlugin, importPlugin } from '~/utils/editorPlugin'

const articleInfo = useArticleInformation()
const plugins = ref([highlight(), frontmatter(), themePlugin(), highlightPlugin(), importPlugin()])

function handleChange(v: string) {
  articleInfo.value.content = v
}
</script>

<template>
  <RenderCacheable>
    <div class="main">
      <Editor :plugins="plugins" :value="articleInfo.content" @change="handleChange" :locale="zhHans" />
      <UploadFile id="upload-markdown" v-model="articleInfo.content" type="md" />
    </div>
  </RenderCacheable>
</template>

<style scoped lang="scss" src="~/assets/stylesheets/editor.scss"></style>
