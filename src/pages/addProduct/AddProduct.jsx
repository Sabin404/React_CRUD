import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './../addProduct/addproduct.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddProduct = () => {
  const navigate=useNavigate();
  const [data,setData]=useState({
    name:'',
    description: '',
    image:'',
    price: '',
    catagory:''
  })
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setData({
      ...data,
      [name]:value
    })
  }

  const addProduct= async(e)=>{
    e.preventDefault();
    const response=await axios.post('https://6601a11c87c91a11641b49e3.mockapi.io//products',data)
    if(response.status===201){
      navigate("/");
    }else{
      alert("Error");
    }
  }
  console.log(data);
  return (
    <>
      <Navbar/>
      <div class="form-container">
        <h2>Add New Product</h2>
        <form onSubmit={addProduct} >
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="description">Description:</label>
                <textarea id="description" name="description" rows="4" required onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
                <label for="image">Image:</label>
                <input type="text" id="image" name="image" accept="image/*" required onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="image">Price:</label>
                <input type="number" id="price" name="price"  required onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="category">Category:</label>
                <input type='text' id='catagory' name='catagory' required onChange={handleChange}/>
                
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    </>
  )
}

export default AddProduct
