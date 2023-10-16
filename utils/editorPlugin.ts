import type { BytemdPlugin } from 'bytemd'
import highlightStyle from './highlightStyle'
import themeStyle from './themeStyle'

const singleStyle = () => {
  let style: undefined | HTMLStyleElement
  return function () {
    if (!style) {
      style = document.createElement('style')
      document.head.appendChild(style)
    }
    return style
  }
}
const singleHighlightStyle = singleStyle()
const singleThemeStyle = singleStyle()

export function highlightPlugin(): BytemdPlugin {
  return {
    viewerEffect({ file }) {
      if (!file.frontmatter) return

      const { highlight } = file.frontmatter as { highlight: string }

      if (highlight) {
        const style = singleHighlightStyle()
        style.innerHTML = highlightStyle[highlight as keyof typeof highlightStyle] ?? highlightStyle['github']
      }
    }
  }
}

export function themePlugin(): BytemdPlugin {
  return {
    viewerEffect({ file }) {
      if (!file.frontmatter) return

      const { theme } = file.frontmatter as { theme: string }

      if (theme) {
        const style = singleThemeStyle()
        style.innerHTML = themeStyle[theme as keyof typeof themeStyle] ?? ''
      }
    }
  }
}
