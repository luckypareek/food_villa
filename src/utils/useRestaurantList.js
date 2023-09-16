import { useEffect, useState } from "react";


const useRestaurantList=()=>
{
    
   

    const [allRestaurants,setAllRestaurants]=useState([]);

    useEffect(()=>{
     getRestaurants()
    },[])

    
  async function getRestaurants()
  {
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.256406887335213&lng=72.98357181251049&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json()
      
      setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log(json?.data)
  }

  return allRestaurants

}

export default useRestaurantList