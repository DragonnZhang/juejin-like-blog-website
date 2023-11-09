import { DirectiveBinding } from 'nuxt/dist/app/compat/capi'

const handleClick = (e: Event, el: HTMLElement, binding: DirectiveBinding) => {
  if (el.contains(e.target as Node)) {
    binding.value(e)
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('clickoutside', {
    mounted: (el, binding) => {
      if (binding.value) {
        document.addEventListener('click', (e) => handleClick(e, el, binding))
      }
    },
    beforeUnmount: (el, binding) => {
      if (binding.value) {
        document.removeEventListener('click', (e) => handleClick(e, el, binding))
      }
    }
  })
})
