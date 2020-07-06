import React from 'react'
import MainHead from './components/MainHead.js'
import MainNav from './components/MainNav.js'
import Content from './components/Content.js'
import Sidebar from './components/Sidebar.js'
import Ad from './components/Ad.js'
import Footer from './components/Footer.js'
import './App.css'

import './UyghurLanguage.css'

function App() {
    return(
        <div className='react-tutorial-app'>
            <MainHead />
            <MainNav />
            <Content />
            <Sidebar />
            <Ad />
            <Footer />
        </div>
    )
}

export default App