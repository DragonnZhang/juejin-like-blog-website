import articleModel from '../models/article'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return {}
})
