import React, { useEffect, useContext } from 'react';
import { UserContext } from '../Context/Usuario/UserContext'
import { NavLink } from "react-router-dom";

const Cierre = () => {
  const { clearToken } = useContext(UserContext);
  useEffect(() => {
    clearToken();
  }, []);

  return (
    
    <NavLink to='/home' />
  )
}

export default Cierre