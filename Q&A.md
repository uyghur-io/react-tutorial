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
