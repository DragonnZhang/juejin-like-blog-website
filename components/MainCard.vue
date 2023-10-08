<script setup lang="ts">
import View from '~/components/SVG/View.vue'
import Like from '~/components/SVG/Like.vue'
import { MainData } from 'utils/type'

const props = defineProps<{
  data: MainData
}>()

const { data } = toRefs(props)
</script>

<template>
  <div class="entry">
    <div class="content-wrapper">
      <div class="content-main">
        <div class="title-row">
          <a :href="data.article_link" :title="data.title" class="title">{{ data.title }}</a>
        </div>
        <div class="abstract">
          <a :href="data.article_link">
            <div>{{ data.abstract }}</div>
          </a>
        </div>
        <div class="entry-footer">
          <ul class="action-list jh-timeline-action-area">
            <li class="item meta-container">
              <a href="" class="user-message">{{ data.author }}</a>
              <div class="footer-divider"></div>
            </li>
            <li class="item view">
              <View />
              <span>{{ data.view }}</span>
            </li>
            <li class="item like">
              <div class="liked-wrap">
                <Like />
              </div>
              <span>{{ data.likes }}</span>
            </li>
          </ul>
          <div class="entry-footer-tags">
            <a v-for="tag in data.tags" :key="tag.tag" :href="tag.url" class="footer-tag width-limited">{{ tag.tag }}</a>
          </div>
        </div>
      </div>
      <img :src="data.imgUrl" :alt="data.alt" class="lazy thumb" loading="lazy" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.entry {
  cursor: pointer;
  position: relative;
  background: var(--juejin-layer-1);
  padding: 12px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .content-wrapper {
    display: flex;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--juejin-gray-1-2);
    width: 100%;

    .content-main {
      flex: 1 1 auto;

      .title-row {
        display: flex;
        margin-bottom: 2px;

        .title {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: var(--juejin-font-1);
          width: 100%;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      }

      .abstract {
        margin-bottom: 4px;
        font-weight: 400;

        a {
          color: var(--juejin-font-3);
          font-size: 13px;
          line-height: 22px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      }

      .entry-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;

        .user-message {
          max-width: 132px;
          font-size: 13px;
          line-height: 22px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;

          display: flex;
          align-items: center;
          color: var(--juejin-font-3);
        }

        .footer-divider {
          width: 1px;
          height: 12px;
          background-color: var(--juejin-gray-1-1);
          margin: 0 -13px 0 12px;
        }

        .entry-footer-tags {
          display: flex;
          flex-direction: row;
          align-items: center;

          .footer-tag.width-limited {
            max-width: 65px;
          }

          .footer-tag {
            background-color: var(--juejin-gray-2);
            padding: 0 6px;
            border-radius: 2px;
            box-sizing: border-box;
            margin-left: 6px;
            color: var(--juejin-font-3);
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            min-height: 18px;
            line-height: 18px;
          }

          .footer-tag:hover {
            color: var(--juejin-font-brand2-hover);
          }
        }
      }
    }

    .thumb {
      flex: 0 0 auto;
      width: 108px;
      height: 72px;
      margin-left: 24px;
      background-color: var(--juejin-layer-1);
      border-radius: 4px;
      border: 1px solid var(--juejin-gray-1-2);
    }

    .lazy {
      position: relative;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
}

.action-list {
  display: flex;
  align-items: center;
}

.action-list > .item {
  position: relative;
  margin-right: 24px;
  font-size: 13px;
  line-height: 20px;
  color: var(--juejin-font-3);
  flex-shrink: 0;

  display: flex;
  align-items: center;
}

.action-list > .item span {
  margin-left: 4px;
}

.action-list > .item.like .liked-wrap {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
