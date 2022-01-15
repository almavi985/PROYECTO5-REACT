import React from 'react';
import BackgroundJumbotron from '../slider/pet.PNG'
import { Link } from 'react-router-dom'
class Slider extends React.Component {

  render() {

  	return (

		<>
		<main classNameName="mt-10">
		  <div>
			<div className="relative">
			  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
			  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
				  <div className="absolute inset-0">
					<img className="h-full w-full object-cover" src={ BackgroundJumbotron } alt="Guitarras para todo el público" style={{alignSelf:'center'}} height={500} width={1000} />
					<div className="absolute inset-0 bg-gray-800 mix-blend-multiply"></div>
				  </div>
				  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
					<h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
					  <h1 className="block text-black">Todos los productos para tu mejor amigo</h1>
					  <h2 className="block text-black">Encuentra la mayor variedad</h2>
					</h1>
					<p className="mt-6 max-w-lg mx-auto text-center text-xl text-black sm:max-w-3xl">
					  Contamos con productos de buena calidad y al mejor precio.
					</p>
					<div className="mt-10 max-w-sm mx-auto sm:max-w-none flex justify-center">
					  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">
						<h3>Mira nuestro catalogo, aqui abajo :3 </h3>
						<Link to="/producto">
						  <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base text-black font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-300 sm:px-8">
							Mira el catalogooo!
						  </a>
						</Link>

					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
  
		</main>
  
	  </>

  	)
    
  }

}

export default Slider;