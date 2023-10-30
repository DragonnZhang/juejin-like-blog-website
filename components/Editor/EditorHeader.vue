<script setup lang="ts">
import Panel from '~/components/Public/Panel.vue'
import FormItem from '~/components/Public/FormItem.vue'
import { useArticle, useArticleInformation } from '~/composables/states'

const article = useArticle()
const articleInfo = useArticleInformation()

async function publishArticle() {
  await $fetch('/api/saveArticle', {
    method: 'post',
    body: {
      title: articleInfo.value.title,
      abstract: 'This is a test article.',
      author: 'Dragon',
      publishTime: new Date(),
      content: article.value,
      views: 0,
      likes: 0,
      collections: 0,
      comments: 0,
      imgUrl: '1',
      tags: []
    }
  })
}

const displayPanel = ref(false)
</script>

<template>
  <header class="header editor-header">
    <div class="left-box"></div>
    <input placeholder="输入文章标题..." spellcheck="false" maxlength="80" class="title-input" v-model="articleInfo.title" />
    <div class="right-box">
      <div class="publish-popup">
        <button class="publish-button" @click="displayPanel = !displayPanel">发布</button>
        <Panel v-model="displayPanel" title="发布文章">
          <FormItem label="分类：" :required="true">123</FormItem>
          <FormItem label="添加标签：" :required="true">123</FormItem>
          <FormItem label="文章封面：">123</FormItem>
          <FormItem label="编辑摘要：" :required="true">123</FormItem>
          <template #footer>
            <div>12312312</div>
          </template>
        </Panel>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  padding: 0 27px;
  height: 5.334rem;
  background-color: var(--juejin-background-color);
  border-bottom: 1px solid #ddd;

  .left-box {
    padding-right: 14px;
    cursor: pointer;
  }

  .title-input {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    height: 100%;
    background-color: var(--juejin-background-color);

    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 500;
    color: var(--juejin-font-white);
    border: none;
    outline: none;
  }

  .right-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;

    .publish-popup {
      min-width: 62px;
      margin-left: 8px;
      margin-right: 8px;
      position: relative;
    }

    .publish-button {
      height: 32px;
      padding: 2px 16px;
      font-size: 14px;
      line-height: 22px;
      border: 1px solid #1d7dfa;
      border-radius: 2px;
      cursor: pointer;
      color: #fff;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      background-color: #1d7dfa;
    }
  }
}
</style>
