import React from 'react'

import image_00 from '../../assets/images/image_blog_900_00.png'
import image_01 from '../../assets/images/image_blog_900_01.png'
import image_02 from '../../assets/images/image_blog_900_02.png'

export default function BlogTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 50 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                marginBottom: 0 / proporcional, color: '#155373', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'default', 
                                letterSpacing: 2 / proporcional}}>
                        Sigue nuestras noticias frescas
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='position-relative' style={{width: 'auto', height: 'auto'}}>
                                <img src={image_00} style={{width: '100%', height: 600 / proporcional}}/>
                                <div className='position-absolute top-0 end-0' style={{width: 200 / proporcional, height: 50 / proporcional, background: '#004669'}}>
                                    <p className='' 
                                        style={{fontSize: 22 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                marginBottom: 20 / proporcional, color: 'white', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'default', 
                                                letterSpacing: 2 / proporcional}}>
                                        23 Octubre
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p className='' 
                                    style={{fontSize: 25 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    food / Ora Treutel
                                </p>
                                <p className='' 
                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                            marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Most popular meals in 2020.
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, 
                                            marginBottom: 20 / proporcional, color: 'rgb(101, 154, 172)', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'center', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Etiam volutpat diam id ultrices efficitur. Nam fringilla mi ante. Vestibulum mattis, nibh facilisis porttitor malesuada, diam neque mollis turpis, ac auctor orci mi vel ante lupus. Pellentesque pellentesque nisl quis nisl placerat fermentum scelerisque vel eros. Aliquam consectetur elit ut eros elem
                                </p>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                                    <button className='btn rounded' style={{width: '30%', height: 50 / proporcional, background: '#dbf6ff', color: '#004669', fontSize: 20 / proporcional, fontWeight: 500}}>
                                        Leer más
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='position-relative' style={{width: 'auto', height: 'auto'}}>
                                <img src={image_01} style={{width: '100%', height: 600 / proporcional}}/>
                                <div className='position-absolute top-0 end-0' style={{width: 200 / proporcional, height: 50 / proporcional, background: '#004669'}}>
                                    <p className='' 
                                        style={{fontSize: 22 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                marginBottom: 20 / proporcional, color: 'white', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'default', 
                                                letterSpacing: 2 / proporcional}}>
                                        23 Octubre
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p className='' 
                                    style={{fontSize: 25 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    food / Ora Treutel
                                </p>
                                <p className='' 
                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                            marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Why is Salmon healthy?
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, 
                                            marginBottom: 20 / proporcional, color: 'rgb(101, 154, 172)', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'center', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Etiam volutpat diam id ultrices efficitur. Nam fringilla mi ante. Vestibulum mattis, nibh facilisis porttitor malesuada, diam neque mollis turpis, ac auctor orci mi vel ante lupus. Pellentesque pellentesque nisl quis nisl placerat fermentum scelerisque vel eros. Aliquam consectetur elit ut eros elem
                                </p>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                                    <button className='btn rounded' style={{width: '30%', height: 50 / proporcional, background: '#dbf6ff', color: '#004669', fontSize: 20 / proporcional, fontWeight: 500}}>
                                        Leer más
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='position-relative' style={{width: 'auto', height: 'auto'}}>
                                <img src={image_02} style={{width: '100%', height: 600 / proporcional}}/>
                                <div className='position-absolute top-0 end-0' style={{width: 200 / proporcional, height: 50 / proporcional, background: '#004669'}}>
                                    <p className='' 
                                        style={{fontSize: 22 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                                marginBottom: 20 / proporcional, color: 'white', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'default', 
                                                letterSpacing: 2 / proporcional}}>
                                        23 Octubre
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p className='' 
                                    style={{fontSize: 25 / proporcional, lineHeight: `${30 / proporcional}px`, 
                                            marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    food / Ora Treutel
                                </p>
                                <p className='' 
                                    style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, 
                                            marginBottom: 20 / proporcional, color: 'rgb(0, 70, 105)', fontWeight: 400,  fontFamily: 'Pacifico, cursive', textAlign: 'center', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Lobster for every season
                                </p>
                                <p className='' 
                                    style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, 
                                            marginBottom: 20 / proporcional, color: 'rgb(101, 154, 172)', fontWeight: 400,  fontFamily: 'Montserrat, sans-serif', textAlign: 'center', cursor: 'default', 
                                            letterSpacing: 2 / proporcional}}>
                                    Etiam volutpat diam id ultrices efficitur. Nam fringilla mi ante. Vestibulum mattis, nibh facilisis porttitor malesuada, diam neque mollis turpis, ac auctor orci mi vel ante lupus. Pellentesque pellentesque nisl quis nisl placerat fermentum scelerisque vel eros. Aliquam consectetur elit ut eros elem
                                </p>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                                    <button className='btn rounded' style={{width: '30%', height: 50 / proporcional, background: '#dbf6ff', color: '#004669', fontSize: 20 / proporcional, fontWeight: 500}}>
                                        Leer más
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}