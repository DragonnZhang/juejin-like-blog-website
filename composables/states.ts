export const useArticle = () => useState('article', () => '')
export const useArticleInformation = () =>
  useState('articleInfo', () =>
    ref({
      title: '',
      author: ''
    })
  )
export const useTopVanish = () => useState('topVanish', () => false)
