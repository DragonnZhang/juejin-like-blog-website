# juejin-like-blog-website

## 项目介绍

本项目实现了一个类似掘金的博客网站，包括首页、文章详情页和编辑器页面，使用`Vue3+Nuxt3+MongoDB`实现，页面主要采用`SSR`，部分内容使用`CSR`。网站使用`Vercel`进行`serverless`部署。目前实现的业务包括：阅读博客、写博客以及编辑博客。

## 项目演示

### 首页

首页使用`SSR`加快首屏时间，提高网站性能。同时文章列表使用虚拟列表实现懒加载。

![img1.png](https://github.com/DragonnZhang/images/blob/master/images/img1.png?raw=true)

### 博客页面

![img2.png](https://github.com/DragonnZhang/images/blob/master/images/img2.png?raw=true)

### 写博客

#### 配置主题和代码高亮

写文章支持导入文章或直接编辑两种方式。通过设置`frontmatter`可以为博客配置主题和代码高亮，目前只支持唯一主题，可以通过添加`css`支持更多文章主题。

![2024-02-27 14.50.26.gif](https://github.com/DragonnZhang/images/blob/master/images/2024-02-27%2014.50.26.gif?raw=true)

#### 发布博客

在完成文章写作后，选择文章相关的信息后，可以发布文章。

![2024-02-27 15.09.58.gif](https://github.com/DragonnZhang/images/blob/master/images/2024-02-27%2015.09.58.gif?raw=true)

### 编辑博客

对于已发布的博客，可以修改博客的信息后再次发布。

![img4.png](https://github.com/DragonnZhang/images/blob/master/images/img4.png?raw=true)
