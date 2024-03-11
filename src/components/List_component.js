import React from 'react'
export const List_component = ({ cambiarPosicion, handleAccordionToggle }) => {
  return (
    <div>
      <h1>este es Center</h1>
      <div className='bttn-usuario'>
        <button onClick={() => { cambiarPosicion(0); handleAccordionToggle(); }}>Mostrar Usuario 1</button>
        <button onClick={() => { cambiarPosicion(1); handleAccordionToggle(); }}>Mostrar Usuario 2</button>
        <button onClick={() => { cambiarPosicion(2); handleAccordionToggle(); }}>Mostrar Usuario 3</button>
      </div>
    </div>
  );
};