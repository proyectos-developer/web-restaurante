import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles.css'

import GlobalPanel from './components/global/panel.jsx'
import GlobalPanelTablet from './components/global/paneltablet.jsx'
import GlobalPanelCell from './components/global/panelcell.jsx'

import HomePanel from './components/home/panel.jsx'
import HomePanelTablet from './components/home/paneltablet.jsx'
import HomePanelCell from './components/home/panelcell.jsx'

import MenuPanel from './components/menu/panel.jsx'
import MenuPanelTablet from './components/menu/paneltablet.jsx'
import MenuPanelCell from './components/menu/panelcell.jsx'

import ReservasPanel from './components/reservas/panel.jsx'
import ReservasPanelTablet from './components/reservas/paneltablet.jsx'
import ReservasPanelCell from './components/reservas/panelcell.jsx'

import BlogPanel from './components/blog/panel.jsx'
import BlogPanelTablet from './components/blog/paneltablet.jsx'
import BlogPanelCell from './components/blog/panelcell.jsx'

import ContactanosPanel from './components/contactanos/panel.jsx'
import ContactanosPanelTablet from './components/contactanos/paneltablet.jsx'
import ContactanosPanelCell from './components/contactanos/panelcell.jsx'

export default function App() {

  const [width, setWidth] = useState(window.outerWidth)

  useEffect(() => {
      window.addEventListener('resize', handle_resize)

      return () => {
          window.removeEventListener('resize', handle_resize)
      }
  }, [])

  const handle_resize = () => {
      setWidth(window.outerWidth)
  }

    return (
      <BrowserRouter>
          <Routes>
                <Route path='/' element={width < 500 ? <GlobalPanelCell proporcional={499 / width}/> :
                                         width < 991 ? <GlobalPanelTablet proporcional={991 / width}/> :
                                                       <GlobalPanel proporcional={1920 / width}/>}>
                                                
                    <Route index element={width < 500 ? <HomePanelCell proporcional={499 / width}/> :
                                          width < 991 ? <HomePanelTablet proporcional={991 / width}/> :
                                                        <HomePanel proporcional={1920 / width}/>}/>

                    <Route path='nuestro-menu' element={width < 500 ? <MenuPanelCell proporcional={499 / width}/> :
                                                        width < 991 ? <MenuPanelTablet proporcional={991 / width}/> :
                                                                      <MenuPanel proporcional={1920 / width}/>}/>

                    <Route path='reservas' element={width < 500 ? <ReservasPanelCell proporcional={499 / width}/> :
                                                    width < 991 ? <ReservasPanelTablet proporcional={991 / width}/> :
                                                                  <ReservasPanel proporcional={1920 / width}/>}/>

                    <Route path='nuestro-blog' element={width < 500 ? <BlogPanelCell proporcional={499 / width}/> :
                                                        width < 991 ? <BlogPanelTablet proporcional={991 / width}/> :
                                                                      <BlogPanel proporcional={1920 / width}/>}/>

                    <Route path='contactanos' element={width < 500 ? <ContactanosPanelCell proporcional={499 / width}/> :
                                                       width < 991 ? <ContactanosPanelTablet proporcional={991 / width}/> :
                                                                     <ContactanosPanel proporcional={1920 / width}/>}/>
                </Route>
          </Routes>
      </BrowserRouter>
    )
}