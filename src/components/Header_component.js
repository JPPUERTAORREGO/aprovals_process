import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'; // Asegúrate de tener esta línea
import Modal from 'react-bootstrap/Modal'; // Importamos el componente Modal de react-bootstrap
import './Header_component.css' // Importamos los estilos del componente

export const Header_component = (props) => {
  const [show, setShow] = useState(false); // Declaramos un estado llamado show con valor inicial false

  const handleClose = () => setShow(false); // Función para cerrar el modal, establece el estado show en false
  const handleShow = () => setShow(true);  // Función para abrir el modal, establece el estado show en true

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
         <a href="#"><img class="imagenes" src="agregar.png" alt="agregar" width="30" height="30" onClick={handleShow}/></a> {/*// Icono de agregar, al hacer clic se abre el modal */}
        <a href="#"><img class="imagenes" src="salir.png" alt="user" width="30" height="30"/></a>
         <Modal show={show} onHide={handleClose}> {/*// Modal que se muestra u oculta dependiendo del estado show */}
          <Modal.Header closeButton>
            <Modal.Title>Agregar solicitud</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>     {/*// Botón para cerrar el modal */}
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}> {/*// Botón para guardar cambios y cerrar el modal */}
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Header_component;
