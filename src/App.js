import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Prueba } from './components/Prueba';
import { Header_component } from './components/Header_component';
import { List_component } from './components/List_component';
import { Detail_component } from './components/Detail_component';
import Data from './Data.js';
import { Prueba } from './components/Prueba';


function App() {


  return (
    <div className="App">
      <Prueba/>
      <div className="Header">
        <Header_component />
      </div>
      <div className="List">
        <List_component cambiarPosicion={cambiarPosicion} handleAccordionToggle={handleAccordionToggle} />
      </div>
      <div className="Detail">
      <Detail_component cambiarPosicion={cambiarPosicion} cambiarContador={cambiarContador} posicion={posicion} contador={contador} handleAccordionToggle={handleAccordionToggle} activeKey={activeKey} setActiveKey={setActiveKey}/>
      </div>
      {/* <Header_component/> */}
      <Prueba/>
    </div>
  );
}

export default App;


