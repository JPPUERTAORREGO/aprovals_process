import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardView = ({solicitud}) => {
  //console.log(solicitud)

  const { 
    "id": id,
    "tipo de novedad": tipoDeNovedad,
    "Descripción": descripcion,
    "Código de equipo": codigoDeEquipo,
    "Ubicacion técnica": ubicacionTecnica,
    "Justificación": justificacion,
    "Valor activo": valorActivo,
    "Archivo": archivo,
    "Aprovador": aprovador
  } = solicitud;
  

  return (
    <div>    
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{tipoDeNovedad}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <Button variant="primary"></Button>
        </Card.Body>
      </Card>
  </div>
  )
}
