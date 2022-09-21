import '../App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Header from "./Header";
import NavBar from "./NavBar";
import Home from "./Home";
import Products from "./Products";
import Item from "./Item";
import Cart from "./Cart";
import ProductPage from './ProductPage';
import ItemForm from './ItemForm';
import Counter from './Counter';
// create a component Counter start at zero and it go by 1 automaticl
function App() {
  
    return (
    <Router>
        <NavBar />  
        <Counter />    
      <Switch>
          <Route exact path="/" > 
            <Home />
          </Route>
          <Route
            exact path="/products" 
              render={() => <ProductPage />} 
              />

          <Route exact path="/item"  
               render={() => <Item />} 
          />

          <Route  exact path="/newProduct"  >
              <ItemForm />
          </Route>
          
          <Route  exact path="/cart"  >
              <Cart />
          </Route>
           
        </Switch>
    </Router>
  );
};
export default App;
