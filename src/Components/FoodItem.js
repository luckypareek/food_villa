import React from 'react'

const FoodItem=({name,description,price}) =>{
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-gray-100 ">
            
    
        <h2 className="font-bold xl">{name}</h2>
        <h5 >{description}</h5>
        <p>Rs {Math.floor(price/100)}</p>
        </div>
       
  )
}

export default FoodItem