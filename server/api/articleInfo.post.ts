import articleModel from '../models/article'
import { Article } from '~/utils/type'

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event)

  const articleData = await articleModel.findById(id)

  if (articleData) {
    const t = articleData.tags.map((v) => v.tag)
    const newData = Object.assign({ articleId: articleData['_id'] }, articleData['_doc' as keyof typeof articleData], { tags: t })
    return newData as Article
  }
  return null
})
