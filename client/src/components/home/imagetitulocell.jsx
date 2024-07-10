import React from 'react'

import image_home from '../../assets/images/image_home_1920.png'
import image_carta from '../../assets/images/imagen_especialidad_home_400.png'

export default function ImageTituloCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 900 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 900 / proporcional}}>
                <div style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${image_home})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/>
                <div className='position-absolute start-50 translate-middle' style={{width: 'auto', height: 'auto', top: '60%'}}>
                    <div className='shadow-lg' style={{width: 450 / proporcional, height: 619 / proporcional, backgroundImage: `url(${image_carta})`, backgroundPosition: 'center', backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'}}>
                        <p className='' 
                            style={{fontSize: 30 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: 'black', fontWeight: 700, 
                                    fontFamily: 'Open Sans, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                        </p>
                    </div>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 900 / proporcional, background: 'rgba(39, 39, 39, 0.2)', zIndex: 99}}/>
            </div>
        </div>
    )
}