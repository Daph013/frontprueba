import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div className="navigation fixed top-0 left-0 w-full z-30 duration-300 bg-slate-900">
  <div className="container">
    <nav className="navbar py-2 navbar-expand-lg flex justify-between bgcolor items-center relative duration-300">
      <a className="navbar-brand mx-4" href="index.html">
        <img  src="logomlb.png" width={250} alt="Logo" />
      </a>
      <button className="navbar-toggler focus:outline-none block lg:hidden" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="toggler-icon" />
        <span className="toggler-icon" />
        <span className="toggler-icon" />
      </button>
      <div className="collapse navbar-collapse hidden lg:block duration-300 shadow absolute bg-blue-100 top-100 left-0  z-20 px-5 py-3 w-full lg:static " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
          <li className="nav-item">
            <a className="page-scroll active" href="#hero-area">Inicio</a>
          </li>
          <li className="nav-item">
            <Link to="/pitchers" className="page-scroll" href="#services">Pitchers</Link>
          </li>
          <li className="nav-item">
            <a className="page-scroll" href="#feature">Jugadores de posicion</a>
          </li>
          <li className="nav-item">
            <a className="page-scroll" href="#team">Noticias </a>
          </li>
          <li className="nav-item">
            <a className="page-scroll" href="#testimonial">Contactos</a>
          </li>
          <li className="nav-item">
            <a className="page-scroll" href="#pricing">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="page-scroll" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="header-btn hidden sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
        <a className="text-blue-600 border border-blue-600 px-10 py-3 rounded-full duration-300 mx-3 hover:bg-blue-600 hover:text-white" href="#feature">FAQ</a>
      </div>
    </nav>
  </div>
</div>

  )
}

export default Header