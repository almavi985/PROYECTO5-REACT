import React from 'react';
//import './Slider.css';

class Footer extends React.Component {

  render() {

    return (

        <footer className="container">
            <p className="float-right"><a href="#" rel="noopener noreferrer">Inicio</a></p>
            <p>&copy; {(new Date().getFullYear())} Mi Proyecto, Propiedad de Alma Viridiana Hernandez Oropeza </p>
            <p>Paginas hecha para fines educativos</p>
            <p>Ucamp 2021@</p>
        </footer>

    )
    
  }

}

export default Footer;