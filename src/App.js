import './App.css';
import Nav from './components/navbar'
import Inicio from './components/inicio'
import Ade from './components/acercaDe'
import Tec from './components/tecnologias'
import Con from './components/contacto'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav/>
      <Inicio/>
      <Ade/>
      <Tec/>
      <Con/>
      </header>
    </div>
  );
}

export default App;
