// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-multi-cache', '@nuxtjs/sentry'],
  multiCache: {
    component: {
      enabled: true
    }
  },
  sentry: {
    dsn: 'https://13568e5ecb31863d4e97602d96bc3528@o4506807408984064.ingest.sentry.io/4506807418552320'
  },
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
