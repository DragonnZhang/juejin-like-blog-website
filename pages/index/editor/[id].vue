<script setup lang="ts">
import EditorHeader from '~/components/Editor/EditorHeader.vue'
import EditorMain from '~/components/Editor/EditorMain.vue'

const { id } = useRoute().params
const data = (
  await useFetch('/api/articleInfo', {
    method: 'POST',
    body: {
      id
    }
  })
).data

const articleInfo = useArticleInformation()

saveInformation()

function saveInformation() {
  if (data.value) {
    articleInfo.value.content = data.value.content

    for (const key of Object.keys(articleInfo.value) as (keyof typeof articleInfo.value)[]) {
      articleInfo.value[key] = data.value[key] as never
    }
  }
}
</script>

<template>
  <Head>
    <Title>写文章 - {{ data?.title }}</Title>
  </Head>
  <div class="editor">
    <EditorHeader :update="true" />
    <EditorMain />
  </div>
</template>
