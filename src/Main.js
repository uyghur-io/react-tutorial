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