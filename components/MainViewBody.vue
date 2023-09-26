<script setup lang="ts">
type Tag = {
  tag: string,
  url: string
}
type MainData = {
  id: number,
  title: string,
  article_link: string,
  abstract: string,
  author: string,
  view: number,
  tags: Tag[],
  likes: number,
  imgUrl: string,
  alt: string
}

const props = defineProps<{
  data: MainData[]
}>()
console.log(props)
</script>

<template>
  <div class="timeline-entry-list">
    <div class="entry-list-container">
      <header class="list-header">
        <nav role="navigation" class="list-nav">
          <ul class="nav-list left">
            <li class="nav-item active">
              <a href="/recommended">推荐</a>
            </li>
            <li class="nav-item">
              <a href="/recommended">最新</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class="entry-list-wrap">
        <div class="entry-list list">
          <li class="item" v-for="data in props.data" :key="data.id">
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
                      <li class="item meta-container"></li>
                      <li class="item view"></li>
                      <li class="item like"></li>
                    </ul>
                    <div class="entry-footer-tags">
                      <a v-for="tag in data.tags" :key="tag.tag" :href="tag.url" class="footer-tag width-limited">{{
                        tag.tag }}</a>
                    </div>
                  </div>
                </div>
                <img :src="data.imgUrl" :alt="data.alt" class="lazy thumb" loading="lazy">
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline-entry-list {
  border-radius: 2px;
  width: 720px;
  position: relative;

  .entry-list-container {
    background-color: var(--juejin-layer-1);
    border-radius: 4px;

    .list-header {
      padding: 1rem 1.66rem;
      border-bottom: 1px solid var(--juejin-gray-1-1);

      .list-nav {
        display: flex;
        justify-content: flex-start;
      }

      .nav-list {
        align-items: center;
        line-height: 1;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

.entry-list {
  width: 100%;
  background-color: var(--juejin-layer-1);
  position: relative;

  .item {
    transition: all .3s ease-in;

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
  }
}

.left .nav-item:first-child {
  margin-left: -1.66rem;
}

.nav-item {
  padding: 0 1.66rem;
  line-height: 2rem;
}

.nav-list.left {
  .nav-item {
    font-size: 1.33rem;
    color: var(--juejin-font-2);
    border: none;
    position: relative;
  }

  .nav-item.active a {
    color: var(--juejin-font-1);
    font-weight: 500;
  }

  .nav-item.active:before {
    display: block;
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 40%;
    width: 22%;
    height: 3px;
    background-color: var(--juejin-font-brand1-normal);
    border-radius: 2px;
  }
}
</style>