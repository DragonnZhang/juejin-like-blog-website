<script setup lang="ts">
import Following from '~/components/SVG/Following.vue'
import Recommended from '~/components/SVG/Recommended.vue'
import Backend from '~/components/SVG/Backend.vue'
import Frontend from '~/components/SVG/Frontend.vue'
import Android from '~/components/SVG/Android.vue'
import Ios from '~/components/SVG/Ios.vue'
import Ai from '~/components/SVG/Ai.vue'
import Freebie from '~/components/SVG/Freebie.vue'
import Career from '~/components/SVG/Career.vue'
import Article from '~/components/SVG/Article.vue'
import { useTopVanish } from '~/composables/states'

const topVanish = useTopVanish()

function getComponent(s: string) {
  const strategy = {
    following: Following,
    recommended: Recommended,
    backend: Backend,
    frontend: Frontend,
    android: Android,
    ios: Ios,
    ai: Ai,
    freebie: Freebie,
    career: Career,
    article: Article
  }
  return strategy[s as keyof typeof strategy]
}

type SideBarData = {
  text: string
  url: string
}

defineProps<{
  data: SideBarData[]
}>()

function isActive(url: string, path: string) {
  return url === path || (path === '/' && url === '/recommended')
}
</script>

<template>
  <div class="index-nav" :class="{ top: topVanish }">
    <nav class="side-navigator-wrap">
      <div class="nav-item-wrap" v-for="d in data" :key="d.text">
        <div class="nav-item-content" :class="{ 'active-nav': isActive(d.url, $route.path) }">
          <NuxtLink class="nav-item" :to="d.url" :class="{ 'route-active': isActive(d.url, $route.path) }">
            <component :is="getComponent(d.url.slice(1))"></component>
            <span class="nav-item-text">{{ d.text }}</span>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.index-nav {
  width: 180px;
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  margin-right: 20px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  border-radius: 4px;
  background-color: var(--juejin-layer-1);
  max-height: calc(100vh - 101px);
  overflow-x: hidden;

  &.top {
    top: 20px;
  }
}

.index-nav::-webkit-scrollbar {
  border-radius: 4px;
  background-color: transparent;
}

@media (max-width: 1220px) {
  .index-nav {
    display: none;
  }
}

.side-navigator-wrap {
  min-width: 180px;
  box-sizing: border-box;
  padding: 8px;
  font-size: 16px;
  color: var(--juejin-font-2);
}

.nav-item-content {
  line-height: 24px;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
}

.nav-item-text {
  vertical-align: middle;
  position: relative;
}

.nav-item {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 10px 17px;
  color: var(--juejin-font-2);

  &:hover,
  &:hover svg {
    color: var(--juejin-font-brand1-normal);
  }
}

.nav-item-content:hover {
  background-color: var(--juejin-gray-3);
  color: var(--juejin-font-brand1-normal);
}

.active-nav {
  color: var(--juejin-font-brand1-normal);
  font-weight: 500;

  &,
  &:hover {
    background-color: var(--juejin-brand-5-light);
  }

  .nav-item,
  .nav-item svg {
    color: var(--juejin-font-brand1-normal);
  }
}

img {
  color: var(--juejin-font-3);
}

.nav-item svg {
  vertical-align: middle;
  margin-right: 12px;
  color: var(--juejin-font-3);
}
</style>
