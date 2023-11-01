export const useArticle = () => useState('article', () => '')
export const useArticleInformation = () =>
  useState('articleInfo', () =>
    ref({
      title: '',
      author: '',
      abstract: ''
    })
  )
export const useTopVanish = () => useState('topVanish', () => false)
