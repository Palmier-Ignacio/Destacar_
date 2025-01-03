import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import JobScreen from './screens/JobScreen/JobScreen'
import SocialScreen from './screens/SocialScreen/SocialScreen'
import ScrollToSection from './components/ScrollToSection/ScrollToSection'

function App() {
  
  return (
    <BrowserRouter>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/consegui-empleo" element={<JobScreen/>} />
        <Route path="/potencia-tus-redes" element={<SocialScreen/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
