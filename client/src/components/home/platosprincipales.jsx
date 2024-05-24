import React from 'react'

import image_fondo from '../../assets/images/image_fondo_platos_1920_00.png'

export default function PlatosPrincipales({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
            <div style={{width: '100%', height: 1000 / proporcional, backgroundImage: `url(${image_fondo})`, backgroundPosition: 'center', backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                <div className='d-flex justify-content-end' style={{width: '100%', height: 1000 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                    <div style={{width: '55%', height: 700 / proporcional}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#4f7b7e', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                PLATOS PRINCIPALES
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Aubry 1er Cru Brut
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                France (Champagne) Chardonnay, Pinot Noir
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Chateau Marguii Rose
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                France (Champagne) Chardonnay, Pinot Noir
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Clos Tue Boeuf 'Petit Blanc'
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                France (Loire) Sauvignon Blanc France (Loire) Sauvignon Blanc
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Niepoort 'Redoma Branco'
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Portugal (Douro) Rabigato, Codéga de LarinhoFrance (Provence) Cin
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Guillot Broux 'Genievrieres'
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                France (Burgundy) Chardonnay
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Aubry 1er Cru Brut
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                France (Champagne) Chardonnay, Pinot Noir
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Chateau Marguii Rose
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                France (Provence) Cinsault, Grenache France (Provence)
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Clos Tue Boeuf 'Petit Blanc'
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                France (Loire) Sauvignon Blanc
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Niepoort 'Redoma Branco'
                            </p>
                            <p className='' 
                                style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'pointer', 
                                        letterSpacing: 2 / proporcional}}>
                                Portugal (Douro) Rabigato, Codéga de LarinhoPortugal (Douro) Rabigato
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}