import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import { splitVendorChunkPlugin } from 'vite'

export default defineNuxtConfig({
  modules: ['nuxt-multi-cache'],
  // component cache
  multiCache: {
    component: {
      enabled: true
    }
  },
  devtools: { enabled: true },
  pages: true,
  // environment variables
  runtimeConfig: {
    mongoUrl: '',
    mongoUsername: '',
    mongoPwd: ''
  },
  // http cache
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
  },
  vite: {
    plugins: [
      viteCompression({
        threshold: 102400
      }),
      splitVendorChunkPlugin(),
      visualizer()
    ]
  }
})
