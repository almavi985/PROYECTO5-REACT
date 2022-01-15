import React from 'react';

class Detalles extends React.Component {

  render() {

    return (

        <><div className="container" >
            <div className="row">
            <div className="col-md-2" />
                <div className="col-md-4" >
                    <h1>Nuestra marca</h1>
                    <h2>Comprometidos contigo ♥ </h2>
                </div>
                <div className="col-md-4">
                <img src={require('./logo.PNG')} width="250" height="250" />
                </div>
                <div  style={{textAlign: "center"}} >
                <h1 ></h1>
                <font face="Comic Sans MS,Arial,Verdana" size='10'>"Amor a tu amigo".</font>
                <img src={require('./gato.png')} width="250" height="250" />
                </div>
            </div>

        </div><hr /></>

       

    )
    
  }

}

export default Detalles;