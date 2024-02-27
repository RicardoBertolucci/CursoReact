import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

import './App.css';

import Car from './assets/Car.jpg';
import { useState } from 'react';

function App() {
  // const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 1240 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 30245 },
  ]

  const showMessage = () => {
    console.log("Função executada no componente filho!")
  }

  const [ message, setMessage ] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

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

      <ShowUserName name={userName} />

      <CarDetails brand="VW" km={125.3} color="Preto" newCar={false}/>
      <CarDetails brand="Ford" km={0} color="Vermelha"  newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>

      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}

      <Fragments />

      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing2">
        <h5>Testando o container</h5>
      </Container>

      <ExecuteFunction myFunction={showMessage} />

      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
