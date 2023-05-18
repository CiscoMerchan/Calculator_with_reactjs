
import './App.css';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <div className='contenedor-logo'>
      <h1 className='logo'>calculadora react</h1>
      </div>
      <div className='contenedor-calculadora'>
      <div className='fila'><Button>1</Button></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>

      </div>
    </div>
  );
}

export default App;
