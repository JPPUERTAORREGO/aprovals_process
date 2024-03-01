import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ContadorComponent from './components/ContadorComponent';

import { Header_component } from './components/Header_component';
import { List_component } from './components/List_component';
import { Detail_component } from './components/Detail_component';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header_component />
      </div>
      <div className="List">
        <List_component />
      </div>
      <div className="Detail">
        <Detail_component />
      </div>
      <div>
        <ContadorComponent/>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;


