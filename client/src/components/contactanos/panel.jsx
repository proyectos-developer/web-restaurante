import React, { useState } from 'react'

import MenuSuperior from '../comun/menusuperior'
import Contacto from './contacto.jsx'
import Frase from './frase.jsx'
import Horario from './horario.jsx'

export default function ContactanosPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperior proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingBottom: 120 / proporcional}}>
                <Contacto proporcional={proporcional}/>
                <Frase proporcional={proporcional}/>
                <Horario proporcional={proporcional}/> 
            </div>
        </div>
    )
}