import articleModel from '../models/article'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  await articleModel.updateOne({ _id: body.articleId }, body)

  return {}
})
