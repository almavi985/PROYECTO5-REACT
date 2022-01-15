import React from 'react';

class Mapa extends React.Component {

  render() {

    return (

        <div className="mapa">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.895179268467!2d-98.88990848537051!3d19.503145036844284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e64355ef3c75%3A0x4fe8a3a6a2f388c4!2zVGV4Y29jbywgTcOpeC4!5e0!3m2!1ses-419!2smx!4v1639779997140!5m2!1ses-419!2smx" title="mi mapa" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy">Conocenos</iframe>
        </div>
    ) 
  }
}

export default Mapa;