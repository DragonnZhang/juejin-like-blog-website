<script setup lang="ts">
import EditorHeader from '~/components/Editor/EditorHeader.vue'
import EditorMain from '~/components/Editor/EditorMain.vue'

const { id } = useRoute().params
const data = (
  await useFetch('/api/articleInfo', {
    method: 'post',
    body: {
      id
    }
  })
).data as Ref<Article>

const article = useArticle()
const articleInfo = useArticleInformation() as Ref<ArticleState>

if (data.value) {
  article.value = data.value.content

  for (let key in articleInfo.value) {
    articleInfo.value[key] = data.value[key]
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
