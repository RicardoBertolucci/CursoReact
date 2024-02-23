import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';

import './App.css';

import Car from './assets/Car.jpg';
import { useState } from 'react';

function App() {
  const name = "Joaquim";
  const [userName] = useState("Maria");

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

      <ConditionalRender />

      <ShowUserName name={userName}/>
    </div>
  );
}

export default App;
