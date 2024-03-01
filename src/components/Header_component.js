import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Header_component.css'

export const Header_component = (props) => {
  const [show, setShow] = useState(false);
  const [archivos, setArchivos] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const manejarCambio = (evento) => {
    for (let i = 0; i < evento.target.files.length; i++) {
      if (evento.target.files[i].size > 1000000) {
        alert('El archivo ' + evento.target.files[i].name + ' es demasiado grande.');
        return;
      }
      if (!['image/jpeg', 'image/png'].includes(evento.target.files[i].type)) {
        alert('El archivo ' + evento.target.files[i].name + ' no es un tipo de archivo permitido.');
        return;
      }
    }
    setArchivos(evento.target.files);
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < archivos.length; i++) {
      formData.append('archivos', archivos[i]);
    }
    console.log(archivos);
  };

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
        <a href="#"><img class="imagenes" src="agregar.png" alt="agregar" width="30" height="30" onClick={handleShow}/></a>
        <a href="#"><img class="imagenes" src="salir.png" alt="user" width="30" height="30"/></a>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nueva solicitud</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={manejarEnvio}>
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
              <input type="file" multiple onChange={manejarCambio} className='form-control'/>

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
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" type="submit" onClick={handleClose}>
                  Enviar
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Header_component;
