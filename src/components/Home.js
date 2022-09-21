import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  
 return (                                               
  // I will have three clicklable picture with the differents category of items
    <div>
      <div id="home">
        <h1 className='header-h1'>
        Order Express
        </h1>
      </div>
      <footer> 
        <Link to="/cart">
        <button>Order Now</button>
        </Link> 
      </footer>
    </div>
  );
}

export default Home;
