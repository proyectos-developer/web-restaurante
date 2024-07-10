import React from 'react'

import image_fondo from '../../assets/images/imagen_fondo_reservas_1920.png'

export default function Refranes({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${image_fondo})`, backgroundPosition: 'center', backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional}}>
                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 600,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                letterSpacing: 2 / proporcional, textAlign: 'center'}}>
                        El ceviche es como un poema; debe ser sentido con los sentidos, no solo con la mente
                    </p>
                </div>
            </div>
        </div>
    )
}