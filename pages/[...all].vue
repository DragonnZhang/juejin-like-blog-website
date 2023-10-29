<script setup lang="ts">
const router = useRouter()
router.push('/')
</script>

<template>
  <Head>
    <Title>juejin</Title>
  </Head>
  <!-- This page is used to redirect to homepage if a route is not caught. So in fact template is useless for this
    component. -->
  <div></div>
</template>
