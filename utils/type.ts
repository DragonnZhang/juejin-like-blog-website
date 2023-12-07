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
  publishTime: string | Date
  content: string
  views: number
  likes: number
  collections: number
  comments: number
  imgUrl: string
  type: string
  tags: string[]
}

export type ValidatorString = (input: string, min?: number) => boolean
export type ValidatorStringArray = (input: string[]) => boolean

export type ValidationKey = 'type' | 'tags' | 'title' | 'abstract' | 'content'

export type Validation = {
  [k in ValidationKey]: k extends keyof Article
    ? {
        validate: Article[k] extends string ? ValidatorString : ValidatorStringArray
        error: string
        min?: number
      }
    : never
}
