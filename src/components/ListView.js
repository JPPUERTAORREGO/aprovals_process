import React, { useState } from 'react'
import { CardView } from './CardView'
import { Detail_component } from './Detail_component'

export const ListView = ({solicitudes}) => {
  const [selectedSolicitud, setSelectedSolicitud] = useState(null);

  const handleDetailClick = (solicitud) => {
    setSelectedSolicitud(solicitud);
  }

  return (
    <div>
      {solicitudes.map((solicitud)=>(
        <CardView key={solicitud.id} solicitud={solicitud} onDetailClick={handleDetailClick} />
      ))}
      {selectedSolicitud && <Detail_component soli={selectedSolicitud} />}
    </div>
  )
}
