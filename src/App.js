
import './App.css';
import Button from './components/Button'
import Pantalla from './components/Pantalla';
function App() {
  return (
    <div className="App">
      <div className='contenedor-logo'>
      <h1 className='logo'>calculadora react</h1>
      </div>
      <div className='contenedor-calculadora'>
          <Pantalla />
        <div className='fila'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='fila'>
          <Button>5</Button>
          <Button>4</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='fila'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='fila'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='fila'>
        Clear
        </div>

      </div>
    </div>
  );
}

export default App;
