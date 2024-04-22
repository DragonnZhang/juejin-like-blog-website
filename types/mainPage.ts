export type MainData = {
  articleId: string
  title: string
  abstract: string
  author: string
  views: number
  tags: {
    tag: string
    url: string
  }[]
  likes: number
  imgUrl: string
  alt: string
}
