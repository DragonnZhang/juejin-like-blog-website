type Tag = {
  tag: string
  url: string
}

type MainData = {
  article_id: string
  title: string
  abstract: string
  author: string
  view: number
  tags: Tag[]
  likes: number
  imgUrl: string
  alt: string
}

export { Tag, MainData }
