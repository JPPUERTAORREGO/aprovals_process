import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardView = ({solicitud, onDetailClick}) => {
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
          <Card.Title>novedad: {tipoDeNovedad}</Card.Title>
          <Card.Text>
            <p>descripcion: {descripcion}</p>
            <p>codigo De Equipo: {codigoDeEquipo}</p>
            <p>Justificación: {justificacion}</p>
            <p>Valor activo: {valorActivo}</p>
          </Card.Text>
          <Button variant="primary"  onClick={() => onDetailClick(solicitud)}>Ver detalles</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
