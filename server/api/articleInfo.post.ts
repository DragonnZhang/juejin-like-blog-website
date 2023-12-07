import articleModel from '../models/article'
import { Article } from '~/utils/type'

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event)

  const articleData = await articleModel.findById(id)

  const t = articleData?.tags.map((v) => v.tag)
  const newData = Object.assign(articleData!['_doc' as keyof typeof articleData] as Article, { tags: t })

  return newData
})
