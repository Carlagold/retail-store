import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Item from "./Item";
import ProductCard from "./ProductCard";
import ProductPage from "./ProductPage";
import ItemForm from "./ItemForm";

function Products({ productsList }) {
const match = useRouteMatch();
console.log(match);

// const [id, title, images] = productsList
//    images.map((imgArr, index) => { 
//     return console.log({...imgArr, index}) 
//   });

  // const listOfProducts = productsList.map((product) => {
  //   return <Item { ...product } { ...listOfProducts } /> 
 
  // });

  // const [id, title, images] = productsList
  //  images.map((imgArr, index) => { 
  //   return console.log({...imgArr, index}) 
  // });

    // key={p.id}
    // product={p}
    // products={products}
                //  title={title}
    //             // description={p.description}
    //             // price={p.price}
    //             // brand={p.brand}
    //             // category={p.category}
    //             // images={p.images}
    // onViewClick={handleViewClick}
return (
  <div>
    <h1>Top Deals</h1>
    {/* {JSON.stringify(productsList)} */}
    <ul>
      {productsList.map(product => ( 
          <li key={product.id}><ProductCard product={product} /></li>
          
      ))}
      </ul>
    <Route path={`${match.url}/:productsListID`} >
      <Item  />
    </Route>
  </div>
  )
}
export default Products;
