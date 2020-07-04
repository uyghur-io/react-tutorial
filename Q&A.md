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
