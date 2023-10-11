<script setup lang="ts">
import MainViewBodyCardOrLoading from '~/components/MainView/MainViewBodyCardOrLoading.vue'
import MainCardLoadingSkeleton from '~/components/MainView/MainCardLoadingSkeleton.vue'
import MainViewRightSideBar from '~/components/MainView/MainViewRightSideBar.vue'
</script>

<template>
  <div class="timeline-container">
    <div class="timeline-content">
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
            <ClientOnly>
              <Suspense>
                <MainViewBodyCardOrLoading />
                <template #fallback><MainCardLoadingSkeleton /></template>
              </Suspense>
            </ClientOnly>
          </div>
        </div>
      </div>
      <MainViewRightSideBar />
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline-container {
  margin: 0 auto;

  .timeline-content {
    position: relative;
  }
}
.timeline-entry-list {
  border-radius: 2px;
  width: 720px;
  position: relative;
  margin-right: 23.33rem;

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

@media (max-width: 1000px) {
  .timeline-entry-list {
    margin: 0 auto;
    width: 95vw;
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
    content: '';
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
