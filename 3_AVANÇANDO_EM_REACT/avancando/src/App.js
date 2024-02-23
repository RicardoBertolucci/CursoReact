import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

import './App.css';

import Car from './assets/Car.jpg';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="Fundo.jpg" alt="Fundo" />
      </div>

      {/* Imagem em src */}
      <div>
        <img src={Car} alt="Carro" />
      </div>

      <ManageData />

      <ListRender />
    </div>
  );
}

export default App;
