import React from 'react'

import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import EntradasCell from '../comun/entradascell.jsx'

export default function MenuPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperiorCell proporcional={proporcional}/>
            <EntradasCell proporcional={proporcional}/>
        </div>
    )
}