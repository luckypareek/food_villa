import { useContext } from "react"
import { img_link } from "../config"
import UserContext from "../utils/UserContext"



const Card=(props)=>
{ 

    const {name,cloudinaryImageId,cuisines,avgRating}=props.restaurant.info

    const {user}=useContext(UserContext)
    
    return(
        <div className="w-56 p-2 m-2 shadow-lg bg-gray-100 ">
            
                <img className="h-56 w-[100%]" src={img_link+cloudinaryImageId}/>
                <h2 className="font-bold 2xl">{name}</h2>
                <h5>{cuisines.join(", ")}</h5>
                <p>{avgRating}</p>
                <span className="font-bold">{user.name} - {user.email}</span>
            

        </div>
    )

}

export default Card