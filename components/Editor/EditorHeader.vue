<script setup lang="ts">
import Panel from '~/components/Public/Panel.vue'
import FormItem from '~/components/Public/FormItem.vue'
import BlockButton from '~/components/Public/BlockButton.vue'
import TextArea from '~/components/Public/TextArea.vue'
import UploadImage from '~/components/Public/UploadImage.vue'
import ChoiceBlock from '~/components/Public/ChoiceBlock.vue'
import Select from '~/components/Public/Select.vue'
import type { Validation, ValidationKey } from '~/types/validator'
import type { Article } from '~/types/article'
import { validateString, validateStringArray } from '~/utils/util'

withDefaults(
  defineProps<{
    update?: boolean
  }>(),
  {
    update: false
  }
)

const articleInfo = useArticleInformation()

const validator: Validation = {
  type: {
    validate: validateString,
    error: '请选择一个分类'
  },
  tags: {
    validate: validateStringArray,
    error: '至少添加一个标签'
  },
  title: {
    validate: validateString,
    error: '标题不能为空'
  },
  abstract: {
    validate: validateString,
    error: '摘要不满足最低50字的要求',
    min: 50
  },
  content: {
    validate: validateString,
    error: '内容不能为空'
  }
}

function validateData(): boolean | string {
  for (let key in validator) {
    const k = key as ValidationKey
    const value = body.value[k]
    const validateObj = validator[k]
    const { validate, error } = validateObj
    const result = validate(value as string & string[], validateObj.min)
    if (!result) {
      return error
    }
  }
  return true
}

const body: Ref<Article> = computed(() => {
  return {
    ...articleInfo.value,
    publishTime: new Date()
  }
})

const tags = computed(() => {
  return {
    tags: articleInfo.value.tags.map((tag) => {
      return {
        tag
      }
    })
  }
})

async function publishArticle() {
  const res = validateData()

  if (typeof res === 'string') {
    alert(res)
    return
  }

  await useFetch('/api/saveArticle', {
    method: 'POST',
    body: {
      ...body.value,
      ...tags.value
    }
  })

  switchPanel()

  alert('发布成功')
}

async function updateArticle() {
  const res = validateData()

  if (typeof res === 'string') {
    alert(res)
    return
  }

  await useFetch('/api/updateArticle', {
    method: 'POST',
    body: {
      ...body.value,
      ...tags.value
    }
  })

  switchPanel()

  alert('更新成功')
}

// panel
const displayPanel = ref(false)
function switchPanel() {
  displayPanel.value = !displayPanel.value
}

// ChoiceBlock
const choices = ['后端', '前端', 'Android', 'iOS', '人工智能', '开发工具', '代码人生', '阅读']

// Select
const selection = ['面试', '前端', '后端', 'AI', 'Github', 'JavaScript']

// Publish
const publish = ref()

onMounted(() => {
  publish.value = document.getElementById('publish-button')
})
</script>

<template>
  <header class="header editor-header">
    <div class="left-box"></div>
    <input placeholder="输入文章标题..." spellcheck="false" maxlength="80" class="title-input" v-model="articleInfo.title" />
    <div class="right-box">
      <div class="publish-popup">
        <BlockButton id="publish-button" type="primary" size="medium" @click="switchPanel">{{ update ? '更新' : '发布' }}</BlockButton>
        <ClientOnly>
          <Suspense>
            <Panel :relate-el="publish" v-model="displayPanel" title="发布文章">
              <FormItem label="分类：" :required="true">
                <ChoiceBlock v-model="articleInfo.type" :choices="choices" />
              </FormItem>
              <FormItem label="添加标签：" :required="true">
                <Select :selection="selection" v-model="articleInfo.tags" :max-length="3"></Select>
              </FormItem>
              <FormItem label="文章封面：">
                <UploadImage v-model="articleInfo.imgUrl" />
              </FormItem>
              <FormItem label="编辑摘要：" :required="true">
                <TextArea v-model="articleInfo.abstract" />
              </FormItem>
              <template #footer>
                <div class="btn-container">
                  <BlockButton type="line" size="thin" style="margin-right: 16px" @click="switchPanel">取消</BlockButton>
                  <BlockButton v-if="!update" type="primary" size="thin" @click="publishArticle">确定并发布</BlockButton>
                  <BlockButton v-else type="primary" size="thin" @click="updateArticle">确定并更新</BlockButton>
                </div>
              </template>
            </Panel>
          </Suspense>
        </ClientOnly>
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
  border-bottom: 1px solid #3d3e40;

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
