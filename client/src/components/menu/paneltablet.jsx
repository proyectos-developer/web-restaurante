import React from 'react'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import EntradasTablet from '../comun/entradastablet.jsx'

export default function MenuPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperiorTablet proporcional={proporcional}/>
            <EntradasTablet proporcional={proporcional}/>
        </div>
    )
}