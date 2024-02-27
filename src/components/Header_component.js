import React from 'react'
import './Header_component.css'

export const Header_component = () => {
  return (
    <div class="navbar">
      <a>
        <a href="#"><img class="imagenes" src="user.png" alt="user" width="30" height="30"/></a>
      </a>
      <h5>Administrador</h5>
      <div class="navbar-center">
        <h2>Flujo de Aprobaciones</h2>
      </div>
      <div class="navbar-right">
        <a href="#"><img class="imagenes" src="inicio.png" alt="user" width="30" height="30"/></a>
        <a href="#"><img class="imagenes" src="user.png" alt="user" width="30" height="30"/></a>
        <a href="#"><img class="imagenes" src="agregar.png" alt="agregar" width="30" height="30"/></a>
        <a href="#"><img class="imagenes" src="salir.png" alt="salir" width="30" height="30"/></a>
      </div>
    </div>
  )
}

export default Header_component;


