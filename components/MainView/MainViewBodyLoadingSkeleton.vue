<template>
  <div class="skeleton skeleton-animated">
    <div class="skeleton-item">
      <div class="skeleton-content">
        <div class="skeleton-line"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skeleton {
  width: 100%;
  background-color: var(--juejin-layer-1);

  .skeleton-item {
    padding: 0;
    margin: 0;
    border: none;

    .skeleton-content {
      overflow: hidden;
      padding: 20px;
    }
  }
}

@keyframes skeleton-keyframes {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 480px 0;
  }
}

.skeleton-animated .skeleton-line {
  background: linear-gradient(90deg, var(--juejin-layer-loading-start), var(--juejin-layer-loading-end), var(--juejin-layer-loading-start));
  background-size: 480px 480px;
  -webkit-animation: skeleton-keyframes 0.6s linear infinite;
  animation: skeleton-keyframes 0.6s linear infinite;
}

.skeleton-line {
  width: 100%;
  margin-bottom: 16px;
  height: 14px;

  &:first-child {
    width: 40%;
    margin-top: 8px;
  }

  &:nth-child(3) {
    width: 80%;
  }

  &:last-child {
    width: 60%;
    margin-bottom: 0;
  }
}
</style>
