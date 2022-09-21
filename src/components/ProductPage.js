import React, { useEffect, useState } from 'react'
import Products from './Products'

function ProductPage() {

  const [productsList, setProductsList] = useState([]);

  useEffect(() => { 
    fetch("http://localhost:4000/products")
    .then((response) => response.json())
    .then((productsList) => { 
      // console.log(productsList);
      setProductsList(productsList);
     });
  }, []);
  return (
    <div>
      <Products productsList={productsList} />
    </div>
  )
}

export default ProductPage
