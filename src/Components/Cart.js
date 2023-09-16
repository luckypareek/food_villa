import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FoodItem"
import {clearCart} from "../utils/cartSlice"



const Cart=({name,description,price,category})=>
{

    const cartItems=useSelector(store=> store.cart.items)
    console.log(cartItems,"from cart oage")

    const dispatch=useDispatch()
   const clearCartItems=()=>
   {
    dispatch(clearCart())
   }

    return(
        <>
        <button className="p-2 m-5 bg-green-100" onClick={()=>clearCartItems()}>Clear cart</button>
     <div className="flex">
       { cartItems.map((cartItem) => <FoodItem tem {...cartItem}/>)}
     </div>
</>

    )
}



export default Cart