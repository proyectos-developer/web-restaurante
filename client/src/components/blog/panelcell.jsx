import React from 'react'

import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import BlogCell from '../comun/blogcell.jsx'

export default function BlogPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperiorCell proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingBottom: 120 / proporcional}}>
                <BlogCell proporcional={proporcional}/>
            </div>
        </div>
    )
}