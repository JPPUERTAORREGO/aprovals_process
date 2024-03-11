import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import './List_component.css';
import Data from './Data';

export const List_component = () => {
  const [show, setShow] = useState(false);  // estado para controlar la visibilidad del modal
  const [currentData, setCurrentData] = useState(null);  // estado para almacenar los datos actuales

  const handleClose = () => setShow(false);  // cierra el modal
  const handleShow = (data) => {  // muestra el modal y establece los datos actuales
    setCurrentData(data);
    setShow(true);
  };

  return (
    <div className="listComponent">
      {Data.solicitudes.map((solicitud, index) => (  // itera sobre los datos
        <Card key={index} className="cardComponent" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{solicitud["tipo de novedad"]}</Card.Title>  
            <Card.Text>
              {solicitud["Aprovador"]}  
            </Card.Text>
            <Button variant="primary" onClick={() => handleShow(solicitud)}>Ver detalles</Button>  
          </Card.Body>
        </Card>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentData && Object.entries(currentData).map(([key, value], index) => (
            <p key={index}><strong>{key}:</strong> {value}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button color='primary'>
            Editar
          </Button>
          <Button color='primary'>
            Eliminar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


export default List_component;