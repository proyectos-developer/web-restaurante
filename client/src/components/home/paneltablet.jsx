import React from 'react'

import ImageTituloTablet from './imagetitulotablet.jsx'
import PlatosPrincipalesTablet from './platosprincipalestablet.jsx'
import PlatosAperitivosTablet from './platosaperitivostablet.jsx'
import GaleriaFotosTablet from './galeriafotostablet.jsx'
import NuestraHistoriaTablet from './nuestrahistoriatablet.jsx'
import RecomendacionesChefTablet from './recomendacionescheftablet.jsx'
import ReservacionesTablet from './reservacionestablet.jsx'

export default function HomePanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloTablet proporcional={proporcional}/>
            <PlatosPrincipalesTablet proporcional={proporcional}/> 
            <PlatosAperitivosTablet proporcional={proporcional}/> 
            <GaleriaFotosTablet proporcional={proporcional}/>
            <NuestraHistoriaTablet proporcional={proporcional}/>
            <RecomendacionesChefTablet proporcional={proporcional}/>
            <ReservacionesTablet proporcional={proporcional}/>
        </div>
    )
}