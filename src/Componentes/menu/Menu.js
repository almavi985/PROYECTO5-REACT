import React from 'react';
import { NavLink } from "react-router-dom";
import {Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Menu.css';
import logo from './mascotas.png';


class Menu extends React.Component {

	render() {

		return (

			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
				<li className="img1">
					<img src={require('../menu/mascotas.png')} width="50" height="50" />
				</li>
				<NavLink to="/" className="navbar-brand">Patitas shop </NavLink>
				
				<div className="collapse navbar-collapse" id="navbarCollapse" >
					<ul className="navbar-nav mr-auto">
            
					<div className="ml-4 mr-4 flex lg:ml-0">
							<NavLink to="/" className="nav-link">Inicio </NavLink>
						</div>
						<li className="nav-item">
							<NavLink to="/nosotros" className="nav-link">Nosotros </NavLink>
						</li>
						
						<li className="nav-item">
							<NavLink to="/producto" className="nav-link">Catalogo  </NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/contacto" className="nav-link">Contacto </NavLink>
						</li></ul>
						<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Nav.Link key={1}><Link to="/Sesion">Iniciar sesion </Link></Nav.Link>
						</li>
                        <li className="nav-item">
						<Nav.Link key={2}><Link to="/Cuenta">Crear cuenta </Link></Nav.Link>
						</li>
						<li className="nav-item">
							<NavLink to="/checkout" className="nav-link">Checkout </NavLink>
						</li>
						


					</ul>

				</div>

			</nav>

		)

	}

}

export default Menu;