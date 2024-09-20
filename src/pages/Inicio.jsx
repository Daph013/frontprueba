import React from 'react'
import Hero from '../components/Hero'
import Carrusel from '../components/Carrusel'
import Noticias from '../components/Noticias'

const Inicio = () => {
  return (
    <>
   <Carrusel/>
     <hr />
     <div className='bg-slate-950 py-5'><Hero/></div>
    
    <Noticias/>
     
   
   
    </>
  )
}

export default Inicio