import React, { useState } from 'react'
import data from "./solicitud.json"
import { ListView } from './ListView';
import { Detail_component } from './Detail_component.js';
import { Header_component } from './Header_component';
import { useForm } from 'react-hook-form';

export const Prueba = () => {
  const [solicitudes, setSolicitudes] = useState(data.solicitudes)
  const [valorSelect, setValorSelect] = useState("")
  const [valorDescripcion, setValorDescripcion] = useState("")
  const [valorEquipo, setValorEquipo] = useState("")
  const [valorUbicacion, setValorUbicacion] = useState("")
  const [valorJustificaion, setValorJustificaion] = useState("")
  const [valorActivo, setValorActivo] = useState("")
  const [valorArchivo, setValorArchivo] = useState("")
  const [valorAprovedor, setValorAprovedor] = useState("")

  const [posicion, setPosicion] = useState(0);
  const [contador, setContador] = useState(solicitudes[0]?.['Código de equipo'] ?? '');
  const [activeKey, setActiveKey] = useState(String(posicion));

  const cambiarPosicionPorId = (nuevoId) => {
    const nuevaPosicion = solicitudes.findIndex(solicitud => solicitud.id === nuevoId);
    if (nuevaPosicion !== -1) {
      setPosicion(nuevaPosicion);
      setContador(solicitudes[nuevaPosicion]['Código de equipo']);
    } else {
      console.log(`No se encontró una solicitud con el id ${nuevoId}`);
    }
  };
  const cambiarContador = (nuevoContador) => {
    setContador(nuevoContador);
  };

  const handleAccordionToggle = () => {
    setActiveKey(activeKey === null ? String(posicion) : null);
  };

  const handleOnChageSelect = (e) => {
    setValorSelect(e.target.value)
  }

  const handleOnChangeEquipo = (e) => {
    setValorDescripcion(e.target.value)
  }

  const handleOnChangeCodigo = (e) => {
    setValorEquipo(e.target.value)
  }

  const handleOnChangeUbi = (e) => {
    setValorUbicacion(e.target.value)
  }

  const handleOnChangeJusti = (e) => {
    setValorJustificaion(e.target.value)
  }

  const handleOnChangeValor = (e) => {
    setValorActivo(e.target.value)
  }

  const handleOnChangeMulti = (e) => {
    setValorArchivo(e.target.value)
  }

  const handleOnChageSelectProve = (e) => {
    setValorAprovedor(e.target.value)
  }



  const handleOnClick = (e) => {

    const newSolicitud = {
      "id": solicitudes.length,
      "fecha": new Date().toLocaleDateString(),
      "tipo de novedad": valorSelect,
      "Descripción": valorDescripcion,
      "Código de equipo": valorEquipo,
      "Ubicacion técnica": valorUbicacion,
      "Justificación": valorJustificaion,
      "Valor activo": valorActivo,
      "Archivo": valorArchivo,
      "Aprovador": valorAprovedor,
      "Estado": "No aprovado"
    }

    setSolicitudes([...solicitudes, newSolicitud])
    e.preventDefault()
    setValorSelect("")
    setValorDescripcion("")
    setValorEquipo("")
    setValorUbicacion("")
    setValorJustificaion("")
    setValorActivo("")
    setValorArchivo("")
    setValorAprovedor("")


  }

  console.log(solicitudes)
  return (
    <>
      <div>
        <Header_component
          handleOnChageSelect={handleOnChageSelect}
          handleOnChangeEquipo={handleOnChangeEquipo}
          handleOnChangeCodigo={handleOnChangeCodigo}l
          handleOnChangeUbi={handleOnChangeUbi}
          handleOnChangeJusti={handleOnChangeJusti}
          handleOnChangeValor={handleOnChangeValor}
          handleOnChangeMulti={handleOnChangeMulti}
          handleOnChageSelectProve={handleOnChageSelectProve}
          // handleOnChangeAge={handleOnChangeAge}
          handleOnClick={handleOnClick}
        />
        <ListView solicitudes={solicitudes}
          cambiarPosicion={cambiarPosicionPorId}
          handleAccordionToggle={handleAccordionToggle}
        />
        <div className="List">

        </div>
        <div className="Detail">
          <Detail_component key={posicion}
            cambiarPosicion={cambiarPosicionPorId}
            cambiarContador={cambiarContador}
            posicion={posicion}
            contador={contador}
            handleAccordionToggle={handleAccordionToggle}
            activeKey={activeKey}
            setActiveKey={setActiveKey} />
        </div>
      </div>
    </>
  )
}
