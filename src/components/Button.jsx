import '../componentsStyleCheet/Button.css'
function Button(props){

  const esOperador = valor => {
    // isNaN if is a number. = if valor is a number
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };

    return(
      <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ""}`.trimEnd()}>
        {props.children}
      </div>        
    );
}
export default Button;