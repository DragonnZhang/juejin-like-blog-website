<script setup lang="ts">
defineEmits(['close'])
</script>

<template>
  <span class="tag">
    <span>
      <slot></slot>
    </span>
    <i class="icon" @click.stop="$emit('close')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="none" d="M0 0h48v48H0z"></path>
        <path
          d="M24 2c12.2 0 22 9.8 22 22s-9.8 22-22 22S2 36.2 2 24 11.8 2 24 2zm0 4C14.1 6 6 14.1 6 24s8.1 18 18 18 18-8.1 18-18S33.9 6 24 6zm-4.9 10.2l4.9 4.9 5-4.9c.4-.4 1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4l-5 4.9 5 5c.4.4.4 1 0 1.4l-1.4 1.4c-.4.4-1 .4-1.4 0l-5-5-4.9 5c-.4.4-1 .4-1.4 0l-1.4-1.4c-.4-.4-.4-1 0-1.4l4.9-5-4.9-4.9c-.4-.4-.4-1 0-1.4l1.4-1.4c.3-.4 1-.4 1.4 0z"
        ></path>
      </svg>
    </i>
  </span>
</template>

<style scoped lang="scss">
.tag {
  .icon {
    color: var(--juejin-panel-brand);
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    font-size: 12px;
    margin-left: 8px;

    svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      pointer-events: none;
    }
  }
}

.tag {
  margin-right: 6px;
  background-color: #1f262e;
  overflow: hidden;
  margin-top: 4px;
  position: relative;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  height: 22px;
  line-height: 19px;
  padding: 0 6px;
  border-width: 1px;
  border-radius: 2px;
  border: 1px solid #49494a;
  color: #282f38;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

span.tag {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.tag > span {
  color: var(--juejin-panel-brand);
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
