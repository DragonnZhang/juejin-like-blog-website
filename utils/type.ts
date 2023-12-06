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

export type VirtualListProps<T> = {
  itemHeight: number
  dataSource: T[]
  viewHeight: number
}

export type Article = {
  title: string
  abstract: string
  author: string
  publishTime: string
  content: string
  views: number
  likes: number
  collections: number
  comments: number
  imgUrl: string
  type: string
  tags: {
    tag: string
  }[]
}
