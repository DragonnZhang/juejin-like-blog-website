import articleModel from '../models/article'

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event)

  const articleData = await articleModel.findById(id)

  return {
    articleData
  }
})
