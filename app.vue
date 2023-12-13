<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'

useHead({
  titleTemplate: '%s'
})
</script>

<template>
  <SpeedInsights />
  <div>
    <NuxtPage />
  </div>
</template>

<style src="~/assets/stylesheets/global.scss"></style>
<style src="~/assets/stylesheets/main.scss"></style>
