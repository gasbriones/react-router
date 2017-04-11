import  React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/jsx/App';
// Este es el punto de entrada de la aplicación
// Esto significa que va a tomar todo lo que produzca el componente
// App creado usando react y lo va a meter dentro del div cuyo id es example.
ReactDOM.render(<App />, document.querySelector('#example'));

