import React from 'react'
import { useHistory } from "react-router-dom"

function ProductCard(props) {
 const {product}=props

//  function handleViewClick() {
//   history.push("/item");

//  }

  return (
    <div>

      <h3>{product.title}</h3>
      <p>Brand: {product.brand}</p>
      <img src={product.thumbnail} alt="product-picture"/>
      <ul>
      <p>${product.price}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
      </ul>    
      {/* {product.images} */}      
      {/* {JSON.stringify(product)} */}
    </div>
  )
}
export default ProductCard
