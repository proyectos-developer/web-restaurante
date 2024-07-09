import React from 'react'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import BlogTablet from '../comun/blogtablet.jsx'

export default function BlogPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperiorTablet proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingBottom: 120 / proporcional}}>
                <BlogTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}