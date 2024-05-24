import React from 'react'

import MenuSuperior from '../comun/menusuperior'
import Entradas from '../comun/entradas.jsx'

export default function MenuPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperior proporcional={proporcional}/>
            <Entradas proporcional={proporcional}/>
        </div>
    )
}