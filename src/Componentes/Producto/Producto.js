import React from 'react';

import Menu from '../menu/Menu';
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer';
import ListadoProd from '../ListadoProd';



class Producto extends React.Component {

	render() {

		return (

			<>

				<Menu />

				<main role="main" className="flex-shrink-0 mt-5">

					<section className="text-center">
						<div className="container">
							<h1>♥</h1>
							<h1 className="jumbotron-heading">Contamos con diferentes servicios </h1>
							<p className="lead text-muted">
								Ya aceptamos pagos a traves de transferencias, mercado pago entre otros.
							</p>
							<p>Conocelos aqui, pagos seguros y rapidos UuUr
							</p>
							<div>
								<img src={require('./pago.png')} width="250" height="250" />
								<img src={require('./linea.png')} width="250" height="250" />
							</div>
						</div>
					</section>
					<div className="album py-5 bg-light">
						<div className="container">

							<div className="row">
								<div className="col-md-4">
									<div className="card mb-4 shadow-sm">
										<img src={require('./collar-de-perro.png')} width="100" height="100" />
										<div className="card-body">
											<h1>Collares</h1>
											<p className="card-text"></p>
											<p>Descripcion: Collar de tela bonito</p>
											<p>Diferentes tallas</p>
											<p>Precio $60</p>

										</div><Link to="/checkout">
											<a className="flex items-center justify-center px-4 py-3 border border-transparent text-base text-black font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-300 sm:px-8">
												Agregar al carrito!♥
											</a>
										</Link>
									</div>
								</div>


								<div className="row">
									<div className="col-md-4">
										<div className="card mb-4 shadow-sm">
											<img src={require('./champu-para-mascotas.png')} width="100" height="100" />
											<div className="card-body">
												<h1>Shampoos</h1>
												<p className="card-text"></p>
												<p>Descripcion: Shampoo para todo tipo de pelo</p>
												<p>Diferentes tamaños en envases</p>
												<p>Precio $80</p>

											</div><Link to="/checkout">
												<a className="flex items-center justify-center px-4 py-3 border border-transparent text-base text-black font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-300 sm:px-8">
													Agregar al carrito!♥
												</a>
											</Link>
										</div>
									</div>


								</div>
							</div>
						</div>
</div>
				</main>

				<Footer />

			</>

		)

	}

}

export default Producto;