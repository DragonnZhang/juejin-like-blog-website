// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  runtimeConfig: {
    mongoUrl: '',
    mongoUsername: '',
    mongoPwd: ''
  },
  vue: {
    defineModel: true
  }
})
