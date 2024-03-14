import React from 'react'

export const List_component = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    <div>
      <h1>este es Center</h1>
    </div>
  )
}
>>>>>>> parent of 34b4e87 (Version 8)
=======
    <div>
      <h1>este es Center</h1>
    </div>
  )
}
>>>>>>> parent of 34b4e87 (Version 8)
