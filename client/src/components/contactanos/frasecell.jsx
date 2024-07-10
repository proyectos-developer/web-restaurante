import React from 'react'

import image_fondo from '../../assets/images/image_contacto_frase_1920.png'

export default function FraseCell({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${image_fondo})`, backgroundPosition: 'center', backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional}}>
                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto', zIndex: 9999}}>
                    <p className='' 
                        style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                marginBottom: 0 / proporcional, color: 'white', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                letterSpacing: 2 / proporcional, textAlign: 'center'}}>
                        Visit us today and try our fresh products
                    </p>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 600 / proporcional, background: 'rgba(0, 70, 105, 0.4)'}}/>
            </div>
        </div>
    )
}