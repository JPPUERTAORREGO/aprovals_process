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
            <Modal.Title>Nueva solicitud</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label className='form-label'>Tipo de novedad</label>
              <select id="miSelect" name="miSelect" className='form-control'>
                  <option value="opcion1">Seleccionar</option>
                  <option value="opcion2">Compra</option>
                  <option value="opcion3">Levantamiento</option>
                  <option value="opcion4">Modificación</option>
                  <option value="opcion5">Traslado</option>
                  <option value="opcion6">Baja</option>
                  <option value="opcion7">Suspensión depreciación</option>
              </select>

              <label  className='form-label'>Descripción del equipo</label>
              <textarea className='form-control'/>

              <label  className='form-label'>Código del equipo</label>
              <input type="text" className='form-control'/>

              <label  className='form-label'>Ubicación técnica</label>
              <input type="text" className='form-control'/>

              <label  className='form-label'>Justificación</label>
              <input type="text" className='form-control'/>

              <label  className='form-label'>Valor activo (COP)</label>
              <input type="number" className='form-control'/>

              <label  className='form-label'>Agregar archivo</label>
              <input type="number" className='form-control'/>

              <label className='form-label'>Aprovador</label>
              <select id="miSelect" name="miSelect" className='form-control'>
                  <option value="opcion1">Numbre del aprovador</option>
                  <option value="opcion2">Persona 1</option>
                  <option value="opcion3">Persona 2</option>
                  <option value="opcion4">Persona 3</option>
                  <option value="opcion5">Persona 4</option>
                  <option value="opcion6">Persona 5</option>
                  <option value="opcion7">Persona 6</option>
              </select>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>     {/*// Botón para cerrar el modal */}
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}> {/*// Botón para guardar cambios y cerrar el modal */}
              Agregar solicitud
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Header_component;
