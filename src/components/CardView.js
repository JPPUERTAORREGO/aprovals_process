import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardView = ({ solicitud, valorAge }) => {
  console.log(solicitud)

  const {id,Tipo_de_novedad,
} = solicitud

  console.log(solicitud)
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{Tipo_de_novedad}</Card.Title>
          <Card.Text>
            estado:{valorAge}
          </Card.Text>
          <Button variant="primary">{id} </Button>
        </Card.Body>
      </Card></div>
  )
}
