import React from 'react'
import { useDispatch } from 'react-redux'
import {removeItem} from "../utils/cartSlice"

const FoodItem=({name,description,price,id}) =>{

  const dispatch=useDispatch()
  
  const removeFromCart=(item_id)=>{
    dispatch( removeItem(item_id))
  }

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-gray-100 ">
            
    
        <h2 className="font-bold xl">{name}</h2>
        <h5 >{description}</h5>
        <p>Rs {Math.floor(price/100)}</p>  
        <button className='bg-green-300 rounded-md p-1 font-semibold float-right' onClick={()=>removeFromCart(id)}>Remove</button>
       
        </div>
       
  )
}

export default FoodItem