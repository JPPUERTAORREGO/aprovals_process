import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Header_component } from './components/Header_component';
import { List_component } from './components/List_component';
import { Detail_component } from './components/Detail_component';
import Data from './Data.js';

function App() {
  const [posicion, setPosicion] = useState(0);
  const [contador, setContador] = useState(Data.solicitudes[0]['Código de equipo']);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const cambiarPosicion = (nuevaPosicion) => {
    setPosicion(nuevaPosicion);
    setContador(Data.solicitudes[nuevaPosicion]['Código de equipo']);
  };

  const cambiarContador = (nuevoContador) => {
    setContador(nuevoContador);
  };

  return (
    <div className="App">
      <div className="Header">
        <Header_component />
      </div>
      <div className="List">
        <List_component cambiarPosicion={cambiarPosicion} />
      </div>
      <div className="Detail">
      <Detail_component cambiarPosicion={cambiarPosicion} cambiarContador={cambiarContador} posicion={posicion} contador={contador} activeKey={String(posicion)} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;


