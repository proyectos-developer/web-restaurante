import React from 'react'

import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import ReservaMesaCell from './reservamesacell.jsx'
import RefranesCell from './refranescell.jsx'
import RecomendacionesChefCell from '../home/recomendacioneschefcell.jsx'

export default function ReservasPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperiorCell proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingBottom: 120 / proporcional}}>
                <ReservaMesaCell proporcional={proporcional}/>
                <RefranesCell proporcional={proporcional}/>
                <RecomendacionesChefCell proporcional={proporcional} fondo={true}/>
            </div>
        </div>
    )
}