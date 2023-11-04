export const useArticle = () => useState('article', () => '')
export const useArticleInformation = () =>
  useState('articleInfo', () =>
    ref({
      title: '',
      author: '',
      abstract: '',
      cover: ''
    })
  )
export const useTopVanish = () => useState('topVanish', () => false)
