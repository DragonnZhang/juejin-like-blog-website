import type { DirectiveBinding } from 'nuxt/dist/app/compat/capi'

const getClickHandler = (el: HTMLElement, binding: DirectiveBinding) => {
  return function (e: Event) {
    if (!el.contains(e.target as Node)) {
      binding.value(e)
    }
  }
}

const getScrollHandler = (binding: DirectiveBinding) => {
  return function () {
    binding.value()
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let clickHandler = (e: Event) => {}

let scrollHandler = () => {}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('clickoutside', {
    mounted: (el, binding) => {
      if (binding.value) {
        clickHandler = getClickHandler(el, binding)
        document.addEventListener('click', clickHandler)
      }
    },
    beforeUnmount: (el, binding) => {
      if (binding.value) {
        document.removeEventListener('click', clickHandler)
      }
    }
  })

  nuxtApp.vueApp.directive('scroll', {
    mounted: (el, binding) => {
      if (binding.value) {
        scrollHandler = getScrollHandler(binding)
        document.addEventListener('scroll', scrollHandler, { passive: true })
      }
    },
    beforeUnmount: (el, binding) => {
      if (binding.value) {
        document.removeEventListener('scroll', scrollHandler)
      }
    }
  })
})
