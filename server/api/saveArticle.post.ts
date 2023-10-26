import articleModel from '../models/article'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const newArticle = new articleModel(body)
  await newArticle.save()

  return {}
})
