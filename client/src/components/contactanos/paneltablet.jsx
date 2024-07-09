import React, { useState } from 'react'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import ContactoTablet from './contactotablet.jsx'
import FraseTablet from './frasetablet.jsx'
import HorarioTablet from './horariotablet.jsx'

export default function ContactanosPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperiorTablet proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingBottom: 120 / proporcional}}>
                <ContactoTablet proporcional={proporcional}/>
                <FraseTablet proporcional={proporcional}/>
                <HorarioTablet proporcional={proporcional}/> 
            </div>
        </div>
    )
}