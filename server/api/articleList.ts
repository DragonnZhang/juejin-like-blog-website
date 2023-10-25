import articleModel from '../models/article'

export default defineEventHandler(async () => {
  // const newArticle = new articleModel({
  //   title: '2年过去了，React Forget 凉了么？',
  //   abstract:
  //     '大家好，我卡颂。 在 2 年前的React Conf 2021，黄玄第一次介绍了React Forget，这是个可以生成等效于 useMemo、React.memo的编译器（可以简单理解为，有了它，开',
  //   author: '魔术师卡颂',
  //   content: '123',
  //   views: 312,
  //   likes: 3,
  //   imgUrl:
  //     'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53db45ffc7ce40b59d5338a12de5c8c4~tplv-k3u1fbpfcp-jj:216:144:0:0:q75.avis#?w=1288&h=552&s=56780&e=png&b=ffffff',
  //   tags: [
  //     {
  //       tag: '前端'
  //     },
  //     {
  //       tag: 'JavaScript'
  //     },
  //     {
  //       tag: 'React.js'
  //     }
  //   ]
  // })
  // await newArticle.save()

  const data = await articleModel.find({})

  return {
    articleList: data.map((v) => {
      return Object.assign({ article_id: v._id }, v['_doc' as keyof typeof v])
    })
  }
})
