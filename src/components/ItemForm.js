import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom"

function ItemForm({ setProductList }) {

  const initState = {
    id: " ",
    title: " ",
    description: " ",
    price: " ",
    discountPercentage: " ",
    rating: " ",
    stock: " ",
    brand: " ",
    category: " ",
    thumbnail: " ",
      images: []
    }
    const history = useHistory()
    const [formData, setFormData] = useState(initState);

    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
    }

    const handleSubmit = (event) => {
      // alert("You added a new Product");
      event.preventDefault()
      
        fetch("http://localhost:4000/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          setProductList((list) => [...list, data])
          history.push('/products')
      })
    // after page is submited, the following callback will reset the for to initial state.
      setFormData(initState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="id">ID: </label>
      <input name="id" value={formData.id} onChange={handleChange} />
      </div>

      <div>
      <label htmlFor="name">Title: </label>
      <input name="title" value={formData.title} onChange={handleChange} />
      </div>

      <div>
      <label htmlFor="description">Description: </label>
      <input name="description" value={formData.description}  onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="price">Price: </label>
        <input name="price" value={formData.price} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="discountPercentage">Discount Percentage: </label>
        <input name="discountPercentage" value={formData.discountPercentage} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="rating">Rating: </label>
        <input name="rating" value={formData.rating} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="stock">Stock: </label>
        <input name="stock" value={formData.stock} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="brand">Brand: </label>
        <input name="brand" value={formData.brand} onChange={handleChange} />
      </div>
    
      <div> 
        <label htmlFor="thumbnail">Thumbnail: </label>
        <input name="thumbnail" value={formData.thumbnail} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="images">Images: </label>
        <input name="images" value={formData.images} onChange={handleChange} />
      </div>
    <br />
      <button type="submit">Submit</button>
      
      {/* <img src="" alt="product-pictures"></img> */}
       </form>
  )
}

export default ItemForm;

