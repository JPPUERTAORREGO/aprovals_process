import './Header_component.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

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

  const manejarEnvio = (data) => {
    console.log(data);
    handleClose();
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="navbar">
      <a href="#"><img className="imagenes" src="user.png" alt="user" width="30" height="30"/></a>
      <h5>Administrador</h5>
      <div className="navbar-center">
        <h2>Flujo de Aprobaciones</h2>
      </div>
      <div className="navbar-right">
        <a href="#"><img className="imagenes" src="inicio.png" alt="user" width="30" height="30"/></a>
        <a href="#"><img className="imagenes" src="user.png" alt="user" width="30" height="30"/></a>
        <a href="#"><img className="imagenes" src="agregar.png" alt="agregar" width="30" height="30" onClick={handleShow}/></a>
        <a href="#"><img className="imagenes" src="salir.png" alt="user" width="30" height="30"/></a>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nueva solicitud</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit(manejarEnvio)}>
              <label className='form-label'>Tipo de novedad</label>
              <select {...register("miSelect", { required: true })} className='form-control'>
                <option value="">Seleccionar</option>
                <option value="opcion1">Compra</option>
                <option value="opcion2">Levantamiento</option>
                <option value="opcion3">Modificación</option>
                <option value="opcion4">Traslado</option>
                <option value="opcion5">Baja</option>
                <option value="opcion6">Suspensión depreciación</option>
              </select>
              {errors.miSelect && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <label className='form-label'>Descripción del equipo</label>
              <textarea {...register("descripcion", { required: true })} className='form-control'/>
              {errors.descripcion && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <label className='form-label'>Código del equipo</label>
              <input {...register("codigo", { required: true })} type="text" className='form-control'/>
              {errors.codigo && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <label className='form-label'>Ubicación técnica</label>
              <input {...register("ubicacion", { required: true })} type="text" className='form-control'/>
              {errors.ubicacion && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <label className='form-label'>Justificación</label>
              <input {...register("justificacion", { required: true })} type="text" className='form-control'/>
              {errors.justificacion && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <label className='form-label'>Valor activo (COP)</label>
              <input {...register("valor", { required: true })} step="0.01" type="number" className='form-control'/>
              {errors.valor && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <label className='form-label'>Agregar archivo</label>
              <input {...register("archivo", { required: true })} type="file" multiple className='form-control'/>
              {errors.archivo && <span style={{ color: 'red' }}>Este campo es requerido</span>} 

              <label className='form-label'>Aprovador</label>
              <select {...register("aprovador", { required: true })} className='form-control'>
                <option value="">Nombre del aprovador</option>
                <option value="opcion1">Persona 1</option>
                <option value="opcion2">Persona 2</option>
                <option value="opcion3">Persona 3</option>
                <option value="opcion4">Persona 4</option>
                <option value="opcion5">Persona 5</option>
                <option value="opcion6">Persona 6</option>
              </select>
              {errors.aprovador && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" type="submit">
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