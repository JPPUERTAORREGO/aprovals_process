import React, {useState} from 'react'
import data from "./solicitud.json"
import { ListView } from './ListView';
// import { NewSolicitudForm } from './NewSolicitudForm';
import { Header_component } from './Header_component';

export const Prueba = (props) => {
  const [show, setShow] = useState(false);


  const [solicitudes,setSolicitudes] = useState(data.solicitudes)
  const [valorSelect , setValorSelect] = useState("")
  const [valorDescripcion , setValorDescripcion] = useState("")
  const [valorEquipo , setValorEquipo] = useState("")
  const [valorUbicacion , setValorUbicacion] = useState("")
  const [valorJustificaion , setValorJustificaion] = useState("")
  const [valorActivo , setValorActivo] = useState("")
  const [valorArchivo , setValorArchivo] = useState("")
  const [valorAprovedor , setValorAprovedor] = useState("")
  
  // console.log(solicitudes)
  //console.log(valorSelect)
  // console.log(valorDescripcion)
  // console.log(valorEquipo)
  // console.log(valorUbicacion)
  // console.log(valorJustificaion)
  // console.log(valorActivo)
  // console.log(valorArchivo)
  // console.log(valorAprovedor)

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChageSelect =(e)=>{
    setValorSelect(e.target.value)
  }

  const handleOnChangeEquipo =(e)=>{
    setValorDescripcion(e.target.value)
  }

  const handleOnChangeCodigo =(e)=>{
    setValorEquipo(e.target.value)
  }

  const handleOnChangeUbi =(e)=>{
    setValorUbicacion(e.target.value)
  }

  const handleOnChangeJusti =(e)=>{
    setValorJustificaion(e.target.value)
  }

  const handleOnChangeValor =(e)=>{
    setValorActivo(e.target.value)
  }

  const handleOnChangeMulti =(e)=>{
    setValorArchivo(e.target.value)
  }

  const handleOnChageSelectProve =(e)=>{
    setValorAprovedor(e.target.value)
  }



  const handleOnClick =(e)=>{
    
    const newSolicitud = {
      "id": "valorId",
      "fecha": new Date().toLocaleDateString(),
      "tipo de novedad": valorSelect,
      "Descripción": valorDescripcion,
      "Código de equipo": valorEquipo,
      "Ubicacion técnica": valorUbicacion,
      "Justificación": valorJustificaion, 
      "Valor activo": valorActivo,
      "Archivo": valorArchivo,
      "Aprovador": valorAprovedor,
      "Estado":"No aprovado"
    }
    //console.log(newSolicitud)
    
    // console.log(newSolicitud)
    setSolicitudes([...solicitudes,newSolicitud]) 
    e.preventDefault()
    setValorSelect("")
    setValorDescripcion("")
    setValorEquipo("")
    setValorUbicacion("")
    setValorJustificaion("")
    setValorActivo("")
    setValorArchivo("")
    setValorAprovedor("")
    setShow(false)
    
    

  }
  

  
  console.log(solicitudes)
  return (  
    <>
      <div>
        <Header_component 
          handleOnChageSelect={handleOnChageSelect}
          handleOnChangeEquipo={handleOnChangeEquipo}
          handleOnChangeCodigo={handleOnChangeCodigo}
          handleOnChangeUbi={handleOnChangeUbi}
          handleOnChangeJusti={handleOnChangeJusti}
          handleOnChangeValor={handleOnChangeValor}
          handleOnChangeMulti={handleOnChangeMulti}
          handleOnChageSelectProve={handleOnChageSelectProve}
          // handleOnChangeAge={handleOnChangeAge}
          handleOnClick = {handleOnClick}
          handleClose = {handleClose}
          handleShow ={handleShow}
          show = {show}
        />
        <ListView solicitudes ={solicitudes}/>
      </div>
    </>
  )
}
