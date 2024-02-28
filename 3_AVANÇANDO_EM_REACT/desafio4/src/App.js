import UserDetails from './components/UserDetails';

import './App.css';

function App() {
  const cnh = 18;

  const pessoas = [
    {key: 1, nome: "Ricardo", idade: 21, profissao: "Desenvolvedor Full Stack"},
    {key: 2, nome: "Emanuelly", idade: 22, profissao: "Atendente de Telemarketing"},
    {key: 3, nome: "Gustavo", idade: 17, profissao: "Desenvolvedor Backend"},
  ]
  
  return (
    <div className="App">
      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.key} name={pessoa.nome} age={pessoa.idade} job={pessoa.profissao} cnh={cnh}/>
      ))}
    </div>
  );
}

export default App;
