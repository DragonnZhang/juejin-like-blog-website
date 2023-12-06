import articleModel from '../models/article'
import { Article } from '~/utils/type'

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event)

  const articleData = (await articleModel.findById(id)) as Article

  return {
    articleData
  }
})
