<script setup lang="ts">
import Panel from '~/components/Public/Panel.vue'
import FormItem from '~/components/Public/FormItem.vue'
import BlockButton from '~/components/Public/BlockButton.vue'
import TextArea from '~/components/Public/TextArea.vue'
import UploadImage from '~/components/Public/UploadImage.vue'
import { useArticle, useArticleInformation } from '~/composables/states'

const article = useArticle()
const articleInfo = useArticleInformation()

async function publishArticle() {
  await $fetch('/api/saveArticle', {
    method: 'post',
    body: {
      title: articleInfo.value.title,
      abstract: articleInfo.value.abstract,
      author: articleInfo.value.author,
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
  closePanel()
}

const displayPanel = ref(false)
function closePanel() {
  displayPanel.value = !displayPanel.value
}

// When user clicks outside the panel, the panel should vanish.
// But when user clicks at the publish button, the panel should appear.
const clickHandler = (event: Event) => {
  const ele = document.getElementById('publish-panel')
  const button = document.getElementById('publish-button')
  if (!ele?.contains(event.target as Node) && !button?.contains(event.target as Node)) {
    displayPanel.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', clickHandler)
})
onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
})
</script>

<template>
  <header class="header editor-header">
    <div class="left-box"></div>
    <input placeholder="输入文章标题..." spellcheck="false" maxlength="80" class="title-input" v-model="articleInfo.title" />
    <div class="right-box">
      <div class="publish-popup">
        <BlockButton id="publish-button" type="primary" size="medium" @click="closePanel">发布</BlockButton>
        <Panel id="publish-panel" v-model="displayPanel" title="发布文章">
          <FormItem label="分类：" :required="true">123</FormItem>
          <FormItem label="添加标签：" :required="true">123</FormItem>
          <FormItem label="文章封面：">
            <UploadImage />
          </FormItem>
          <FormItem label="编辑摘要：" :required="true">
            <TextArea v-model="articleInfo.abstract" />
          </FormItem>
          <template #footer>
            <div class="btn-container">
              <BlockButton type="line" style="margin-right: 16px" @click="closePanel">取消</BlockButton>
              <BlockButton type="primary" @click="publishArticle">确定并发布</BlockButton>
            </div>
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
  }
}

.btn-container {
  flex: auto;
  text-align: right;
}
</style>
