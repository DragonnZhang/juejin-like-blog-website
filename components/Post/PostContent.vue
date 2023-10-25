<script setup lang="ts">
import View from '../SVG/View.vue'
import Time from '../SVG/Time.vue'

const props = defineProps<{
  id: string
}>()

const { articleData } = await $fetch('/api/articleInfo', {
  method: 'post',
  body: {
    id: props.id
  }
})
</script>

<template>
  <div class="main-area article-area">
    <article class="article">
      <h1 class="article-title">{{ articleData.title }}</h1>
      <div class="author-info-block">
        <div class="author-info-box">
          <div class="author-name">
            <a href="" class="username ellipsis">
              <span class="name">{{ articleData.author }}</span>
            </a>
          </div>
          <div class="meta-box">
            <time datetime="2023-10-25T00:57:44.000Z" class="time">2023-10-25</time>
            <View />
            <span class="views-count">{{ articleData.views }}</span>
            <span class="read-time">
              <Time />
              阅读9分钟
            </span>
          </div>
        </div>
        <div style="flex: 1"></div>
      </div>
      <div class="article-viewer markdown-body result"></div>
    </article>
    <div class="article-end"></div>
    <div class="post-comment"></div>
  </div>
</template>

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
</style>
