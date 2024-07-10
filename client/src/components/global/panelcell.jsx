import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import FooterCell from '../comun/footercell.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { set_open_menu_main } from '../../redux/actions/data.js'

export default function GlobalPanelCell({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch ()

    const [seleccion_menu, setSeleccionMenu] = useState('')

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
            {
                location.pathname.split ('/')[1] !== 'nuestro-menu' && location.pathname.split ('/')[1] !== 'reservas' && location.pathname.split('/')[1] !== 'nuestro-blog'
                        && location.pathname.split ('/')[1] !== 'contactanos' ? (
                    <div className='position-fixed start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                        <MenuSuperiorCell proporcional={proporcional}/>
                    </div>
                ) : null
            }
            {
                open_menu_main ? (
                  <div className='position-absolute start-0' style={{width: '100%', height: '100%', background: 'rgba(89, 89, 89, 0.6)', top: 120 / proporcional,
                        zIndex: 99999}}>
                        <div  className='d-flex justify-content-end' style={{width: '100%', height: '100%'}}>
                            <div className='shadow rounded-left' style={{width: '60%', height: '100%', background: 'white'}}>
                                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional, cursor: 'pointer',
                                    paddingLeft: 30 / proporcional, paddingRight: 30 / proporcional}}
                                    onClick={() => {navigate ('/'); dispatch(set_open_menu_main(false))}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: (seleccion_menu === 'inicio' || location.pathname.split('/')[1] === '') ? '#75978c' : '#4f7b7e',
                                                fontWeight: (seleccion_menu === 'inicio' || location.pathname.split('/')[1] === '') ? 800 : 600, 
                                                fontFamily: 'Open Sans, sans-serif', textAlign: 'start', cursor: 'pointer'}}>
                                        INICIO
                                    </p>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional, cursor: 'pointer',
                                    paddingLeft: 30 / proporcional, paddingRight: 30 / proporcional}}
                                    onClick={() => {navigate ('/nuestro-menu'); dispatch(set_open_menu_main(false))}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: (seleccion_menu === 'menu' || location.pathname.split('/')[1] === 'nuestro-menu') ? '#75978c' : '#4f7b7e',
                                                fontWeight: (seleccion_menu === 'menu' || location.pathname.split('/')[1] === 'menu') ? 800 : 600, 
                                                fontFamily: 'Open Sans, sans-serif', textAlign: 'start', cursor: 'pointer'}}>
                                        MENÚ
                                    </p>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional, cursor: 'pointer',
                                    paddingLeft: 30 / proporcional, paddingRight: 30 / proporcional}}
                                    onClick={() => {navigate ('/reservas'); dispatch(set_open_menu_main(false))}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: (seleccion_menu === 'reservar' || location.pathname.split('/')[1] === 'reservar-mesa') ? '#75978c' : '#4f7b7e',
                                                fontWeight: (seleccion_menu === 'reservar' || location.pathname.split('/')[1] === 'reservar') ? 800 : 600, 
                                                fontFamily: 'Open Sans, sans-serif', textAlign: 'start', cursor: 'pointer'}}>
                                        RESERVAS
                                    </p>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional, cursor: 'pointer',
                                    paddingLeft: 30 / proporcional, paddingRight: 30 / proporcional}}
                                    onClick={() => {navigate ('/nuestro-blog'); dispatch(set_open_menu_main(false))}}>
                                    <p className='' 
                                        style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                                marginBottom: 0 / proporcional, color: (seleccion_menu === 'blog' || location.pathname.split('/')[1] === 'nuestro-blog') ? '#75978c' : '#4f7b7e',
                                                fontWeight: (seleccion_menu === 'blog' || location.pathname.split('/')[1] === 'blog') ? 800 : 600, 
                                                fontFamily: 'Open Sans, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                                        BLOG
                                    </p>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional, cursor: 'pointer',
                                    paddingLeft: 30 / proporcional, paddingRight: 30 / proporcional}}
                                    onClick={() => {navigate ('/contactanos'); dispatch(set_open_menu_main(false))}}>
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
                ) : null
            }
            <Outlet/>
            <FooterCell proporcional={proporcional}/>
        </div>
    )
}