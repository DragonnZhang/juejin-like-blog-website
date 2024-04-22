export type ArticleState = {
  articleId: string // 文章 id
  title: string // 文章标题
  abstract: string // 文章摘要
  author: string // 文章作者
  content: string // 文章内容
  imgUrl: string // 文章图片
  type: string // 文章类型
  tags: string[] // 文章标签
  views: number // 文章浏览量
  likes: number // 文章点赞量
  collections: number // 文章收藏量
  comments: number // 文章评论量
}

export type Article = ArticleState & {
  publishTime: string | Date
}
