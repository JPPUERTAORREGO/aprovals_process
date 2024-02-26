import React from 'react'
import './Header_component.css'

export const Header_component = () => {
  return (
    <div class="contenedor_navbar">
      <nav class="navbar">
        <div>
          <img class="logop" src="user.png" alt="logo"/>
        </div>
        <div class="tipoCuenta">
          <h3>Administrador</h3>
        </div>
        <div class="container">
          <div>
          </div>
          <h2>Flujo de aprovaciones</h2>
            <ul class="nav-links">
                <li><a href="#"><img class="imagenes" src="inicio.png" alt="user" width="30" height="30"/></a></li>
                <li><a href="#"><img class="imagenes" src="user.png" alt="user" width="30" height="30"/></a></li>
                <li><a href="#"><img class="imagenes" src="agregar.png" alt="agregar" width="30" height="30"/></a></li>
                <li><a href="#"><img class="imagenes" src="salir.png" alt="salir" width="30" height="30"/></a></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header_component;