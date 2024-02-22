//Components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponents from './components/MyComponents';

//Styles / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponents/>
    </div>
  );
}

export default App;
