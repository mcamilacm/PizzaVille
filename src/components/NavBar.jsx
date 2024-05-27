import React from "react";

import { NavLink } from "react-router-dom";
import Logo from "../img/pizzaville.png";
import Car from "../img/cart.png";

const NavBar = () => {

    const setActiveClass = ({isActive = false}) => isActive? "active" : "inactive";
    return (

<nav>
<div className="nav_container">
        <NavLink to="/">
          <img src={Logo} alt="Logo" width="150px" />
        </NavLink>
        <div className="car_home">
        <div className="titles_nav">
          <NavLink to="/" className={setActiveClass}>
            HOME
          </NavLink>
    
        <NavLink to="/pizzas" className={setActiveClass}>
            PIZZAS
          </NavLink>
          </div>
        <NavLink className="link_cart" to="/cart">
          <img className="car_mobile" src={Car} alt="mail"  />
        </NavLink>
      </div>
      </div>


</nav>
    );
};

export default NavBar;
