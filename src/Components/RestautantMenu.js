import {useParams} from "react-router-dom"
import { MENU_URL, img_link } from "../config";
import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";



const RestaurantMenu=()=>
{
   const {resId}=useParams()
   const restaurantMenu=useRestaurantMenu(resId)
   const dispatch=useDispatch()
 

   const addFoodItem=(item)=>
   {  
      console.log( item, "in dispatch")
      dispatch(addItem(item))
      
   }

   return (!restaurantMenu)?<Shimmer/>  : (
        <div className="my-20 font-bold text-2xl ">
          MENU
         <div className=" border border-black">
            <ul data-testid="menu">
            {restaurantMenu.map((menu)=> <li key={menu.card.info.id} className="text-xl font-medium p-2 border border-gray-600"> {menu.card.info.name} - <button
           data-testid="addBtn"  className="p-2 bg-green-100 hover:bg-green-50 rounded-md" onClick={()=> addFoodItem(menu.card.info)}>Add</button> </li>)}
          </ul>
      
           </div>
        </div>
        
    )
}


export default RestaurantMenu