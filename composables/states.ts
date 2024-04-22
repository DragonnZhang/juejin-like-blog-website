import type { ArticleState } from '~/types/article'

export const useArticleInformation = () =>
  useState<ArticleState>('articleInfo', () => ({
    articleId: '',
    title: '',
    author: 'dragon',
    abstract: '',
    content: '',
    imgUrl: '',
    type: '',
    tags: [],
    views: 0,
    likes: 0,
    collections: 0,
    comments: 0
  }))
export const useTopVanish = () => useState('topVanish', () => false)
export const useSelect = () => useState('selectOption', () => null)
