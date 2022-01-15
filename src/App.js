import React from 'react';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// Páginas del Sitio Web
import Home from './Componentes/home/Home'; 
import Nosotros from './Componentes/nosotros/Nosotros';
import Servicios from './Componentes/servicios/Servicios';
import Contacto from './Componentes/contacto/Contacto';

//mport { RoutesComponent } from './Componentes/routes/Routes'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
function App() {

}

export default App;
