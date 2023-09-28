import { useContext, useEffect, useState } from "react";
import { restaurantList } from "../config"
import Card from "./Card"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext";


const Body=()=>
{   
    
   
    const [searchText,setSearchText]=useState("");
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [allRestaurants,setAllRestaurants]=useState([]);

    useEffect(()=>{
     getRestaurants()
    },[])

    const {user,setUser}=useContext(UserContext)

    
  async function getRestaurants()
  {
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.256406887335213&lng=72.98357181251049&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json()
      
      setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log(json?.data)
  }



    const handleChange =(e)=>
    {
        setSearchText(e.target.value);
    }

    const isOnline=useOnline()


    //early return 
    if(!isOnline)
      {
        return(
            <h1>Oops! Please check your Internet Connection</h1>
        )
      }

 



    return (allRestaurants?.length===0)?<Shimmer/>:(
        <>
         
           
        
        <div className="py-5 my-5 bg-gray-50">
       <input className="mx-5 p-1"type="text"
        placeholder="Search your favourite restaurant"
        data-testid="search-input"
        value={searchText}
        onChange={(e)=> handleChange(e)}
        />
       
     

    <button 
    data-testid="search-btn"
    className=" rounded-md p-1 bg-blue-300  hover:bg-pink-50  font-medium"
    type="submit"
    onClick={()=> {
        const data= filterData(searchText,allRestaurants)
       // console.log("FIlter hokei aya ye " ,data)
        setFilteredRestaurants(data)
       // console.log(restaurants ,"agya ye " , searchText)
    }
    }
    
    >Search</button>

     <input className="mx-5 p-1"type="text"
        placeholder=""
        value={user.name}
        onChange={(e)=> setUser({
            ...user,
            name:e.target.value,
            
        })}

        
        
        />

      <input className="mx-5 p-1"type="text"
        placeholder=""
        value={user.email}
        onChange={(e)=> setUser({
            ...user,
            email:e.target.value,
            
        })}

        
        
        />

    </div>
            
        <div className="flex m-5 pl-5 flex-wrap " data-testid="res-list">


            
     
         {
            (filteredRestaurants?.length==0) ?<h1>No Restaurant Found!</h1>:
             
            filteredRestaurants?.map((restaurant)=>
            {
                return  <Link key={restaurant?.info?.id} to={"/restaurant/"+restaurant?.info?.id}><Card restaurant={restaurant} /></Link>
                
            })
         }
        
        </div>
        </>
    )
}


export default Body