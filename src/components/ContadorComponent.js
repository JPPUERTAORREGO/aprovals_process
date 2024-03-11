import React, { useState } from 'react'
import Data from '../Data.js';


const ContadorComponent = () => {
  const [posicion, setPosicion] = useState(0);
  const [contador, setContador] = useState(Data.usuarios[0].edad);

  const cambiarPosicion = (nuevaPosicion) => {
    setPosicion(nuevaPosicion);
    setContador(Data.usuarios[nuevaPosicion].edad);
  };
  const usuario = Data.usuarios[posicion]
  

  return (
    <div>
      <button onClick={() => cambiarPosicion(0)}>Mostrar Usuario 1</button>
      <button onClick={() => cambiarPosicion(1)}>Mostrar Usuario 2</button>
      <button onClick={() => cambiarPosicion(2)}>Mostrar Usuario 3</button>
      <p>contador: </p>
      <button onClick={() => { setContador(contador + 1) }}>incrementa</button>
      <button onClick={() => { setContador(contador - 1) }}>decrementa</button>
      <div key={usuario.id} className='usuario-info'>
        <h2>{usuario.nombre} {usuario.apellido}</h2>
        <p>Edad: {contador}</p>
        <p>Correo: {usuario.correo}</p>
        <p>Cargo: {usuario.cargo}</p>
        <p>Área: {usuario.área}</p>
        <p>Estado: {usuario.status ? 'Activo' : 'Inactivo'}</p>
      </div>
    </div>
  )
}


export default ContadorComponent






/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */



