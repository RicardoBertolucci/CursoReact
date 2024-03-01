import MyForm from './Components/MyForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Ricardo", email: "Ric.bertolucci@gmail.com"}}/>
    </div>
  );
}

export default App;
