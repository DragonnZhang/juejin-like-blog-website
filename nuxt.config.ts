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
  },
  routeRules: {
    '/': {
      static: true,
      swr: 120
    },
    '/post/**': { swr: 10 },
    '/editor': {
      static: true,
      swr: 1200
    },
    '/assets/**': {
      headers: { 'cache-control': 's-maxage=1200' }
    },
    '/public/**': {
      headers: { 'cache-control': 's-maxage=31536000' }
    }
  }
})
