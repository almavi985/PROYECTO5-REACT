import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from '../Context/Usuario/UserContext'

function Rutaprivada({ children }) {
  const { user: token } = useContext(UserContext);

  return token ? children : <NavLink to="/cierre" />;
}

export { Rutaprivada };