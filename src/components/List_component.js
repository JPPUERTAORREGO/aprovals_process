import React from 'react'

export const List_component = ({ cambiarPosicion }) => {
  return (
    <div>
      <h1>este es Center</h1>
      <div className='bttn-usuario'>
        <button onClick={() => cambiarPosicion(0)}>Mostrar Usuario 1</button>
        <button onClick={() => cambiarPosicion(1)}>Mostrar Usuario 2</button>
        <button onClick={() => cambiarPosicion(2)}>Mostrar Usuario 3</button>
      </div>
    </div>
  );
};