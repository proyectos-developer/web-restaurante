import React from 'react'

import MenuSuperior from '../comun/menusuperior'
import Blog from '../comun/blog.jsx'

export default function BlogPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperior proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingBottom: 120 / proporcional}}>
                <Blog proporcional={proporcional}/>
            </div>
        </div>
    )
}