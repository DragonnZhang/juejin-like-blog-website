import mongoose from 'mongoose'

const config = useRuntimeConfig()

export default defineNitroPlugin(async () => {
  try {
    await mongoose.connect(config.mongoUrl, {
      user: config.mongoUsername,
      pass: config.mongoPwd
    })
    console.log('Database connected successfully!')
  } catch (e) {
    console.log(`Database connection error:\n${e}`)
  }
})
