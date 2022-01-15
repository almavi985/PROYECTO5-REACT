import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from '../checkout/Checkout'
import Home from '../home/Home';
import Nosotros from '../nosotros/Nosotros';
import Servicios from '../servicios/Servicios';
import Contacto from '../contacto/Contacto';


const RoutesComponent=()=>(
    <Routes>
        <Route path="/" element={<inicio/>}/>
        <Route path="/home" element={<Inicio/>}/>
        <Route path="/nosotros" element={<Contactanos/>}/>
        <Route path="/servicios" element={<Productos/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
)

export default RoutesComponent;
