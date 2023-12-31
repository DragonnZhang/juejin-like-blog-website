import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    abstract: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    publishTime: {
      type: Date,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    views: {
      type: Number,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    collections: {
      type: Number,
      required: true
    },
    comments: {
      type: Number,
      required: true
    },
    imgUrl: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: true
    },
    tags: [
      {
        tag: {
          type: String,
          required: true
        }
      }
    ]
  },
  { minimize: false }
)

const articleModel = mongoose.model('article', ArticleSchema, 'articles')

export default articleModel
