/* Import statements */
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Footer from './Footer'
import Nav from './Nav'

function Header() {
    return(
        <div>
            <header>This is header menu link <Link to="/docs/getting-started">显示footer</Link> <Link to='/nav'>显示nav</Link></header>
            <Route path="/docs/getting-started" component={Footer} />
            <Route path='/nav' component={Nav} />
        </div>
    )
}

export default Header