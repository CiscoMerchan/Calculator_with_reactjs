// Button to cllear data from the screen on the calculator
import '../componentsStyleCheet/ButtonClear.css'

const ButtonClear = (props) => (
	<div onClick={props.manejarClear} 
	className='boton-clear'>
		{props.children}
	</div>
);
export default ButtonClear;