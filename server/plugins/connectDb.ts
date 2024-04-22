import mongoose from 'mongoose'

const { mongoUrl, mongoUsername, mongoPwd } = useRuntimeConfig()

export default defineNitroPlugin(async () => {
  try {
    await mongoose.connect(mongoUrl, {
      user: mongoUsername,
      pass: mongoPwd
    })
    console.log('Database connected successfully!')
  } catch (e) {
    console.log(`Database connection error:\n${e}`)
  }
})
