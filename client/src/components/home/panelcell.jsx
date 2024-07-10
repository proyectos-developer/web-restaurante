import React from 'react'

import ImageTituloCell from './imagetitulocell.jsx'
import PlatosPrincipalesCell from './platosprincipalescell.jsx'
import PlatosAperitivosCell from './platosaperitivoscell.jsx'
import GaleriaFotosCell from './galeriafotoscell.jsx'
import NuestraHistoriaCell from './nuestrahistoriacell.jsx'
import RecomendacionesChefCell from './recomendacioneschefcell.jsx'
import ReservacionesCell from './reservacionescell.jsx'

export default function HomePanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloCell proporcional={proporcional}/>
            <PlatosPrincipalesCell proporcional={proporcional}/> 
            <PlatosAperitivosCell proporcional={proporcional}/> 
            <GaleriaFotosCell proporcional={proporcional}/>
            <NuestraHistoriaCell proporcional={proporcional}/>
            <RecomendacionesChefCell proporcional={proporcional}/>
            <ReservacionesCell proporcional={proporcional}/>
        </div>
    )
}