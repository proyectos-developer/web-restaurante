import React, {useState} from 'react'

import image_00 from '../../assets/images/image_contacto_700.png'

import icono_agenda from '../../assets/iconos/icono_agenda_bluedark_96.png'
import icono_email from '../../assets/iconos/icono_email_bluedark_96.png'
import icono_ubicacion from '../../assets/iconos/icono_ubicacion_bluedark_96.png'
import icono_wifi from '../../assets/iconos/icono_wifi_bluedark_96.png'

export default function ContactoTablet({proporcional}) {

    const [nombres, setNombres] = useState('')
    const [email, setEFecha] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [message, setMessage] = useState('')

    const [boton_mensaje, setBotonMensajes] = useState(false)

    return (
        <div className='' style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional,
            paddingRight: 20 / proporcional}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <p className='' 
                    style={{fontSize: 50 / proporcional, lineHeight: `${60 / proporcional}px`, 
                            marginBottom: 0 / proporcional, color: '#155373', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'default', 
                            letterSpacing: 2 / proporcional}}>
                    Contáctanos
                </p>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                <img src={image_00} style={{width: 459 / proporcional, height: 459 / proporcional}}/>
            </div>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                letterSpacing: 2 / proporcional}}>
                        Información contacto
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <img className='rounded-circle'  src={icono_ubicacion} style={{width: 40 / proporcional, height: 40 / proporcional, background: 'rgb(202, 234, 245)',
                                padding: 8 / proporcional, marginRight: 10 / proporcional}}/>
                        <p className='' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                    letterSpacing: 0 / proporcional}}>
                            Av. Javier Prado 000
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <img className='rounded-circle'  src={icono_agenda} style={{width: 40 / proporcional, height: 40 / proporcional, background: 'rgb(202, 234, 245)',
                                padding: 8 / proporcional, marginRight: 10 / proporcional}}/>
                        <p className='' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                    letterSpacing: 0 / proporcional}}>
                            +51 999-XXXXXX
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <img className='rounded-circle'  src={icono_email} style={{width: 40 / proporcional, height: 40 / proporcional, background: 'rgb(202, 234, 245)',
                                padding: 8 / proporcional, marginRight: 10 / proporcional}}/>
                        <p className='' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, 
                                    marginBottom: 0 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                    letterSpacing: 0 / proporcional}}>
                            contacto@dominio.com
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
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
            <div style={{width: '100%', height: 'auto'}}>
                <p className='' 
                    style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, 
                            marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                            letterSpacing: 2 / proporcional}}>
                    Envíanos un mensaje
                </p>
                <input 
                    style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, fontFamily: 'Montserrat, sans-serif', color: 'rgb(101, 154, 172)',
                            border: '1px solid rgb(136, 200 200)', background: 'transparent', marginBottom: 20 / proporcional}}
                    value={nombres}
                    onChange={(event) => setNombres(event.target.value)}
                    id='Nombres'
                    type='default'
                    placeholder='nombres'
                    className='form-control'/>
                <input 
                    style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, fontFamily: 'Montserrat, sans-serif', color: 'rgb(101, 154, 172)',
                            border: '1px solid rgb(136, 200 200)', background: 'transparent', marginBottom: 20 / proporcional}}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    id='email'
                    type='email'
                    placeholder='email'
                    className='form-control'/>
                <input 
                    style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, fontFamily: 'Montserrat, sans-serif', color: 'rgb(101, 154, 172)',
                            border: '1px solid rgb(136, 200 200)', background: 'transparent', marginBottom: 20 / proporcional}}
                    value={nro_telefono}
                    onChange={(event) => setNroTelefono(event.target.value)}
                    id='nro_telefono'
                    type='number'
                    placeholder='nro_telefono'
                    className='form-control'/>
                <textarea 
                    style={{width: '100%', height: 150 / proporcional, fontSize: 20 / proporcional, fontFamily: 'Montserrat, sans-serif', color: 'rgb(101, 154, 172)',
                            border: '1px solid rgb(136, 200 200)', background: 'transparent', marginBottom: 20 / proporcional}}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    id='message'
                    rows={3}
                    type='default'
                    placeholder='message'
                    className='form-control'/>
                <button className='btn' style={{width: '60%', height: 50 / proporcional, background: boton_mensaje ? 'transparent' : '#dbf6ff', 
                    fontSize: 20 / proporcional, color: 'rgb(0, 70, 105)', border: '1px solid #dbf6ff',
                    fontWeight: 500}} onMouseOver={() => setBotonMensajes(true)} onMouseLeave={() => setBotonMensajes(false)}>
                    Enviar mensaje
                </button>
            </div>
        </div>
    )
}