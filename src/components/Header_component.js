import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header_component.css' // Importamos los estilos CSS para este componente.

export const Header_component = (props) => {

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="img/user.png" alt="user" width="30" height="30"/>
            <h5>Administrador</h5>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="navbar-center">
              <h2>Flujo de Aprobaciones</h2>
            </div>
            <div>
              <a href="#"><img className="imagenes" src="img/inicio.png" alt="user" width="30" height="30"/></a>
              <a href="#"><img className="imagenes" src="img/user.png" alt="user" width="30" height="30"/></a>
              <a href="#"><img className="imagenes" src="img/agregar.png" alt="agregar" width="30" height="30"/></a>
              <a href="#"><img className="imagenes" src="img/salir.png" alt="user" width="30" height="30"/></a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
