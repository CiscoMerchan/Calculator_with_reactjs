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

## Render Input in the screen

How to render the character of any <Button> inside <Pantalla>?

    * useState Hook to manage the state of 'props.input' in <Patalla>