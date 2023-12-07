export const useArticle = () => useState('article', () => '')
export const useArticleInformation = () =>
  useState('articleInfo', () =>
    ref({
      title: '',
      author: 'dragon',
      abstract: '',
      cover: '',
      type: '',
      tags: [] as string[]
    })
  )
export const useTopVanish = () => useState('topVanish', () => false)
export const useSelect = () => useState('selectOption', () => null)
