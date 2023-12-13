<script setup lang="ts">
import View from '../SVG/View.vue'
import Time from '../SVG/Time.vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Viewer } from '@bytemd/vue-next'
import highlight from '@bytemd/plugin-highlight-ssr'
import frontmatter from '@bytemd/plugin-frontmatter'
import highlightStyle from '~/utils/highlightStyle'

const props = defineProps<{
  id: string
  title: string
  content: string
  author: string
  views: number
}>()

const router = useRouter()

const plugins = ref([highlight(), frontmatter()])

onMounted(() => {
  const style = document.createElement('style')
  const body = document.querySelector('.markdown-body')
  body?.insertBefore(style, body.firstChild)
  style.innerHTML = highlightStyle['github']
})

function editArticle() {
  const url = router.resolve(`/editor/${props.id}`)
  window.open(url.href)
}
</script>

<template>
  <div class="main-area article-area">
    <article class="article">
      <h1 class="article-title">{{ title }}</h1>
      <div class="author-info-block">
        <div class="author-info-box">
          <div class="author-name">
            <a href="" class="username ellipsis">
              <span class="name">{{ author }}</span>
            </a>
          </div>
          <div class="meta-box">
            <time datetime="2023-10-25T00:57:44.000Z" class="time">2023-10-25</time>
            <View />
            <span class="views-count">{{ views }}</span>
            <span class="read-time">
              <Time />
              阅读9分钟
            </span>
          </div>
        </div>
        <div style="flex: 1"></div>
        <span class="author-info-edit-btn" style="margin-left: 16px" @click="editArticle">编辑</span>
      </div>
      <Viewer :value="content" :plugins="plugins" />
    </article>
    <div class="article-end"></div>
    <div class="post-comment"></div>
  </div>
</template>

<style scoped lang="scss" src="~/assets/stylesheets/article.scss"></style>
<style scoped lang="scss">
.article-area {
  margin-bottom: 1.67rem;
}

.main-area {
  position: relative;
  width: 820px;
  max-width: 100%;
  box-sizing: border-box;

  .article {
    border-radius: 4px 4px 0 0;
    position: relative;
    padding-top: 2.667rem;
    z-index: 1;
    overflow: hidden;

    background-color: var(--juejin-layer-1);
    padding-left: 2.67rem;
    padding-right: 2.67rem;
    box-sizing: border-box;

    .article-title {
      margin: 0 0 1.3rem;
      font-size: 2.667rem;
      font-weight: 600;
      line-height: 1.31;
      color: var(--juejin-font-1);
    }
  }
}

.author-info-block {
  display: flex;
  align-items: center;
  margin-bottom: 1.667rem;

  .author-info-box {
    display: flex;
    min-width: 0;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-wrap: wrap;

    .author-name {
      height: 2rem;
      display: flex;
      align-items: center;
      margin-right: 16px;

      .username {
        font-size: 14px;
        font-weight: 400;
        color: var(--juejin-font-2);
        line-height: 22px;
        display: flex;
        align-items: center;

        .name {
          display: inline-block;
          vertical-align: top;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .meta-box {
      color: var(--juejin-font-3);
      flex-shrink: 0;
      font-size: 14px;
      line-height: 22px;
      display: flex;
      align-items: center;

      .time {
        margin-right: 16px;
        white-space: nowrap;
      }

      .view-icon {
        margin-right: 5px;
      }

      .views-count {
        margin-right: 16px;
        white-space: nowrap;
      }

      .read-time {
        display: flex;
        align-items: center;

        svg {
          margin-right: 4px;
        }
      }
    }
  }
}

.author-info-edit-btn {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: #1e80ff;
  cursor: pointer;
}
</style>
