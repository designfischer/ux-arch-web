import React from 'react'

import './style.css'

function Layout(props) {
    return (
        <div className="container">
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Layout