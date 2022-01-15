import React from 'react';
import './P.css'
import { Link } from 'react-router-dom'
import Menu from '../menu/Menu';

import Footer from '../footer/Footer';
import ListadoProd from '../ListadoProd';



class Pro1 extends React.Component {

	render() {

		return(

			<>

			<Menu />
            <div className='div1'>
				<hq>♥</hq>
				<h1>♥</h1>
				<h1>Aprovecha nuestros nuevos productos</h1>
				
			</div>
			<div className="card1">
                <div className="card-logo1">
                    
                </div>
                <div className="card-content1">
				<img src={require('./plato-de-perro.png')} width="100" height="100" />
                  <h1>Producto: Plato bonito</h1>  
                  <p>Descripcion: Mediano, color: variado</p>
				  <p>Precio: $79</p>
				  <Link to="/checkout">
						  <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base text-black font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-300 sm:px-8">
							Agregar al carrito!♥
						  </a>
						</Link>

                </div>
				
            </div>
			<Link to="/Producto">
						  <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base text-black font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-300 sm:px-8">
							Regresarc:
						  </a>
						</Link>
	  		<Footer />

	  		</>

		)

	}

}

export default Pro1;