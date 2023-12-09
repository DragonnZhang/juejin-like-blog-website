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

const highlightOption = [
  {
    title: 'github'
  }
]
export function highlightPlugin(): BytemdPlugin {
  return {
    viewerEffect({ file }) {
      const style = singleHighlightStyle()

      if (!file.frontmatter) {
        style.innerHTML = highlightStyle['github']
        return
      }

      const { highlight } = file.frontmatter as { highlight: string }

      if (highlight) {
        style.innerHTML = highlightStyle[highlight as keyof typeof highlightStyle] ?? highlightStyle.github
      } else {
        style.innerHTML = ''
      }
    },
    actions: [
      {
        title: '代码高亮样式',
        icon: `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="currentColor" fill-opacity="0.01"></rect>
          <path d="M6 44L6 25H12V17H36V25H42V44H6Z" stroke-width="4" stroke-linejoin="round" stroke="currentColor"></path>
          <path d="M17 17V8L31 4V17" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"></path>
          </svg>`,
        cheatsheet: '```mermaid',
        handler: {
          type: 'dropdown',
          actions: highlightOption.map(({ title }) => ({
            title,
            handler: {
              type: 'action',
              click({ editor, appendBlock, codemirror, root }) {
                // 需要自己写一个方法添加 or 替换属性
              }
            }
          }))
        }
      }
    ]
  }
}

export function themePlugin(): BytemdPlugin {
  return {
    viewerEffect({ file }) {
      const style = singleThemeStyle()

      if (!file.frontmatter) {
        style.innerHTML = themeStyle['juejin']
        return
      }

      const { theme } = file.frontmatter as { theme: string }

      if (theme) {
        style.innerHTML = themeStyle[theme as keyof typeof themeStyle] ?? ''
      } else {
        style.innerHTML = ''
      }
    }
  }
}

export function importPlugin(): BytemdPlugin {
  return {
    viewerEffect() {},
    actions: [
      {
        title: '文档导入',
        position: 'right',
        icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
          clip-rule="evenodd" d="M10.332 1.33594C10.5161 1.33594 10.6654 1.48518 10.6654 1.66927V2.33594C10.6654 2.52003 10.5161 2.66927 
          10.332 2.66927H2.66536V13.3359H10.332C10.5161 13.3359 10.6654 13.4852 10.6654 13.6693V14.3359C10.6654 14.52 10.5161 14.6693 10.332 
          14.6693H1.9987C1.63051 14.6693 1.33203 14.3708 1.33203 14.0026V2.0026C1.33203 1.63441 1.63051 1.33594 1.9987 1.33594H10.332ZM5.83645 
          7.48165L8.42917 4.88893C8.54933 4.76876 8.73841 4.75952 8.86917 4.8612L8.90057 4.88893L9.37198 5.36033C9.49214 5.48049 9.50138 5.66957 
          9.39971 5.80033L9.37198 5.83173L7.83815 7.36557L14.0288 7.33813C14.2024 7.33884 14.343 7.4681 14.3616 7.63396L14.3636 7.67284L14.361 
          8.30412C14.3603 8.47403 14.2326 8.61392 14.0678 8.63368L14.0292 8.63607L7.96047 8.66264L9.37198 10.0744C9.49214 10.1945 9.50138 10.3836 
          9.39971 10.5144L9.37198 10.5458L8.90057 11.0172C8.78041 11.1373 8.59134 11.1466 8.46057 11.0449L8.42917 11.0172L5.83645 8.42446C5.5898 
          8.17781 5.57682 7.78598 5.7975 7.52406L5.83645 7.48165L8.42917 4.88893L5.83645 7.48165Z" fill="currentColor"></path></svg>`,
        handler: {
          type: 'action',
          click({ editor }) {
            ;(document.querySelector('#upload-markdown') as HTMLInputElement).click()
            editor.focus()
          }
        }
      }
    ]
  }
}
