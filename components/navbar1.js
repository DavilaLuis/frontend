import React from 'react'
import Link from 'next/link'
/* import estilos from './navbar.module.css' */

export default function Navbar1(){
  return(
    <div className='container-fluid'>
    <nav className="navbar navbar-light navbar-expand-lg text-dark" style={{backgroundColor :'#f0cce3'}} >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Cesar Pablo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/quiensoy">Quien soy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/mistrabajos">Mis Trabajos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">Contacto</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="\servicios\integral">Coaching Integral</a></li>
                <li><a className="dropdown-item" href="\servicios\empresarial">Coaching Empresarial</a></li>
                <li><a className="dropdown-item" href="\servicios\personal">Coaching Personal</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}