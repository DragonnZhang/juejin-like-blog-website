import type { Article } from './article'

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
