import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AllProducts() {
  const [data,setData]=useState([])
  const [render,setRender]=useState(false)


  const getData=async()=>{
    const res=await axios.get('http://localhost:3000/get-all')
    setData(res.data.data)
  }

  const handleDelete=async(id)=>{
    const res=await axios.delete('http://localhost:3000/delete/'+id)
    if(res.data){
      alert("Deleted")
      setRender(prev=>!prev)
    }
  }


  useEffect(()=>{

    getData()

  },[render])

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">All Products</h2>
  
    {data.length > 0 ? (
      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="border border-gray-300 rounded-lg p-4 flex justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <p className="text-lg font-medium text-gray-800">{item.name}</p>
              <p className="text-gray-600">Color: {item.color}</p>
              <p className="text-gray-600">Price: ${item.price}</p>
            </div>
            <button
              onClick={() => handleDelete(item._id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>  
    ) : (
      <p className="text-center text-gray-500 text-lg">No products available</p>
    )}
  </div>
  
  )
}

export default AllProducts;