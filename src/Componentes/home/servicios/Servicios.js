import React from 'react';
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Pro1 from '../../Producto/Pro1'

class Servicios extends React.Component {

  render() {

    return (

        <div className="container servicios">

            <div className="row">

                <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140"  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Juguetes y mas</title>
                        <rect width="100%" height="100%" fill="blue" />
                        <text x="20%" y="50%" fill="violet" dy=".3em">¡A jugaaaar!</text>
                        <img src='https://m.media-amazon.com/images/I/519Fnk6Bd8S._AC_SL1356_.jpg' alt='Pelotas y mas'/>
                    </svg>
                    <h2>Juguetes, transportadoras, camas, limpieza</h2>
                    <p> Encuentra la mejor variedad en juguetes de goma, camitas, transportadoras para llevar a tu amigo peludo a cualquier lado, tambien contamos con material de limpieza uwu </p>
                    <NavLink to="/Pro1" className="nav-link">Ver producto </NavLink>
                </div>

                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Dispensadores, comida, platos, etc</title>
                        <rect width="100%" height="100%" fill="yellow" />
                        <text x="20%" y="45%" fill="blue" dy=".3em">Hora de la </text>
                        <text x="10%" y="60%" fill="blue" dy=".3em"> comidaaaa |*u*|</text>
                    </svg>
                    <h2>Dispensadores, comida y algo mas</h2>
                    <p>Encontraras los mejores dispensadores para que su comida sea mas divertida, platos de comida, bebederos y otras cositas mas♥.</p>
               
                    <Link to="/producto">
						  <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base text-black font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-300 sm:px-8">
							Mira los productos
						  </a>
						</Link>
                </div>

                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Collares, ropita y algo mas c:</title>
                        <rect width="100%" height="100%" fill="red" />
                        <text x="20%" y="50%" fill="black" dy=".3em">Peluditos c:</text>
                    </svg>
                    <h2>Collares, ropita</h2>
                    <p> Contamos con gran variedad en ropita, disfraces en todos los tamaños para que ande a la moda. Tambien tenemos preciosos collares y placas para su bienestar y el tuyo :3</p>
                    <Link to="/p2">
						  <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base text-black font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-300 sm:px-8">
							Mira el producto
						  </a>
						</Link>
                </div>

            </div>

        </div>

    )
    
  }

}

export default Servicios;