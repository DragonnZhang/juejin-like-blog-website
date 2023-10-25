export type Tag = {
  tag: string
  url: string
}

export type MainData = {
  article_id: string
  title: string
  abstract: string
  author: string
  views: number
  tags: Tag[]
  likes: number
  imgUrl: string
  alt: string
}
