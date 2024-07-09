import React, { useState } from 'react'

import icono_agenda from '../../assets/iconos/icono_agenda_bluedark_96.png'
import icono_email from '../../assets/iconos/icono_email_bluedark_96.png'
import icono_ubicacion from '../../assets/iconos/icono_ubicacion_bluedark_96.png'
import icono_wifi from '../../assets/iconos/icono_wifi_bluedark_96.png'

export default function ReservacionesTablet({proporcional}) {

    const [nro_personas, setNroPersonas] = useState(1)
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')

    const [efecha, setEFecha] = useState('')
    const [ehora, setEHora] = useState('')

    const [boton_reservar, setBotonReservar] = useState(false)
    
    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional,
                background: '#e9f1e5'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '90%', height: 'auto'}}>
                        <div style={{width: '90%', height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p className='' 
                                    style={{fontSize: 50 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                            marginBottom: 50 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                            letterSpacing: 2 / proporcional}}>
                                    Reservaciones
                                </p>
                                <p className='' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                            marginBottom: 100 / proporcional, color: 'rgb(101, 154, 172)', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans serif', textAlign: 'left', cursor: 'pointer', 
                                            letterSpacing: 0 / proporcional}}>
                                    Vivamus a pulvinar tellus, vitae tempor diam. Curabitur a libero a quam consequat laoreet vel nec enim. Sed efficitur ac ipsum sed aliquam.
                                </p>
                            </div>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto'}}>
                                    <div style={{width:'90%', height: 'auto'}}>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <p className='' 
                                                style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                                        marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                        letterSpacing: 2 / proporcional}}>
                                                Reserva una mesa
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                                                <select 
                                                    style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, fontFamily: 'Montserrat, sans-serif', color: 'rgb(101, 154, 172)',
                                                            border: '1px solid rgb(136, 200 200)', background: 'transparent'}}
                                                    value={nro_personas}
                                                    onChange={(event) => setNroPersonas(event.target.value)}
                                                    id='nro_personas'
                                                    className='form-select'>
                                                    <option value='1'>1 Persona</option>
                                                    <option value='2'>2 Persona</option>
                                                    <option value='3'>3 Persona</option>
                                                    <option value='4'>4 Persona</option>
                                                    <option value='6'>6 Persona</option>
                                                    <option value='8'>8 Persona</option>
                                                </select>
                                            </div>
                                            <div style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                                                <input 
                                                    style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, fontFamily: 'Montserrat, sans-serif', color: 'rgb(101, 154, 172)',
                                                            border: '1px solid rgb(136, 200 200)', background: 'transparent'}}
                                                    value={fecha}
                                                    onChange={(event) => setFecha(event.target.value)}
                                                    id='fecha'
                                                    type='date'
                                                    className='form-control'/>
                                            </div>
                                            <div style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                                                <select 
                                                    style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, fontFamily: 'Montserrat, sans-serif', color: 'rgb(101, 154, 172)',
                                                            border: '1px solid rgb(136, 200 200)', background: 'transparent'}}
                                                    value={hora}
                                                    onChange={(event) => event.target.value !== '0' ? setHora(event.target.value) : null}
                                                    id='hora'
                                                    className='form-select'>
                                                    <option value='0'>Hora reserva</option>
                                                    <option value='9'>09:00</option>
                                                    <option value='10'>10:00</option>
                                                    <option value='11'>11:00</option>
                                                    <option value='12'>12:00</option>
                                                    <option value='13'>13:00</option>
                                                    <option value='14'>14:00</option>
                                                    <option value='15'>15:00</option>
                                                    <option value='16'>16:00</option>
                                                    <option value='17'>17:00</option>
                                                    <option value='18'>18:00</option>
                                                    <option value='19'>19:00</option>
                                                    <option value='20'>20:00</option>
                                                    <option value='21'>21:00</option>
                                                    <option value='22'>22:00</option>
                                                </select>
                                            </div>
                                            <div className='d-flex justify-content-start' style={{width: '60%', height: 50 / proporcional}}>
                                                <button className='btn' style={{width: '100%', height: 50 / proporcional, background: '#dbf6ff', fontSize: 20 / proporcional, color: 'rgb(0, 70, 105)',
                                                    fontWeight: 500}}>
                                                    Reservar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto'}}>
                                    <div style={{width:'90%', height: 'auto'}}>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <p className='' 
                                                style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                                        marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                        letterSpacing: 2 / proporcional}}>
                                                Información contacto
                                            </p>
                                        </div>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                                <img className='rounded-circle'  src={icono_ubicacion} style={{width: 40 / proporcional, height: 40 / proporcional, background: 'rgb(202, 234, 245)',
                                                        padding: 8 / proporcional, marginRight: 10 / proporcional}}/>
                                                <p className='' 
                                                    style={{fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 0 / proporcional}}>
                                                    Av. Javier Prado 000
                                                </p>
                                            </div>
                                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                                <img className='rounded-circle'  src={icono_agenda} style={{width: 40 / proporcional, height: 40 / proporcional, background: 'rgb(202, 234, 245)',
                                                        padding: 8 / proporcional, marginRight: 10 / proporcional}}/>
                                                <p className='' 
                                                    style={{fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 0 / proporcional}}>
                                                    +51 999-XXXXXX
                                                </p>
                                            </div>
                                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                                <img className='rounded-circle'  src={icono_email} style={{width: 40 / proporcional, height: 40 / proporcional, background: 'rgb(202, 234, 245)',
                                                        padding: 8 / proporcional, marginRight: 10 / proporcional}}/>
                                                <p className='' 
                                                    style={{fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 0 / proporcional}}>
                                                    contacto@dominio.com
                                                </p>
                                            </div>
                                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                                <img className='rounded-circle'  src={icono_wifi} style={{width: 40 / proporcional, height: 40 / proporcional, background: 'rgb(202, 234, 245)',
                                                        padding: 8 / proporcional, marginRight: 10 / proporcional}}/>
                                                <p className='' 
                                                    style={{fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 0 / proporcional}}>
                                                    www.dominio.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '90%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '80%', height: 'auto'}}>
                                <div className='rounded' style={{width: '100%', height: 'auto', background: '#edf9fd', padding: 50 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 50 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                                marginBottom: 50 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                letterSpacing: 2 / proporcional}}>
                                        Horario atención
                                    </p>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto', marginBottom: 0 / proporcional}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    Lunes
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    9.00 - 22.00
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto', marginBottom: 0 / proporcional}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    Martes
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    9.00 - 22.00
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto', marginBottom: 0 / proporcional}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    Miércoles
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    9.00 - 22.00
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto', marginBottom: 0 / proporcional}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    Jueves
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    9.00 - 22.00
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto', marginBottom: 0 / proporcional}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    Viernes
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    9.00 - 22.00
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto', marginBottom: 0 / proporcional}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    Sábado
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    9.00 - 22.00
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 0 / proporcional}}>
                                            <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto', marginBottom: 0 / proporcional}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    Domingo
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                                <p className='' 
                                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                            marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                                            letterSpacing: 2 / proporcional}}>
                                                    9.00 - 22.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}