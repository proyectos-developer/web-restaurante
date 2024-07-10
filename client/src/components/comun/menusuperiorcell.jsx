import React, { useState } from 'react'

import logo from '../../assets/logo/logo_cevicheria_650.png'
import icono_menu from '../../assets/iconos/icono_menu_darksky_96.png'

import {useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { set_open_menu_main } from '../../redux/actions/data'

export default function MenuSuperiorCell({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)

    return (
        <div className='shadow rounded-bottom' style={{width: '100%', height: 120 / proporcional, background: 'transparent'}}>
            <div style={{width: '100%', height: 120 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 120 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, 
                        paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional}}>
                    <div style={{width: '80%', height: 'auto'}}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 'auto'}}>
                            <img src={logo} style={{width: '60%', height: '60%'}}/>
                        </div>
                    </div>
                    <div style={{width: '20%', height: 60 / proporcional}}>
                        <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional}}>
                            <img src={icono_menu} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 14 / proporcional,
                                    cursos: 'pointer'}} onClick={() => dispatch(set_open_menu_main(!open_menu_main))}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
