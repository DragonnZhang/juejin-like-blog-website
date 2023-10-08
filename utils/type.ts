type Tag = {
  tag: string
  url: string
}
type MainData = {
  id: number
  title: string
  article_link: string
  abstract: string
  author: string
  view: number
  tags: Tag[]
  likes: number
  imgUrl: string
  alt: string
}

export { Tag, MainData }
