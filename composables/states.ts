export const useArticle = () => useState('article', () => '')
export const useArticleInformation = () =>
  useState('articleInfo', () =>
    ref({
      title: '',
      author: 'dragon',
      abstract: '',
      cover: '',
      type: ''
    })
  )
export const useTopVanish = () => useState('topVanish', () => false)
export const useSelect = () => useState('selectOption', () => null)
