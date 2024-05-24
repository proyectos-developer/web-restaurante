import React from 'react'

import image_00 from '../../assets/images/image_menu_650_01.png'
import image_01 from '../../assets/images/image_menu_450_00.png'
import image_02 from '../../assets/images/image_menu_650_03.png'
import image_03 from '../../assets/images/image_menu_450_02.png'

import image_circulo_00 from '../../assets/images/image_menu_desayuno_256.png'
import image_circulo_01 from '../../assets/images/image_menu_entrada_256.png'
import image_circulo_02 from '../../assets/images/image_menu_principal_256.png'
import image_circulo_03 from '../../assets/images/image_menu_postre_256.png'

export default function Entradas({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                <p className='' 
                    style={{fontSize: 50 / proporcional, lineHeight: `${60 / proporcional}px`, 
                            marginBottom: 0 / proporcional, color: '#155373', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'default', 
                            letterSpacing: 2 / proporcional}}>
                    Nuestro menú
                </p>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='position-relative d-flex justify-content-between' style={{width: '100%', height: 1150 / proporcional}}>
                    <div className='position-relative' style={{width: '50%', height: 1150 / proporcional, zIndex: 9999}}>
                        <div className='position-absolute top-50 start-50 translate-middle' style={{width: 588 / proporcional, height: 850 / proporcional}}>
                            <img src={image_01} style={{width: 588 / proporcional, height: 850 / proporcional}}/>
                        </div>
                    </div>
                    <div className='position-absolute top-0 translate-middle' style={{width: 128 / proporcional, height: 128 / proporcional, left: '30%'}}>
                        <img src={image_circulo_01} style={{width: 512 / proporcional, height: 512 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: '50%', height: 1150 / proporcional}}>
                        <div className='position-absolute start-50 top-50 translate-middle' style={{width: 650 / proporcional, height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#4f7b7e', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Entradas
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Sazerac
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Rye, genever, demerara, and green chartreuse
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Sour Cream
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Scotch, cranberry grenadine, lemon, and gilka
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Stirred
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Pineapple rum, sweet vermouth, and amaro
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Tue Boeuf
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Gins, Elske tonic syrup, and lime
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Pettit Rue
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Rye, genever, demerara, and green chartreuse
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Sour Marguii
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Scotch, cranberry grenadine, lemon, and kummel
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Spinach Chicken
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Onion, Spinach, Watercress, Chicken
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Sweet Heat Salad
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Ceps, Parmesan, Alba Truffle
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Chicken Salad

                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Celeriac, Liberico Ham, Chicken
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='position-relative d-flex justify-content-between' style={{width: '100%', height: 800 / proporcional}}>
                    <div className='position-relative' style={{width: '50%', height: 800 / proporcional}}>
                        <div className='position-absolute start-50 top-50 translate-middle' style={{width: 650 / proporcional, height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#4f7b7e', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Desayunos
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Acai Bowl
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    (Rye, genever, demerara, and green chartreuse)
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Protein Breakfast
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    (Scotch, cranberry grenadine, lemon, and gilka)
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Stirred eggs
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    (Pineapple rum, sweet vermouth, and amaro)
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Salmon Sandwiches
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    (Gins, Elske tonic syrup, and lime)
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Toast with Salmon
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    (Rye, genever, demerara, and green chartreuse)
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Eggs with Cheese
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    (Scotch, cranberry grenadine, lemon, and kummel)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='position-absolute top-0 translate-middle' style={{width: 128 / proporcional, height: 128 / proporcional, right: '50%'}}>
                        <img src={image_circulo_00} style={{width: 512 / proporcional, height: 512 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: '50%', height: 800 / proporcional, zIndex: 9999}}>
                        <div className='position-absolute top-50 start-50 translate-middle' style={{width: 650 / proporcional, height: 500 / proporcional}}>
                            <img src={image_00} style={{width: 650 / proporcional, height: 500 / proporcional}}/>
                        </div>
                    </div>
                </div>

                <div className='position-relative d-flex justify-content-between' style={{width: '100%', height: 1150 / proporcional}}>
                    <div className='position-relative' style={{width: '50%', height: 1150 / proporcional, zIndex: 9999}}>
                        <div className='position-absolute top-50 start-50 translate-middle' style={{width: 588 / proporcional, height: 850 / proporcional}}>
                            <img src={image_03} style={{width: 588 / proporcional, height: 850 / proporcional}}/>
                        </div>
                    </div>
                    <div className='position-absolute top-0 translate-middle' style={{width: 128 / proporcional, height: 128 / proporcional, left: '30%'}}>
                        <img src={image_circulo_02} style={{width: 512 / proporcional, height: 512 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: '50%', height: 1150 / proporcional}}>
                        <div className='position-absolute start-50 top-50 translate-middle' style={{width: 650 / proporcional, height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#4f7b7e', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Platos principales
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Aubry 1er Cru Brut
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    France (Champagne) Chardonnay, Pinot Noir
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Chateau Marguii Rose
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    France (Champagne) Chardonnay, Pinot Noir
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Clos Tue Boeuf 'Petit Blanc'
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    France (Loire) Sauvignon Blanc France (Loire) Sauvignon Blanc
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Niepoort 'Redoma Branco'
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Portugal (Douro) Rabigato, Codéga de LarinhoFrance (Provence) Cin
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Guillot Broux 'Genievrieres'
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    France (Burgundy) Chardonnay
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Aubry 1er Cru Brut
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    France (Champagne) Chardonnay, Pinot Noir
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Chateau Marguii Rose
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    France (Provence) Cinsault, Grenache France (Provence)
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Clos Tue Boeuf 'Petit Blanc'
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    France (Loire) Sauvignon Blanc
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Niepoort 'Redoma Branco'
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Portugal (Douro) Rabigato, Codéga de LarinhoPortugal (Douro) Rabigat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='position-relative d-flex justify-content-between' style={{width: '100%', height: 800 / proporcional}}>
                    <div className='position-relative' style={{width: '50%', height: 800 / proporcional}}>
                        <div className='position-absolute start-50 top-50 translate-middle' style={{width: 650 / proporcional, height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#4f7b7e', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Postres
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Almond Cookie
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Almonds, walnuts, flour
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Creme Brulee
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Vanilla bean, heavy cream, egg
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Baked Alaska
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Pineapple, chocolate, butter
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Chocolate Dream
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Cookie cream, dark chocolate, sweetener
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Gingerbread
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Ginger, chocolate, flour
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 10 / proporcional, color: '#111111', fontWeight: 400,  fontFamily: 'Roboto Condensed, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Lemon Cake
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: '#659AAC', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'left', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Lemon, chocolate, lime
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='position-absolute top-0 translate-middle' style={{width: 128 / proporcional, height: 128 / proporcional, right: '50%'}}>
                        <img src={image_circulo_03} style={{width: 512 / proporcional, height: 512 / proporcional}}/>
                    </div>
                    <div className='position-relative' style={{width: '50%', height: 800 / proporcional, zIndex: 9999}}>
                        <div className='position-absolute top-50 start-50 translate-middle' style={{width: 650 / proporcional, height: 500 / proporcional}}>
                            <img src={image_02} style={{width: 650 / proporcional, height: 500 / proporcional}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
