import React, { useState } from 'react'

import logo from '../../assets/logo/logo_cevicheria_white_400.png'

import icono_ubicacion from '../../assets/iconos/icono_ubicacion_white_96.png'
import icono_agenda from '../../assets/iconos/icono_agenda_white_96.png'
import icono_email from '../../assets/iconos/icono_email_white_96.png'
import icono_wifi from '../../assets/iconos/icono_wifi_white_96.png'

import icono_facebook from '../../assets/iconos/icono_facebook_white_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_white_96.png'
import icono_twitter from '../../assets/iconos/icono_twitter_white_96.png'
import icono_tiktok from '../../assets/iconos/icono_tiktok_white_96.png'

import { useNavigate } from 'react-router-dom'

export default function FooterTablet({proporcional}) {

    const navigate = useNavigate()

    const [seleccion_menu, setSeleccionMenu] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                background: '#008094'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div style={{width: '48%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <img src={logo} style={{width: '60%', height: '60%'}}/>
                        </div>
                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', 
                                cursor: 'default', fontWeight: 500, fontFamily: 'Montserrat, sans-serif'}}>
                                PawFriends is a ready-to go basis for your site & a theme that’s sure to be your new best friend.
                            </p>
                        </div>
                        <div className='d-flex justify-content-start' style={{width: '100%', height: 32 / proporcional}}>
                            <a href='https://www.facebook.com' target='_black'>
                                <img src={icono_facebook} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 20 / proporcional, cursor: 'pointer'}}/>
                            </a>
                            <a href='https://www.instagram.com' target='_black'>
                                <img src={icono_instagram} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 20 / proporcional, cursor: 'pointer'}}/>
                            </a>
                            <a href='https://www.twitter.com' target='_black'>
                                <img src={icono_twitter} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 20 / proporcional, cursor: 'pointer'}}/>
                            </a>
                            <a href='https://www.tiktok.com' target='_black'>
                                <img src={icono_tiktok} style={{width: 32 / proporcional, height: 32 / proporcional, cursor: 'pointer'}}/>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{width: '48%', height: 'auto', padding: 20 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white', 
                                cursor: 'default', fontWeight: 500, fontFamily: 'Pacifico, cursive', wordWrap: 'break-word'}}>
                                Menú
                            </p>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', 
                                cursor: 'pointer', fontWeight: seleccion_menu === 'inicio' ? 800 : 500, fontFamily: 'Montserrat, sans-serif'}}
                                onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}
                                onClick={() => navigate ('/')}>
                                Inicio
                            </p>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', 
                                cursor: 'pointer', fontWeight: seleccion_menu === 'nosotros' ? 800 : 500, fontFamily: 'Montserrat, sans-serif'}}
                                onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}
                                onClick={() => navigate ('/')}>
                                Nuestra carta
                            </p>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', 
                                cursor: 'pointer', fontWeight: seleccion_menu === 'tienda' ? 800 : 500, fontFamily: 'Montserrat, sans-serif'}}
                                onMouseOver={() => setSeleccionMenu('tienda')} onMouseLeave={() => setSeleccionMenu('')}
                                onClick={() => navigate ('/')}>
                                Reserva tu mesa
                            </p>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', 
                                cursor: 'pointer', fontWeight: seleccion_menu === 'blog' ? 800 : 500, fontFamily: 'Montserrat, sans-serif'}}
                                onMouseOver={() => setSeleccionMenu('blog')} onMouseLeave={() => setSeleccionMenu('')}
                                onClick={() => navigate ('/')}>
                                Blog
                            </p>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', 
                                cursor: 'pointer', fontWeight: seleccion_menu === 'contacto' ? 800 : 500, fontFamily: 'Montserrat, sans-serif'}}
                                onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}
                                onClick={() => navigate ('/')}>
                                Contáctanos
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '48%', height: 'auto', padding: 20 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white', 
                                cursor: 'default', fontWeight: 500, fontFamily: 'Pacifico, cursive'}}>
                                Ubicación
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{width: '48%', height: 'auto', padding: 20 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white', 
                                cursor: 'default', fontWeight: 500, fontFamily: 'Pacifico, cursive', wordWrap: 'break-word'}}>
                                Contáctanos
                            </p>

                            <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <img src={icono_ubicacion} style={{width: 24 / proporcional, height: 50 / proporcional, paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional,
                                    marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', 
                                    cursor: 'default', fontWeight: 500, fontFamily: 'Montserrat, sans-serif'}}>
                                    Av. Javier Prado XXX, <br/>San Borja
                                </p>
                            </div>

                            <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <img src={icono_agenda} style={{width: 24 / proporcional, height: 50 / proporcional, paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional,
                                    marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', 
                                    cursor: 'default', fontWeight: 500, fontFamily: 'Montserrat, sans-serif'}}>
                                    +51 999-XXXXXX
                                </p>
                            </div>

                            <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <img src={icono_email} style={{width: 24 / proporcional, height: 50 / proporcional, paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional,
                                    marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', 
                                    cursor: 'default', fontWeight: 500, fontFamily: 'Montserrat, sans-serif'}}>
                                    contacto@dominio.com
                                </p>
                            </div>

                            <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <img src={icono_wifi} style={{width: 24 / proporcional, height: 50 / proporcional, paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional,
                                    marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', 
                                    cursor: 'default', fontWeight: 500, fontFamily: 'Montserrat, sans-serif'}}>
                                    www.dominio.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}