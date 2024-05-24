import React from 'react'

import MenuSuperior from '../comun/menusuperior'
import ReservaMesa from './reservamesa.jsx'
import Refranes from './refranes.jsx'
import RecomendacionesChef from '../home/recomendacioneschef.jsx'

export default function ReservasPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <MenuSuperior proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingBottom: 120 / proporcional}}>
                <ReservaMesa proporcional={proporcional}/>
                <Refranes proporcional={proporcional}/>
                <RecomendacionesChef proporcional={proporcional} fondo={true}/>
            </div>
        </div>
    )
}