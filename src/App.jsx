import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import SocialScreen from './screens/SocialScreen/SocialScreen'
import ScrollToSection from './components/ScrollToSection/ScrollToSection'

function App() {
  
  return (
    // <BrowserRouter>
    //   <ScrollToSection />
    //   <Routes>
    //     <Route path="/" element={<HomeScreen/>} />
    //     <Route path="/potencia-tus-redes" element={<SocialScreen/>} />
    //   </Routes>
    // </BrowserRouter>
    <React.Fragment>
      <h1>¡Página en mantenimiento!</h1>
      <p>Estamos trabajando para mejorar tu experiencia. Vuelve pronto.</p>
    </React.Fragment>
  )
}

export default App
