<script setup lang="ts">
import UploadButton from '~/components/Editor/UploadButton.vue'
import { useArticle } from '~/composables/states'
import { marked } from 'marked'

const article = useArticle()
const preview = computed(() => marked.parse(article.value))
</script>

<template>
  <div class="main"></div>
</template>

<style scoped lang="scss"></style>
