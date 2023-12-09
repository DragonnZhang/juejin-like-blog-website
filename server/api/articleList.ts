import articleModel from '../models/article'

export default defineEventHandler(async () => {
  const data = await articleModel.find({})

  return {
    articleList: data.map((v) => {
      return Object.assign({}, { articleId: v._id }, v['_doc' as keyof typeof v])
    })
  }
})
