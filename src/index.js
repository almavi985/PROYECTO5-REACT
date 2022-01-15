import React from 'react';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import './index.css';
import * as reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// Páginas del Sitio Web
import Home from './Componentes/home/Home';
import Nosotros from './Componentes/nosotros/Nosotros';
import Producto from './Componentes/Producto/Producto';
import Contacto from './Componentes/contacto/Contacto';
import Pro1 from './Componentes/Producto/Pro1';
import p2 from './Componentes/Producto/p2';
import p3 from './Componentes/Producto/p3';
import Sesion from './Componentes/Sesion/Sesion';
import Cuenta from './Componentes/Cuenta/Cuenta';
import Checkout from './Componentes/checkout/Checkout';
import { UserProvider } from './Componentes/Context/Usuario/UserContext';
import Cierre from "./Componentes/cierre/Cierre"
import {Rutaprivada} from "./Componentes/routes/Rutaprivada"
ReactDOM.render(
	<Router>
		<div>
			<UserProvider>
			<Switch>

				{/* Páginas */}
				<Route exact path='/' component={Home} />
				<Route path='/nosotros' component={Nosotros} />
				<Route path='/Producto' component={Producto} />
				<Route path='/contacto' component={Contacto} />
				<Route path='/Sesion' component={Sesion} />
				<Route path='/Cuenta' component={Cuenta} />
				<Route path='/checkout' component={Checkout} />
				<Route path='/Pro1' component={Pro1} />
				<Route path='/p3' component={p3} />
				<Route path='/p2' component={p2} />
				<Route path='/cierre' component={
					<Rutaprivada>
						
						<Cierre/>
					</Rutaprivada>
				}/>
			</Switch>
			</UserProvider>
		</div>
	</Router>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
