import MyComponent from './components/MyComponent';
import Title from './components/Title';
import { useState } from 'react';

import './App.css';

function App() {
  const n = 15;
  const [name] = useState("Matheus");

  const redTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>

      <MyComponent />
      <p>Este parágrafo é do App.js</p>

      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
    
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}> CSS Dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}> CSS Dinâmico</h2>
      <h2 style={name === "Matheus" ? ({color: "green", backgroundColor: "#000"}) : null}> Teste nome</h2>
      <h2 style={name === "a" ? ({color: "green", backgroundColor: "#000"}) : null}> Teste nome</h2>

      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      <Title />
    </div>
  );
}

export default App;
