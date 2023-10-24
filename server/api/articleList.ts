import articleModel from '../models/article'

export default defineEventHandler(async () => {
  const data = await articleModel.find({})

  return {
    articleList: data
  }
})
