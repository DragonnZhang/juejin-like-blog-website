export default defineEventHandler(() => {
  const testData = {
    title: '🚀3.40秒到231.84毫秒，我用Performance面板分析性能瓶颈全流程（多',
    article_id: '1',
    abstract:
      'Today is a good day.Today is a good day.Today is a good day.Today is a good day.Today is a good day.Today is a good day.Today is a good day.Today is a good day.',
    author: 'Dragon',
    view: 1,
    tags: [
      {
        tag: 'Vue',
        url: ''
      },
      {
        tag: 'Front-end',
        url: ''
      }
    ],
    likes: 0,
    imgUrl: '',
    alt: 'No content.'
  }

  return {
    articleList: new Array(2).fill(0).map(() => {
      return testData
    })
  }
})
