import React from 'react';
import BackgroundJumbotron from '../jumbotron/tienda.jpg'
class Jumbotron extends React.Component {

  render() {

    return (

        <div className="jumbotron">
            <div className="container">
              <h1>♥</h1>
                <h1 className="display-3">Nosotros </h1>
                <p>
                    Somos una pequeña empresa dedicada al cuidado y bienestar de nuestros peluditos
                    <br/>
                    Asi tu y tu amigo se encontraran de la mejor manera y sin preocupaciones c:
                </p>
                <p>
                <img className="h-full w-full object-cover" src={ BackgroundJumbotron } alt="Nuestra tienda para todo el publico" style={{alignSelf:'center'}} height={500} width={1000} />
                </p>
            </div>
        </div>

    )
    
  }

}

export default Jumbotron;