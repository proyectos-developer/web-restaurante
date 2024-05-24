import React from 'react'

import ImageTitulo from './imagetitulo.jsx'
import PlatosPrincipales from './platosprincipales.jsx'
import PlatosAperitivos from './platosaperitivos.jsx'
import GaleriaFotos from './galeriafotos.jsx'
import NuestraHistoria from './nuestrahistoria.jsx'
import RecomendacionesChef from './recomendacioneschef.jsx'
import Reservaciones from './reservaciones.jsx'

export default function HomePanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTitulo proporcional={proporcional}/>
            <PlatosPrincipales proporcional={proporcional}/> 
            <PlatosAperitivos proporcional={proporcional}/> 
            <GaleriaFotos proporcional={proporcional}/>
            <NuestraHistoria proporcional={proporcional}/>
            <RecomendacionesChef proporcional={proporcional}/>
            <Reservaciones proporcional={proporcional}/>
        </div>
    )
}