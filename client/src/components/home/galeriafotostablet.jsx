import React, { useState } from 'react'

import image_01 from '../../assets/images/image_home_galeria_01.png'
import image_02 from '../../assets/images/image_home_galeria_02.png'
import image_03 from '../../assets/images/image_home_galeria_03.png'
import image_04 from '../../assets/images/image_home_galeria_04.png'
import { useNavigate } from 'react-router-dom'

export default function GaleriaFotosTablet({proporcional}) {

    const navigate = useNavigate()

    const [seleccion_imagen, setSeleccionImagen] = useState(0)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 960 / proporcional}}>
                <div style={{width: '50%', height: 960 / proporcional}}>
                    <div className='position-relative' style={{width: '100%', height: 960 / proporcional}}
                        onMouseOver={() => setSeleccionImagen(1)} onMouseLeave={() => setSeleccionImagen(0)}>
                        <img src={image_01} style={{width: '100%', height: 960 / proporcional}}/>
                        {
                            seleccion_imagen === 1 ? (
                                <div className='position-absolute' style={{width: '100%', height: 60 / proporcional, top: 900 / proporcional, left: 0}}>
                                    <button className='btn border-0' style={{width: '100%', height: 60 / proporcional, fontSize: 24 / proporcional, background: '#e8f1e5', color: 'black', 
                                            fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 500, textAlign: 'left'}}
                                            onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                        Amantes de los mariscos
                                    </button>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                <div style={{width: '50%', height: 960 / proporcional}}>
                    <div className='position-relative' style={{width: '100%', height: 480 / proporcional}}
                        onMouseOver={() => setSeleccionImagen(2)} onMouseLeave={() => setSeleccionImagen(0)}>
                        <img src={image_02} style={{width: '100%', height: 480 / proporcional}}/>
                        {
                            seleccion_imagen === 2 ? (
                                <div className='position-absolute' style={{width: '100%', height: 60 / proporcional, top: 420 / proporcional, left: 0}}>
                                    <button className='btn border-0' style={{width: '100%', height: 60 / proporcional, fontSize: 24 / proporcional, background: '#e8f1e5', color: 'black', 
                                            fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 500, textAlign: 'left'}}
                                            onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                            Platos de sushi
                                    </button>
                                </div>
                            ) : null
                        }
                    </div>
                    <div className='position-relative' style={{width: '100%', height: 480 / proporcional}}
                        onMouseOver={() => setSeleccionImagen(3)} onMouseLeave={() => setSeleccionImagen(0)}>
                        <img src={image_03} style={{width: '100%', height: 480 / proporcional}}/>
                        {
                            seleccion_imagen === 3 ? (
                                <div className='position-absolute' style={{width: '100%', height: 60 / proporcional, top: 420 / proporcional, left: 0}}>
                                    <button className='btn border-0' style={{width: '100%', height: 60 / proporcional, fontSize: 24 / proporcional, background: '#e8f1e5', color: 'black', 
                                            fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 500, textAlign: 'left'}}
                                            onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                        Libro de recetas
                                    </button>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', height: 960 / proporcional}}>
                <div style={{width: '100%', height: 960 / proporcional}}>
                    <div className='position-relative' style={{width: '100%', height: 960 / proporcional}}
                        onMouseOver={() => setSeleccionImagen(4)} onMouseLeave={() => setSeleccionImagen(0)}>
                        <img src={image_04} style={{width: '100%', height: 960 / proporcional}}/>
                        {
                            seleccion_imagen === 4 ? (
                                <div className='position-absolute' style={{width: '100%', height: 60 / proporcional, top: 900 / proporcional, left: 0}}>
                                    <button className='btn border-0' style={{width: '100%', height: 60 / proporcional, fontSize: 24 / proporcional, background: '#e8f1e5', color: 'black', 
                                            fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 500, textAlign: 'left'}}
                                            onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                        Servicio especial
                                    </button>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}