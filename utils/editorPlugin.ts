import type { BytemdPlugin } from 'bytemd'
import highlightStyle from './highlightStyle'
import themeStyle from './themeStyle'
import { singleStyle } from './util'

const singleHighlightStyle = singleStyle()
const singleThemeStyle = singleStyle()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let frontmatterObj: any

export function highlightPlugin(): BytemdPlugin {
  const highlightOption = [
    {
      title: 'github'
    }
  ]

  return {
    viewerEffect({ file }) {
      const style = singleHighlightStyle()

      frontmatterObj = file.frontmatter

      if (!file.frontmatter) {
        style.innerHTML = ''
        return
      }

      const { highlight } = file.frontmatter as { highlight: string }

      if (highlight) {
        style.innerHTML = highlightStyle[highlight as keyof typeof highlightStyle] || ''
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
              click({ editor }) {
                const value = editor.getValue()
                // 1. Without frontmatter: add a new frontmatter
                if (!frontmatterObj) {
                  const newFrontmatter = `---\nhighlight: ${title}\n---\n\n`
                  editor.setValue(newFrontmatter + value)
                } else {
                  const match = value.match(/^---(.|\n)*---/)
                  if (match) {
                    // 2. Has highlight property: replace value
                    if (frontmatterObj.highlight) {
                      const newFrontmatter = match[0].replace(/highlight: .*/g, `highlight: ${title}`)
                      editor.setValue(value.replace(match[0], newFrontmatter))
                    } else {
                      // 3. Without highlight property, has theme prop: add highlight
                      const newFrontmatter = match[0].replace(/theme: .*/g, `$&\nhighlight: ${title}`)
                      editor.setValue(value.replace(match[0], newFrontmatter))
                    }
                  }
                }
                editor.focus()
              }
            }
          }))
        }
      }
    ]
  }
}

export function themePlugin(): BytemdPlugin {
  const themeOption = [
    {
      title: 'juejin'
    }
  ]

  return {
    viewerEffect({ file }) {
      const style = singleThemeStyle()

      frontmatterObj = file.frontmatter

      if (!file.frontmatter) {
        style.innerHTML = ''
        return
      }

      const { theme } = file.frontmatter as { theme: string }

      if (theme) {
        style.innerHTML = themeStyle[theme as keyof typeof themeStyle] || ''
      } else {
        style.innerHTML = ''
      }
    },
    actions: [
      {
        title: 'Markdown 主题',
        icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2H2.66667C2.29848 2 2 2.29848 2 2.66667V6C2 6.36819 2.29848 6.66667 2.66667 6.66667H6C6.36819 6.66667 6.66667 6.36819 6.66667 6V2.66667C6.66667 2.29848 6.36819 2 6 2Z" stroke="currentColor" stroke-width="1.33" stroke-linejoin="round"></path>
      <path d="M6 9.3335H2.66667C2.29848 9.3335 2 9.63197 2 10.0002V13.3335C2 13.7017 2.29848 14.0002 2.66667 14.0002H6C6.36819 14.0002 6.66667 13.7017 6.66667 13.3335V10.0002C6.66667 9.63197 6.36819 9.3335 6 9.3335Z" stroke="currentColor" stroke-width="1.33" stroke-linejoin="round"></path>
      <path d="M13.3334 2H10C9.63185 2 9.33337 2.29848 9.33337 2.66667V6C9.33337 6.36819 9.63185 6.66667 10 6.66667H13.3334C13.7016 6.66667 14 6.36819 14 6V2.66667C14 2.29848 13.7016 2 13.3334 2Z" stroke="currentColor" stroke-width="1.33" stroke-linejoin="round"></path>
      <path d="M13.3334 9.3335H10C9.63185 9.3335 9.33337 9.63197 9.33337 10.0002V13.3335C9.33337 13.7017 9.63185 14.0002 10 14.0002H13.3334C13.7016 14.0002 14 13.7017 14 13.3335V10.0002C14 9.63197 13.7016 9.3335 13.3334 9.3335Z" stroke="currentColor" stroke-width="1.33" stroke-linejoin="round"></path>
      </svg>`,
        cheatsheet: '```mermaid',
        handler: {
          type: 'dropdown',
          actions: themeOption.map(({ title }) => ({
            title,
            handler: {
              type: 'action',
              click({ editor }) {
                // 需要自己写一个方法添加 or 替换属性
                const value = editor.getValue()

                if (!frontmatterObj) {
                  const newFrontmatter = `---\ntheme: ${title}\n---\n\n`
                  editor.setValue(newFrontmatter + value)
                } else {
                  const match = value.match(/^---(.|\n)*---/)
                  if (match) {
                    if (frontmatterObj.theme) {
                      const newFrontmatter = match[0].replace(/theme: .*/g, `theme: ${title}`)
                      editor.setValue(value.replace(match[0], newFrontmatter))
                    } else {
                      const newFrontmatter = match[0].replace(/highlight: .*/g, `$&\ntheme: ${title}`)
                      editor.setValue(value.replace(match[0], newFrontmatter))
                    }
                  }
                }
                editor.focus()
              }
            }
          }))
        }
      }
    ]
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
