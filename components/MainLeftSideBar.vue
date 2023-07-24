<script setup lang="ts">
type SideBarData = {
  text: string
  url: string
}
type Data = {
  data: SideBarData[]
}
const props = defineProps<Data>()
</script>

<template>
  <div class="index-nav">
    <nav class="side-navigator-wrap">
      <div class="nav-item-wrap" v-for="d in props.data" :key="d.text">
        <div class="nav-item-content" :class="{ 'active-nav': d.url === $route.path }">
          <a class="nav-item" :href="d.url" :class="{ 'route-active': d.url === $route.path }">
            <span class="nav-item-text">{{ d.text }}</span>
          </a>
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
}

.nav-item:hover,
.nav-item:hover svg {
  color: var(--juejin-font-brand1-normal);
}

.nav-item-content:hover {
  background-color: var(--juejin-gray-3);
  color: var(--juejin-font-brand1-normal);
}

.active-nav,
.active-nav:hover {
  background-color: var(--juejin-brand-5-light);
}

.active-nav {
  color: var(--juejin-font-brand1-normal);
  font-weight: 500;
}

.active-nav .nav-item,
.active-nav .nav-item svg {
  color: var(--juejin-font-brand1-normal);
}
</style>