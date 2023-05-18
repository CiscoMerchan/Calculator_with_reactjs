import '../componentsStyleCheet/Button.css'
function Button(props){

  const esOperador = valor => {
    // isNaN if is a number. = if valor is a number
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

    return(
      <div 
        /*props.manejarClic(props.children) = when user click in button manejarClic will
        pass the value of  {props.children}(props.children = to any value between, ejem:
        <Button manejarClic={addInput}>1</Button> [in this case the number '1']) that 
        value (props.children ) will go in addInput(props.children = val)*/ 
        onClick={() => props.manejarClic(props.children)}
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ""}`.trimEnd()}>
        {props.children}
      </div>        
    );
}
export default Button;