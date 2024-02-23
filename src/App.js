import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header_component } from './components/Header_component';import { List_component } from './components/List_component';
import { Detail_component } from './components/Detail_component';

function App() {
  return (
    <>
    <div className="Header">
     <Header_component/>
    </div>
    <div className="List">
    <List_component/>
    </div>
    <div className="Detail">
    <Detail_component/>
    </div>
    </>
  );
}

export default App;


