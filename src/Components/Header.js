import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
import useOnline from "../utils/useOnline"

const Logo=() =>
{ return(
    <a href="/">
    <img data-testid="logo" className="h-24 pl-5" alt="logo" src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg" />
    </a>

)
}


const Header=()=>{

    const[isLoggedIn,setIsLoggedIn]=useState(false)

      const {user}=useContext(UserContext)

      const cartItems=useSelector(store => store.cart.items)
      console.log(cartItems ,"things in cart")

      const isOnline=useOnline()

    return(
        <div className="flex justify-between bg-gray-50 shadow-lg">
            <Logo/>
            <div>
            <ul className="flex py-10"> 
               <li className="px-2"> <Link to="/">Home</Link></li>
               <li className="px-2"><Link to="/about">About Us</Link></li> 
               <li className="px-2"><Link to="/contact">Contact Us</Link></li> 
               <li className="px-2"><Link to="/instamart">Instamart</Link></li>
               
                <li className="px-2"><Link   to="/cart">Cart {<span data-testid="cart-items" className="bg-pink-100 font-medium p-1 rounded-md">{cartItems.length}</span>}</Link></li>
                
            </ul>
            </div>
            <span className="p-10 font-bold">{user.name}</span>
            <span data-testid="online-status" className="p-10 font-bold">{isOnline ? "Online" :"Offline"}</span>
            {
            isLoggedIn?(
            <button className="pr-7" onClick={()=> setIsLoggedIn(false)} >Log Out</button>
            ):(
            <button className="pr-10" onClick={()=> setIsLoggedIn(true)}>Log In</button>
            )
            }
            
        </div>
    )
}

export default Header