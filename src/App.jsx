import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Pitchers from './pages/Pitchers'

const App = () => {
  return (
  
  <>
  
  <BrowserRouter>
        <Header/>
        
        <Routes>
            <Route path="/inicio" element={<Inicio/>} />
            <Route path="*" element={<Inicio/>} />
            <Route path="/pitchers" element={<Pitchers/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  
  </>
  )
}

export default App