import './Header_component.css' // Importamos los estilos CSS para este componente.
import React, { useState } from 'react';  // Importamos React y el hook useState de React.
import Button from 'react-bootstrap/Button'; // Importamos el componente Button de react-bootstrap.
import Modal from 'react-bootstrap/Modal'; // Importamos el componente Modal de react-bootstrap.
import { useForm } from 'react-hook-form';  // Importamos el hook useForm de react-hook-form.

export const Header_component = (props) => {
   // Usamos el hook useState para manejar el estado del modal y de los archivos
  const [show, setShow] = useState(false); // Estado para mostrar u ocultar el modal
  const [archivos, setArchivos] = useState([]); // Estado para almacenar los archivos seleccionados por el usuario.

  // Definimos las funciones para abrir y cerrar el modal
  const handleClose = () => setShow(false);  // Función para cerrar el modal.
  const handleShow = () => setShow(true); // Función para abrir el modal.

  // Definimos la función para manejar el cambio en el input de archivos
  const manejarCambio = (evento) => {
    // Recorremos todos los archivos seleccionados por el usuario
    for (let i = 0; i < evento.target.files.length; i++) {
       // Verificamos si el tamaño del archivo es mayor a 1MB (1000000 bytes)
      if (evento.target.files[i].size > 1000000) {
          // Si el archivo es demasiado grande, mostramos una alerta y terminamos la ejecución de la función
        alert('El archivo ' + evento.target.files[i].name + ' es demasiado grande.');
        return;
      }
      // Verificamos si el tipo del archivo es distinto de 'image/jpeg' y 'image/png'
      if (!['image/jpeg', 'image/png'].includes(evento.target.files[i].type)) {
        // Si el archivo no es de un tipo permitido, mostramos una alerta y terminamos la ejecución de la función
        alert('El archivo ' + evento.target.files[i].name + ' no es un tipo de archivo permitido.');
        return;
      }
    }
    // Si todos los archivos pasan las validaciones, actualizamos el estado con los archivos seleccionados por el usuario
    setArchivos(evento.target.files);  
  };

  // Usamos el hook useForm para manejar el formulario
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Definimos la función para manejar el envío del formulario
  const manejarEnvio = (data) => {
    // Mostramos un cuadro de diálogo de confirmación al usuario
    const confirmacion = window.confirm('¿Deseas guardar los datos?');
    // Si el usuario confirma que desea guardar los datos...
    if (confirmacion) {
      console.log('Datos:', data);  // Imprimimos los datos del formulario en la consola.
      reset(); // Limpia los campos del formulario
      setShow(false); // Cerramos el modal.
    }
  };
  
  // Definimos la función para manejar la cancelación del formulario
  const manejarCancelacion = () => {
    // Mostramos un cuadro de diálogo de confirmación al usuario
    const confirmacion = window.confirm('¿Deseas cancelar esta operación?');
    // Si el usuario confirma que desea cancelar la operación...
    if (confirmacion) {
      reset(); // Limpia los campos del formulario
      setShow(false); // Cerramos el modal.
    }
  };
  
  
  // Renderizamos el componente
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
              <label className='form-label'></label>
              <select {...register("miSelect", { required: true })} className='form-select'>
                <option value="">Seleccionar tipo de novedad</option>
                <option value="opcion1">Compra</option>
                <option value="opcion2">Levantamiento</option>
                <option value="opcion3">Modificación</option>
                <option value="opcion4">Traslado</option>
                <option value="opcion5">Baja</option>
                <option value="opcion6">Suspensión depreciación</option>
              </select>
              {errors.miSelect && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <label className='form-label'></label>
              <textarea  placeholder='Descripción del equipo'{...register("descripcion", { required: true })} className='form-control'/>
              {errors.descripcion && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <label className='form-label'></label>
              <input placeholder='Código del equipo' {...register("codigo", { required: true })} type="text" className='form-control'/>
              {errors.codigo && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <label className='form-label'></label>
              <input placeholder='Ubicación técnica' {...register("ubicacion", { required: true })} type="text" className='form-control'/>
              {errors.ubicacion && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <label className='form-label'></label>
              <input placeholder='Justificación' {...register("justificacion", { required: true })} type="text" className='form-control'/>
              {errors.justificacion && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <label className='form-label'></label>
              <input placeholder='Valor activo (COP)' {...register("valor", { required: true })} step="0.01" type="number" className='form-control'/>
              {errors.valor && <span style={{ color: 'red' }}>Este campo es requerido</span>}

              <label className='form-label'>Agregar archivo</label>
              <input {...register("archivo", { required: true })} type="file" multiple className='form-control'/>
              {errors.archivo && <span style={{ color: 'red' }}>Este campo es requerido</span>} 

              <label className='form-label'></label>
              <select {...register("aprovador", { required: true })} className='form-select'>
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
                <Button variant="secondary"  onClick={manejarCancelacion}>
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