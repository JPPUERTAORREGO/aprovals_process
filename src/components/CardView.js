import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardView = ({solicitudes}) => {
console.log(solicitudes)

const {Tipo_de_novedad,Estado} =solicitudes
const valor = solicitudes["Valor activo COP"]
  return (
    <div>    
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{Tipo_de_novedad}</Card.Title>
      <Card.Text>
      Mundo
      </Card.Text>
      <Button variant="primary">{valor}</Button>
    </Card.Body>
  </Card></div>
  )
}
