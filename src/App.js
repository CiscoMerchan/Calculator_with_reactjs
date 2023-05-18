
import './App.css';
import Button from './components/Button';
import Pantalla from './components/Pantalla';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const[input, setInput]=useState('');

  const addInput = val => {
    setInput(input + val);    
  };

  const calculateResult = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert('No value have been given to calculate.');
    }

  };

  return (
    <div className="App">
      <div className='contenedor-logo'>
      <h1 className='logo'>calculadora react</h1>
      </div>
      <div className='contenedor-calculadora'>
          <Pantalla input={input}/>
        <div className='fila'>
          <Button manejarClic={addInput}>1</Button>
          <Button manejarClic={addInput}>2</Button>
          <Button manejarClic={addInput}>3</Button>
          <Button manejarClic={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={addInput}>5</Button>
          <Button manejarClic={addInput}>4</Button>
          <Button manejarClic={addInput}>6</Button>
          <Button manejarClic={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={addInput}>7</Button>
          <Button manejarClic={addInput}>8</Button>
          <Button manejarClic={addInput}>9</Button>
          <Button manejarClic={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={calculateResult}>=</Button>
          <Button manejarClic={addInput}>0</Button>
          <Button manejarClic={addInput}>.</Button>
          <Button manejarClic={addInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear manejarClear={() => setInput('')}>
          Clear
          </ButtonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
