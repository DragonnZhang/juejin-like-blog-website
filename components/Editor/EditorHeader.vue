<script setup lang="ts">
import { useArticle } from '~/composables/states'

const article = useArticle()

async function publishArticle() {
  console.log(article.value)
  await $fetch('/api/saveArticle', {
    method: 'post',
    body: {
      article: article.value
    }
  })
}
</script>

<template>
  <header class="header editor-header">
    <div class="left-box"></div>
    <input placeholder="输入文章标题..." spellcheck="false" maxlength="80" class="title-input" />
    <div class="right-box">
      <div class="publish-popup">
        <button class="publish-button" @click="publishArticle">发布</button>
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
