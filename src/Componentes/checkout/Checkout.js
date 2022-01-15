import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js'
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';
export default class Checkout extends React.Component {
    render() {
        return (
            <>
                <Menu />
                 <div>
                     <h1>♥</h1>
                     <img src={require('./metodos.jpg')}  />
                    <h1>Realice pagos a diferentes instalaciones y con mayor seguridad en sus compras</h1> 
                    <img src="https://www.paypalobjects.com/marketing/web/mx/logos-buttons/Paga-con-yellow_227x44.png" alt="Check out with PayPal" />

                 </div>
                <Footer />
            </>
        )
    }
}
