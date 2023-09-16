import { useState,useEffect } from "react";
import { MENU_URL, menu } from "../config";



const useRestaurant =(resId)=>{

    const [restaurantMenu,setRestaurantMenu]=useState(null)
    

useEffect(()=>
{
 getRestaurantData();
},[])

async function getRestaurantData()
{
    const data=await fetch(MENU_URL + resId)
    const json=await data.json()
    console.log(json.data , "sab hao")
    setRestaurantMenu(menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[16]?.card?.card?.itemCards)
    console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[16]?.card?.card?.itemCards," MEnu")
}


return restaurantMenu
}



export default useRestaurant






