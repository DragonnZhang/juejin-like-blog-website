<script setup lang="ts">
defineProps<{
  hasBadge: boolean
  type: 'icon-zan' | 'icon-comment' | 'icon-collect' | 'icon-share'
  badgeNumber?: number
}>()
</script>

<template>
  <div :class="{ 'with-badge': hasBadge }" class="panel-btn" :badge="badgeNumber">
    <svg class="sprite-icon" :class="[type]">
      <use :xlink:href="`#${type}`"></use>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.panel-btn {
  position: relative;
  margin-bottom: 1.667rem;
  width: 4rem;
  height: 4rem;
  background-color: var(--juejin-layer-5);
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 50, 0.04);
  cursor: pointer;
  text-align: center;
  font-size: 1.67rem;

  .sprite-icon {
    color: var(--juejin-font-3);
    height: 100%;
    width: 1em;
    fill: currentColor;
    vertical-align: middle;
    transition: all 0.15s linear;
  }
}

.panel-btn:hover .sprite-icon {
  color: var(--juejin-font-2);
}

.panel-btn.with-badge:after {
  content: attr(badge);
  position: absolute;
  top: 0;
  left: 75%;
  height: 17px;
  line-height: 17px;
  padding: 0 5px;
  border-radius: 9px;
  font-size: 11px;
  text-align: center;
  white-space: nowrap;
  background-color: var(--juejin-font-4);
  color: #fff;
}
</style>
