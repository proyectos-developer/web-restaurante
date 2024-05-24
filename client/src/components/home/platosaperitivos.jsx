import React from 'react'

import image_fondo from '../../assets/images/image_fondo_platos_1920_01.png'

export default function PlatosAperitivos({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', marginTop: 150 / proporcional, marginBottom: 300 / proporcional}}>
            <div style={{width: '100%', height: 750 / proporcional, backgroundImage: `url(${image_fondo})`, backgroundPosition: 'center', backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 750 / proporcional, paddingTop: 185 / proporcional, paddingBottom: 185 / proporcional}}>
                    <div style={{width: '55%', height: 680 / proporcional}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#4f7b7e', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Aperitivos
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Sazerac
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Rye, genever, demerara, and green chartreuse
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Sour Cream
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Scotch, cranberry grenadine, lemon, and gilka
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Stirred
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Pineapple rum, sweet vermouth, and amaro
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Tue Boeuf
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Gins, Elske tonic syrup, and lime
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Pettit Rue
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Rye, genever, demerara, and green chartreuse
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Sour Marguii

                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Scotch, cranberry grenadine, lemon, and kummel
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}