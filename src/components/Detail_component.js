import React from 'react'

export const Detail_component = ({soli}) => {
  // Aquí puedes acceder a la información de `soli` para renderizar los detalles
  // Por ejemplo, si `soli` tiene una propiedad `nombre`, puedes renderizarla así:

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
  } = soli;
  
  return (
    <div>
      <h2>Detalles de la Solicitud</h2>
      <p>Nombre: {tipoDeNovedad}</p>
      <p>Descripción: {descripcion}</p>
      {/* Renderiza aquí el resto de los detalles de `soli` */}
    </div>
  )
}
