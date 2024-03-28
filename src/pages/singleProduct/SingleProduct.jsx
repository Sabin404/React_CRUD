import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import { useNavigate, useParams,Link } from 'react-router-dom'
import './single.css'

const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const fetchProduct = async () => {
    const response = await axios.get('https://6601a11c87c91a11641b49e3.mockapi.io/products/' + id);

    if (response.status === 200) {
      setProduct(response.data);
    } else {
      alert("Wrong");
    }
  }

  const deleteProduct = async () => {
    const response = await axios.delete("https://6601a11c87c91a11641b49e3.mockapi.io/products/" + id)
    if (response.status === 200) {
      navigate("/")
    } else {
      alert("Something went wrong")
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [])



  return (
    <>
      <Navbar />
      <div class="product-container">
        <div class="product-image">
          <img src={product.image} alt="Product Image" />
        </div>
        <div class="product-details">
          <h2 class="product-name">{product.name}</h2>
          <p class="product-description">{product.Description}</p>
          <p class="product-price">${product.Price}</p>
          <button class="add-to-cart-btn" onClick={deleteProduct}>DELETE</button>
          <Link  className="add-to-cart-btn " to={`/editproduct/${id}`} >Edit</Link>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
