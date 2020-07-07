### 如何做超链接  href 点击以后跳转到其他页面{路由功能}
http://www.hackingwithreact.com/read/1/23/creating-a-link-between-pages-in-react-router

安装路由功能： `npm install --save react-router-dom`   安装失败
尝试使用 ：`npm install --save react-router` 安装成功 但无法从 `react-router` 拉去 `Link`
尝试安装这个 ： `npm install --save react-router-dom` **失败。。。**
删掉 Delete node_modules and lock-file. (package-lock.json, yarn.lock)
然后 `npm install`  **失败了**
从 visual studio code 换成 普通的 cmd   **重新安装`node_modules`成功**
运行程序还是报错 ：*Attempted import error: 'Link' is not exported from 'react-router'.*
尝试安装： `npm install --save react-router-dom`  **安装`react-router-dom`成功**
重新运行程序

#### 1st Example: Basic Routing 基础路由方法 
https://reactrouter.com/web/guides/quick-start
`npm install --save react-router-dom`
使用方法 
```js
import React from  'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

  function Main() {
    return(
        <Router>
            <p>This is a link <Link to="/docs/getting-started">link</Link></p>
        </Router>
    )
  }
  export default Main
  ```

  因为上一个步骤删掉了`yarn.lock` 现在需要重新安装以下  不然无法git到master分支 ，运行：`yarn install`  **成功**

  ### https://www.sitepoint.com/react-router-complete-guide/ 路由详细教程
  1.简单路由 用 <Link> 组件写路径，当点击后路径符合了就显示，路由组件 <Route />, 路径属性 path='/' , 调用属性 component，开头需要从"react-router-dom" 中引入 Route 和 Link 组件
  ```js
  import {Route, Link} from 'react-router-dom'

  <Link to='/Home'>Home</Link>
  <Route path='/Home' component={Home}/>
  ```

### 重构网站 
![image](https://user-images.githubusercontent.com/67357374/86530900-79d41b80-bec5-11ea-9262-666fc453148d.png)
![image](https://user-images.githubusercontent.com/67357374/86530923-aab45080-bec5-11ea-8a8e-4d0a44106432.png)

### 安装 Material-UI —— 世界上最受欢迎的 React UI 框架。
`npm install @material-ui/core`

### css 布局用 grid 12分割网布局
https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/%E5%88%A9%E7%94%A8CSS%E7%BD%91%E6%A0%BC%E5%B8%83%E5%B1%80%E5%AE%9E%E7%8E%B0%E5%B8%B8%E7%94%A8%E5%B8%83%E5%B1%80

### 添加fonts

### 添加路由

### 实现多国语言 https://formatjs.io/docs/react-intl/api/
