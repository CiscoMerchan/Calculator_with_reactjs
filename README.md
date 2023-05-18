# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# 3 React Project Calculator

### Get ready
    -Delete unnecessairies files

## 1. Layout of App.js
    -Create elements of Logo
    -Create element of calculator
    -Set css code in App.css for elements in App.js

## 2. Components   
   ### Button    
    - Create folder components in src folder
    - Create file Botton.jsx
    - First component Button , using `{props.children}`
    - import Button component to check that it is working  
    * The Set the buttons in the calculator
  ### Calculator Screen
    - Create file Pantalla.jsx inside components folder
    - Create component Pantalla as a 'const' no like a function. 
    - Export to App.js Pantalla component  
    - Style Pantalla component creating a new css file in componentStyleCheet
    -Style Pantalla in Pantalla.css
    - Import Pantalla.css in Pantalla.jsx
  ### Button Clear
    - Create file ButtonClear.jsx inside components folder 
    - Export to App.js ButtonClear component  
    - Style ButtonClear component creating a new css file in componentStyleCheet
    - Style ButtonClear in ButtonClear.css
    - Import ButtonClear.css in ButtonClear.jsx 

## 3 Render Input in the screen

How to render the character of any <Button> inside <Pantalla>?

    * useState Hook to manage the state of 'props.input' in <Patalla>
    - Asign Event Listener in <Button>
     for further undestanding of managin the event go to Button.jsx from line 11 to 14
    - Check that onClic values are render in the screen
## 4 Event Listener for ButtonClear

    in App.js inside <ButtonClear> create a props and call a funtion that will change the state of the input inside <Pantalla>. ejem: 
    `
<ButtonClear manejarClear={() => setInput('')}>
          Clear
          </ButtonClear>
`
    - Then in ButtonClear.jsx add the manejarClear props in onClick event listener. ejem:
    `
    <div onClick={props.manejarClear} 
	className='boton-clear'>
		{props.children}
	</div>
    `

## 5 Calculate the results
    - Evaluate results when user clicks on ' = '
        For this evaluation it will be import the module {evaluate} from 'mathjs' package 
        - install package 'mathjs' ` npm install mathjs ` more info: " https://mathjs.org/docs/getting_started.html "
    ### With this package the calculation is made in this function:
`
    const calculateResult = () => {
        setInput(evaluate(input));
  };
`    
### Note:
    In case the user click on ' = ' without typing before any caracter and the the user click on numbers and again in  ' = ' it will give error so to avoid error, will be a condition in calcullateResult that will check in 'input' is true. if true will make the evaluation. else will give an alert.