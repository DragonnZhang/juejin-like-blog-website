import { ArticleState } from '~/utils/type'

export const useArticle = () => useState('article', () => '')
export const useArticleInformation = () =>
  useState('articleInfo', () =>
    ref<ArticleState>({
      articleId: '',
      title: '',
      author: 'dragon',
      abstract: '',
      imgUrl: '',
      type: '',
      tags: [],
      views: 0,
      likes: 0,
      collections: 0,
      comments: 0
    })
  )
export const useTopVanish = () => useState('topVanish', () => false)
export const useSelect = () => useState('selectOption', () => null)
