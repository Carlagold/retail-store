import React from 'react'

function Cart() {
  return (
      <form>
        <h1>Checkout</h1>
        <h3>Cart status</h3>
            <textarea id="" name="w3r" rows="4" cols="50"></textarea>
            <br/>
            <br />
        <h3>User Account Login</h3>
        <div>
          <input type="text" name="username" placeholder=" Username " />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
  
  export default Cart;
 
