import React, { useState } from 'react'
import { CardView } from './CardView'
import { Detail_component } from './Detail_component';
import './CardView.css';

//import data from './false_users.json'

export const ListView = ({solicitudes, cambiarPosicion, handleAccordionToggle}) => {
  
//console.log(solicitudes)
  return (
    <div className='ListViewCard'>
      {solicitudes.map((solicutud)=>(
        <CardView key = {solicutud.id}
        solicitud= {solicutud}
        cambiarPosicion={cambiarPosicion}
        handleAccordionToggle={handleAccordionToggle}
        onDetailClick={handleDetailClick}
        />
      ))}
      {selectedSolicitud && <Detail_component soli={selectedSolicitud} />}
    </div>
  )
}
