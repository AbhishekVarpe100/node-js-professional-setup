import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function AddProduct() {

    const [data,setData]=useState({name:"",color:"",price:""})
    const navigate=useNavigate()
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const res=await axios.post('http://localhost:3000/create-order',data)
        if(res.data){
            alert("Created")
            navigate('/')
        }
    }

  return (
    <div>

<form 
  onSubmit={handleSubmit} 
  className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4"
>
  <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Add Product</h2>

  <div>
    <label className="block text-gray-600 font-medium mb-1">Product Name</label>
    <input
      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      onChange={handleChange}
      type="text"
      name="name"
      placeholder="Enter product name"
    />
  </div>

  <div>
    <label className="block text-gray-600 font-medium mb-1">Color</label>
    <input
      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      onChange={handleChange}
      type="text"
      name="color"
      placeholder="Enter product color"
    />
  </div>

  <div>
    <label className="block text-gray-600 font-medium mb-1">Price</label>
    <input
      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      onChange={handleChange}
      type="text"
      name="price"
      placeholder="Enter product price"
    />
  </div>

  <button 
    type="submit" 
    className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
  >
    Add Product
  </button>
</form>



    </div>
  )
}

export default AddProduct;