import React, { useState } from 'react'
import data from "./solicitud.json"
import { ListView } from './ListView';
import { NewSolicitudForm } from './NewSolicitudForm';
import { CardView } from './CardView';

export const Prueba = () => {
  const [solicitudes, setSolicitudes] = useState(data.solicitudes)
  const [valorSelect, setValorSelect] = useState("")
  const [valorAge, setValorAge] = useState("")


  const handleOnChageSelect = (e) => {
    setValorSelect(e.target.value)
  }

  const handleOnChangeAge = (e) => {
    setValorAge(e.target.value)
  }

  const handleOnClick = (e) => {
    const newSolicitud = {
      "Tipo de novedad": valorSelect,
      "age": valorAge,
      "secretIdentity": "Dan Jukes 4"
    }

    setSolicitudes([...solicitudes, newSolicitud])
    e.preventDefault()
    setValorSelect("")
    setValorAge("")

  }

  return (

    <>
      <div>
        <NewSolicitudForm
          handleOnChageSelect={handleOnChageSelect}
          handleOnChangeAge={handleOnChangeAge}
          handleOnClick={handleOnClick}
        />
        <ListView solicitudes={solicitudes} valorAge={valorAge} />
      </div>
    </>
  )
}
