import React, { useState } from 'react'

import logo from '../../assets/logo/logo_cevicheria_650.png'
import icono_search from '../../assets/iconos/icono_search_darksky_96.png'

import {useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

export default function MenuSuperiorTablet({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()

    const [seleccion_menu, setSeleccionMenu] = useState('')

    return (
        <div className='shadow rounded-bottom' style={{width: '100%', height: 'auto', background: 'transparent', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div style={{width: '100%', height: 119 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 120 / proporcional, 
                        paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional}}>
                    <div style={{width: '50%', height: 60 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 'auto'}}>
                            <img src={logo} style={{width: '65%', height: '65%'}}/>
                        </div>
                    </div>
                    <div style={{width: '50%', height: 60 / proporcional}}>
                        <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional}}>
                            <img src={icono_search} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 14 / proporcional,
                                    cursos: 'pointer'}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 60 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 60 / proporcional}}>
                    <div className='d-flex justify-content-start' style={{width: '20%', height: 60 / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}
                        onClick={() => navigate ('/')}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: (seleccion_menu === 'inicio' || location.pathname.split('/')[1] === '') ? '#75978c' : '#4f7b7e',
                                    fontWeight: (seleccion_menu === 'inicio' || location.pathname.split('/')[1] === '') ? 800 : 600, 
                                    fontFamily: 'Open Sans, sans-serif', textAlign: 'start', cursor: 'pointer'}}>
                            INICIO
                        </p>
                    </div>
                    <div className='d-flex justify-content-start' style={{width: '20%', height: 60 / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setSeleccionMenu('menu')} onMouseLeave={() => setSeleccionMenu('')}
                        onClick={() => navigate ('/nuestro-menu')}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: (seleccion_menu === 'menu' || location.pathname.split('/')[1] === 'nuestro-menu') ? '#75978c' : '#4f7b7e',
                                    fontWeight: (seleccion_menu === 'menu' || location.pathname.split('/')[1] === 'menu') ? 800 : 600, 
                                    fontFamily: 'Open Sans, sans-serif', textAlign: 'start', cursor: 'pointer'}}>
                            MENÚ
                        </p>
                    </div>
                    <div className='d-flex justify-content-start' style={{width: '20%', height: 60 / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setSeleccionMenu('reservar')} onMouseLeave={() => setSeleccionMenu('')}
                        onClick={() => navigate ('/reservas')}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: (seleccion_menu === 'reservar' || location.pathname.split('/')[1] === 'reservar-mesa') ? '#75978c' : '#4f7b7e',
                                    fontWeight: (seleccion_menu === 'reservar' || location.pathname.split('/')[1] === 'reservar') ? 800 : 600, 
                                    fontFamily: 'Open Sans, sans-serif', textAlign: 'start', cursor: 'pointer'}}>
                            RESERVAS
                        </p>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '20%', height: 60 / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setSeleccionMenu('blog')} onMouseLeave={() => setSeleccionMenu('')}
                        onClick={() => navigate ('/nuestro-blog')}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: (seleccion_menu === 'blog' || location.pathname.split('/')[1] === 'nuestro-blog') ? '#75978c' : '#4f7b7e',
                                    fontWeight: (seleccion_menu === 'blog' || location.pathname.split('/')[1] === 'blog') ? 800 : 600, 
                                    fontFamily: 'Open Sans, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                            BLOG
                        </p>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '20%', height: 60 / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}
                        onClick={() => navigate ('/contactanos')}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: (seleccion_menu === 'contacto' || location.pathname.split('/')[1] === 'contactanos') ? '#75978c' : '#4f7b7e',
                                    fontWeight: (seleccion_menu === 'contacto' || location.pathname.split('/')[1] === 'blog') ? 800 : 600, 
                                    fontFamily: 'Open Sans, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                            CONTÁCTANOS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
