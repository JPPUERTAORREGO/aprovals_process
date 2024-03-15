import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Prueba } from './components/Prueba';
import { Header_component } from './components/Header_component';
import { Detail_component } from './components/Detail_component';
import Data from './Data.js';


function App() {
  const [posicion, setPosicion] = useState(0);
  const [contador, setContador] = useState(Data.solicitudes[0]['Código de equipo']);
  const [activeKey, setActiveKey] = useState(String(posicion));

  const cambiarPosicion = (nuevaPosicion) => {
    setPosicion(nuevaPosicion);
    setContador(Data.solicitudes[nuevaPosicion]['Código de equipo']);
  };

  const cambiarContador = (nuevoContador) => {
    setContador(nuevoContador);
  };

  const handleAccordionToggle = () => {
    setActiveKey(activeKey === null ? String(posicion) : null);
  };
  return (
    <div className="App">
      <Prueba/>
    </div>
  );
}

export default App;


