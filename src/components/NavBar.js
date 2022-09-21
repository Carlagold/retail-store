import React from 'react';
import { NavLink } from "react-router-dom";
import ProductsList from './Products';

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div className="navBar">
      <NavLink  to="/" style={linkStyles}
         activeStyle={{
          background: "darkblue",
        }} >Home</NavLink>

      <NavLink  to="/products" style={linkStyles}
         activeStyle={{
          background: "darkblue",
        }} >Products</NavLink>

      <NavLink  to="/item" style={linkStyles}
         activeStyle={{
          background: "darkblue",
        }} >Item</NavLink>

        <NavLink  to="/newProduct" style={linkStyles}
         activeStyle={{
          background: "darkblue",
        }} >New Product</NavLink>
        
      <NavLink  to="/cart" style={linkStyles}
         activeStyle={{
          background: "darkblue",
        }} >Cart</NavLink>
      
    </div>
  )
}

export default NavBar;
