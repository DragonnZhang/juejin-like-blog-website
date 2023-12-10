<script setup lang="ts" generic="T">
import { VirtualListProps } from '~/utils/type'
import { throttle } from 'lodash-es'

const props = defineProps<VirtualListProps<T & { articleId: string }>>()
const emit = defineEmits<{
  getMoreData: []
}>()
defineSlots<{
  item(props: { item: T }): never
}>()

const state = reactive({
  startIndex: 0
})

/*
maxCount: Elements to render in the view, should be viewHeight / itemHeight + 1.
          Use Math.ceil and + 1 to make sure elements can fill the space.
endIndex: startIndex + maxCount
renderList: Elements to render, dataSource[startIndex, endIndex]
*/
const maxCount = computed(() => Math.ceil(props.viewHeight / props.itemHeight) + 1)
const endIndex = computed(() => Math.min(props.dataSource.length, state.startIndex + maxCount.value))
const renderList = computed(() => props.dataSource.slice(state.startIndex, endIndex.value))

// to fill the space that vanished elements should occupy
const marginTop = computed(() => state.startIndex * props.itemHeight)

const containerRef = ref<HTMLDivElement>()
let topDistance: undefined | number

onMounted(() => {
  topDistance = containerRef.value?.getBoundingClientRect().top
})

const handleScroll = throttle(() => {
  if (topDistance) {
    state.startIndex = Math.max(Math.floor((window.scrollY - topDistance) / props.itemHeight), 0)
  }
}, 30)

// during emit, fetching data operation should not be triggered again
// when props.dataSource is updated, fetchingData will be set false again.
let fetchingData = false

watch(
  () => props.dataSource.length,
  () => {
    fetchingData = false
  }
)

// reach bottom loading
watchEffect(
  () => {
    if (!fetchingData && endIndex.value >= props.dataSource.length - 1) {
      fetchingData = true
      emit('getMoreData')
    }
  },
  {
    flush: 'post'
  }
)
</script>

<template>
  <!-- use v-scroll rather than @scroll because scroll bar is not in this component -->
  <div class="virtual-list-container" ref="containerRef" v-scroll="handleScroll">
    <div class="virtual-list-content" :style="{ 'margin-top': `${marginTop}px` }">
      <div class="virtual-list-item" v-for="item in renderList" :key="item.articleId">
        <slot name="item" :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.virtual-list-item {
  height: v-bind('`${props.itemHeight}px`');
}
</style>
