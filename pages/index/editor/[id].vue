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
).data as Ref<Article>

const article = useArticle()
const articleInfo = useArticleInformation() as Ref<ArticleState>

saveInformation()

function saveInformation() {
  if (data.value) {
    article.value = data.value.content

    for (const key of Object.keys(articleInfo.value)) {
      articleInfo.value[key as keyof typeof articleInfo.value] = data.value[key as keyof typeof articleInfo.value] as never
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
