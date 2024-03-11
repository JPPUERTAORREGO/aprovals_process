import React from 'react'
import { CardView } from './CardView'

//import data from './false_users.json'

export const ListView = ({solicitudes}) => {
//console.log(solicitudes)
  return (
    <div>
      {solicitudes.map((arg,index)=>(
        <CardView key = {index}
        solicitudes= {arg}/>
      ))}
      
    </div>
  )
  

}