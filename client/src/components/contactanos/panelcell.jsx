import React, { useState } from 'react'

import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import ContactoCell from './contactocell.jsx'
import FraseCell from './frasecell.jsx'
import HorarioCell from './horariocell.jsx'

export default function ContactanosPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperiorCell proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingBottom: 120 / proporcional}}>
                <ContactoCell proporcional={proporcional}/>
                <FraseCell proporcional={proporcional}/>
                <HorarioCell proporcional={proporcional}/> 
            </div>
        </div>
    )
}