import React from 'react'

import image_fondo from '../../assets/images/image_home_recomendacion_1920.png'
import image_01 from '../../assets/images/image_home_recomendacion_00.png'
import image_02 from '../../assets/images/image_home_recomendacion_01.png'
import image_03 from '../../assets/images/image_home_recomendacion_02.png'
import image_04 from '../../assets/images/image_home_recomendacion_03.png'

import circulo_precio from '../../assets/images/image_recomendacion_precio_96.png'

export default function RecomendacionesChefCell({proporcional, fondo}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                backgroundImage: `url(${fondo ? null : image_fondo})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                marginBottom: 0 / proporcional, color: '#004669', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                letterSpacing: 2 / proporcional}}>
                        Recomendaciones del chef
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                    <div className='' style={{width: '90%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: 400 / proporcional, height: 'auto', marginBottom: 20 / proporcional}}>
                            <img className='' src={image_01} style={{width: 400 / proporcional, height: 550 / proporcional}}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: 400 / proporcional, height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: 390 / proporcional, height: 'auto'}}>
                                <div style={{width: 72 / proporcional, height: 72 / proporcional, backgroundImage:  `url(${circulo_precio})`, backgroundPosition: 'center', 
                                        backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginRight: 10 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 30 / proporcional, lineHeight: `${72 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                        $29
                                    </p>
                                </div>
                                <div className='' style={{width: 308 / proporcional, height: 'auto'}}>
                                    <p className='' 
                                        style={{fontSize: 30 / proporcional, lineHeight: `${72 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                        Caramel Sushi
                                    </p>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                            Morbi suscipit metus et ipsum quis sodales nec.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                    <div className='' style={{width: '90%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: 400 / proporcional, height: 'auto', marginBottom: 20 / proporcional}}>
                            <img className='' src={image_02} style={{width: 400 / proporcional, height: 550 / proporcional}}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: 400 / proporcional, height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: 390 / proporcional, height: 'auto'}}>
                                <div style={{width: 72 / proporcional, height: 72 / proporcional, backgroundImage:  `url(${circulo_precio})`, backgroundPosition: 'center', 
                                        backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginRight: 10 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 30 / proporcional, lineHeight: `${72 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                        $23
                                    </p>
                                </div>
                                <div className='' style={{width: 308 / proporcional, height: 'auto'}}>
                                    <p className='' 
                                        style={{fontSize: 30 / proporcional, lineHeight: `${72 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                        Agnolotti
                                    </p>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                            Morbi suscipit metus et ipsum quis sodales nec.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                    <div className='' style={{width: '90%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: 400 / proporcional, height: 'auto', marginBottom: 20 / proporcional}}>
                            <img className='' src={image_03} style={{width: 400 / proporcional, height: 550 / proporcional}}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: 400 / proporcional, height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: 390 / proporcional, height: 'auto'}}>
                                <div style={{width: 72 / proporcional, height: 72 / proporcional, backgroundImage:  `url(${circulo_precio})`, backgroundPosition: 'center', 
                                        backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginRight: 10 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 30 / proporcional, lineHeight: `${72 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                        $43
                                    </p>
                                </div>
                                <div className='' style={{width: 308 / proporcional, height: 'auto'}}>
                                    <p className='' 
                                        style={{fontSize: 30 / proporcional, lineHeight: `${72 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                        Smoked Eel
                                    </p>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                            Morbi suscipit metus et ipsum quis sodales nec.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                    <div className='' style={{width: '90%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: 400 / proporcional, height: 'auto', marginBottom: 20 / proporcional}}>
                            <img className='' src={image_04} style={{width: 400 / proporcional, height: 550 / proporcional}}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: 400 / proporcional, height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: 390 / proporcional, height: 'auto'}}>
                                <div style={{width: 72 / proporcional, height: 72 / proporcional, backgroundImage:  `url(${circulo_precio})`, backgroundPosition: 'center', 
                                        backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginRight: 10 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 30 / proporcional, lineHeight: `${72 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                        $23
                                    </p>
                                </div>
                                <div className='' style={{width: 308 / proporcional, height: 'auto'}}>
                                    <p className='' 
                                        style={{fontSize: 30 / proporcional, lineHeight: `${72 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                        Lobster Delight
                                    </p>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                            Morbi suscipit metus et ipsum quis sodales nec.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}