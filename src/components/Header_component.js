import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header_component.css' // Importamos los estilos CSS para este componente.
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const Header_component = (props) => {

  const {handleOnChageSelect,
    handleOnChangeEquipo,
    handleOnChangeCodigo,
    handleOnChangeUbi,
    handleOnChangeJusti,
    handleOnChangeValor,
    handleOnChangeMulti,
    handleOnChageSelectProve,
    handleOnClick,
    handleShow,
    handleClose,
    show,
    // register,
    // handleSubmit,
    // errors,
    manejarCancelacion,
    handleSubmit,
  } = props
  
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="img/user.png" alt="user" width="30" height="30"/>
            <h5>Administrador</h5>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg bg-light"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="navbar-center">
              <h2>Flujo de Aprobaciones</h2>
            </div>
            <div  className="navbar-right">
              <a href="#"><img className="imagenes" src="img/inicio.png" alt="user" width="30" height="30"/></a>
              <a href="#"><img className="imagenes" src="img/user.png" alt="user" width="30" height="30"/></a>
              <a href="#"><img className="imagenes" src="img/agregar.png" alt="agregar" width="30" height="30" onClick={handleShow}/></a>
              <a href="#"><img className="imagenes" src="img/salir.png" alt="user" width="30" height="30"/></a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Nueva solucitud</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* onSubmit={handleSubmit} */}
          <form  onSubmit={handleSubmit}>
            <label className='form-label'></label>
            <select  className='form-select' onChange={handleOnChageSelect}>
              <option >Seleccionar tipo de novedad</option>
              <option >Compra</option>
              <option >Levantamiento</option>
              <option >Modificación</option>
              <option >Traslado</option>
              <option >Baja</option>
              <option >Suspensión depreciación</option>
            </select>

            <label className='form-label'></label>
            <textarea  placeholder='Descripción del equipo' className='form-control' onChange={handleOnChangeEquipo}/>

            <label className='form-label'></label>
            <input placeholder='Código del equipo'  type="text" className='form-control' onChange={handleOnChangeCodigo}/>

            <label className='form-label'></label>
            <input placeholder='Ubicación técnica' type="text" className='form-control' onChange={handleOnChangeUbi}/>

            <label className='form-label'></label>
            <input placeholder='Justificación'  type="text" className='form-control' onChange={handleOnChangeJusti}/>

            {/* para que entre solo numeros decimales es step="0.01" */}
            <label className='form-label'></label>
            <input placeholder='Valor activo (COP)'step="0.01" type="number" className='form-control' onChange={handleOnChangeValor}/> 

            <label className='form-label'></label>
            <input  type="file" multiple className='form-control' onChange={handleOnChangeMulti}/>

            <label className='form-label'></label>
            <select  className='form-select' onChange={handleOnChageSelectProve}>
              <option value="">Nombre del aprovador</option>
              <option value="opcion1">Persona 1</option>
              <option value="opcion2">Persona 2</option>
              <option value="opcion3">Persona 3</option>
              <option value="opcion4">Persona 4</option>
              <option value="opcion5">Persona 5</option>
              <option value="opcion6">Persona 6</option>
            </select>
            <Modal.Footer>
              <Button variant="secondary" onClick={manejarCancelacion}>
                Cerrar
              </Button>
              <Button onClick={handleOnClick} variant="primary" type="submit" >Enviar</Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
