import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// Importamos el contexto
import { UserContext } from '../Context/Usuario/UserContext';
import { cuentaService } from '../../Servicios'
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';
import Sesion from '../Sesion/Sesion';
import {Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Cuenta = () => {
    // Desestrcuturamos los elementos necesarios
    const { saveToken, user: token } = useContext(UserContext);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        const user = await cuentaService(dataObject)
        // Usamos lo que necesitamos
        saveToken(user.detail)
        e.target.reset();
    };
    
    const redirect = <NavLink to='/' />

    return (
        <>
        <Menu/>
        <main role="main" className="flex-shrink-0 mt-5">

		        <div className="container">
				<i class="fi fi-rr-confetti">a</i>
        <h1>Registro</h1>
        <form onSubmit={onSubmit} >
                <input type="text" placeholder="Nombre" name="nom" />
                <br /><br />
			 <input type="text" placeholder="Apellido" name="ape" />
                <br /><br />
                <input type="text" placeholder="Email" name="email" />
                <br /><br />
                <input type="password" placeholder="Password" name="password" />
                <br /><br />
                <input type="submit" value="Crear cuenta" />

                <h2>¿Ya tienes una cuenta?  </h2>
                <Link to="/cuenta">
						  <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base text-black font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-300 sm:px-8">
							Inicia sesion
						  </a>
						</Link>
                <br /><br />
                <br /><br />
                <br /><br />
            </form >
            </div>
            </main>
            <Footer/>
        </>
    )
}

export default Cuenta;
