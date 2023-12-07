import { ArticleState } from '~/utils/type'

export const useArticle = () => useState('article', () => '')
export const useArticleInformation = () =>
  useState('articleInfo', () =>
    ref<ArticleState>({
      title: '',
      author: 'dragon',
      abstract: '',
      imgUrl: '',
      type: '',
      tags: []
    })
  )
export const useTopVanish = () => useState('topVanish', () => false)
export const useSelect = () => useState('selectOption', () => null)
