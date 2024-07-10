import React from 'react'

import image_01 from '../../assets/images/image_home_historia_01.png'
import image_02 from '../../assets/images/image_home_historia_02.png'
import image_03 from '../../assets/images/image_home_historia_03.png'
import image_04 from '../../assets/images/image_home_historia_04.png'

import image_circulo from '../../assets/images/imagen_circulo_historia_196.png'

export default function NuestraHistoriaCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 0 / proporcional, paddingRight: 0 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional,
                    paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                <div className='d-flex justify-conten-center' style={{width: '100%', height: 'auto'}}>
                    <div className='' 
                        style={{width: 459 / proporcional, height: 459 / proporcional}}>
                        <img src={image_01} style={{width: 459 / proporcional, height: 459 / proporcional}}/>
                    </div>
                </div>
                <div className='' 
                    style={{width: '100%', height: 'auto'}}>
                    <div className='' style={{width: 459 / proporcional, height: 'auto'}}>
                        <div style={{width: 'auto', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, 
                                        marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'default', 
                                        letterSpacing: 2 / proporcional}}>
                                1960. <br/> We found our passion.
                            </p>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: 'rgb(101, 154, 172)', fontWeight: 400,  fontFamily: 'Roboto-condensed', textAlign: 'left', cursor: 'default', 
                                        }}>
                                Quisque rutrum nunc magna, non tempus lupus mollis nec. Mauris vitae lorem enim feugiat quis eleifend proin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                <div className='' style={{width: 459 / proporcional, height: 459 / proporcional}}>
                    <div className='' style={{width: 459 / proporcional, height: 459 / proporcional}}>
                        <img src={image_02} style={{width: 459 / proporcional, height: 459 / proporcional}}/>
                    </div>
                </div>
                <div className='' 
                    style={{width: 459 / proporcional, height: 'auto'}}>
                    <div className='' style={{width: 459 / proporcional, height: 'auto'}}>
                        <div style={{width: 459 / proporcional, height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, 
                                        marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'default', 
                                        letterSpacing: 2 / proporcional}}>
                                1985. <br/> Cocina delicioso
                            </p>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: 'rgb(101, 154, 172)', fontWeight: 400,  fontFamily: 'Roboto-condensed', textAlign: 'left', cursor: 'default', 
                                        }}>
                                Quisque rutrum nunc magna, non tempus lupus mollis nec. Mauris vitae lorem enim feugiat quis eleifend proin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                <div className='' style={{width: 459 / proporcional, height: 'auto'}}>
                    <div className='' style={{width: 459 / proporcional, height: 'auto'}}>
                        <img src={image_03} style={{width: 459 / proporcional, height: 459 / proporcional}}/>
                    </div>
                </div>
                <div className='' 
                    style={{width: 459 / proporcional, height: 'auto'}}>
                    <div className='' style={{width: 459 / proporcional, height: 'auto'}}>
                        <div style={{width: 459 / proporcional, height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, 
                                        marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'default', 
                                        letterSpacing: 2 / proporcional}}>
                                1999. <br/>Local de pescado.
                            </p>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: 'rgb(101, 154, 172)', fontWeight: 400,  fontFamily: 'Roboto-condensed', textAlign: 'left', cursor: 'default', 
                                        }}>
                                Quisque rutrum nunc magna, non tempus lupus mollis nec. Mauris vitae lorem enim feugiat quis eleifend proin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                <div className='' style={{width: 459 / proporcional, height: 459 / proporcional}}>
                    <div className='' style={{width: 459 / proporcional, height: 459 / proporcional}}>
                        <img src={image_04} style={{width: 459 / proporcional, height: 459 / proporcional}}/>
                    </div>
                </div>
                <div className='' 
                    style={{width: 459 / proporcional, height: 'auto'}}>
                    <div className='' style={{width: 459 / proporcional, height: 'auto'}}>
                        <div style={{width: 400 / proporcional, height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, 
                                        marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'default', 
                                        letterSpacing: 2 / proporcional}}>
                                2015. <br/> Segundo local
                            </p>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: 'rgb(101, 154, 172)', fontWeight: 400,  fontFamily: 'Roboto-condensed', textAlign: 'left', cursor: 'default', 
                                        }}>
                                Quisque rutrum nunc magna, non tempus lupus mollis nec. Mauris vitae lorem enim feugiat quis eleifend proin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}