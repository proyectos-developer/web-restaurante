import React from 'react'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import ReservaMesaTablet from './reservamesatablet.jsx'
import RefranesTablet from './refranestablet.jsx'
import RecomendacionesChefTablet from '../home/recomendacionescheftablet.jsx'

export default function ReservasPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperiorTablet proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingBottom: 120 / proporcional}}>
                <ReservaMesaTablet proporcional={proporcional}/>
                <RefranesTablet proporcional={proporcional}/>
                <RecomendacionesChefTablet proporcional={proporcional} fondo={true}/>
            </div>
        </div>
    )
}