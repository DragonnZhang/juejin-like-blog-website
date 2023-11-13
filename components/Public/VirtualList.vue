<script setup lang="ts" generic="T">
import { VirtualListProps } from '~/utils/type'
import { throttle } from 'lodash-es'

const props = defineProps<VirtualListProps<T & { article_id: string }>>()
const emit = defineEmits<{
  getMoreData: []
}>()

const state = reactive({
  startIndex: 0,
  viewHeight: 1000
})

const maxCount = computed(() => Math.ceil(state.viewHeight / props.itemHeight) + 1)
const endIndex = computed(() => Math.min(props.dataSource.length, state.startIndex + maxCount.value))
const renderList = computed(() => props.dataSource.slice(state.startIndex, endIndex.value))

const containerRef = ref<HTMLDivElement>()
let topDistance: undefined | number

onMounted(() => {
  topDistance = containerRef.value?.getBoundingClientRect().top
})

const handleScroll = throttle(() => {
  if (typeof topDistance === 'number') {
    state.startIndex = Math.max(Math.floor((window.scrollY - topDistance) / props.itemHeight), 0)
  }
}, 30)

// during emit, fetching data operation should not be triggered again
// when props.dataSource is updated, fetchingData will be set false again.
let fetchingData = false

watch(props.dataSource, () => {
  fetchingData = false
})

// reach bottom loading
watchEffect(() => {
  if (!fetchingData && endIndex.value >= props.dataSource.length - 1) {
    fetchingData = true
    emit('getMoreData')
  }
})
</script>

<template>
  <div class="virtual-list-container" ref="containerRef" v-scroll="handleScroll">
    <div class="virtual-list-content">
      <div class="virtual-list-item" v-for="item in renderList" :key="item.article_id">
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
