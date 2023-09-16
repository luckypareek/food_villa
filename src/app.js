
import React,{lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header"
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUS from "./Components/ContactUS";

import ErrorPage from "./Components/ErrorPage";
import RestaurantMenu  from "./Components/RestautantMenu";
import Profile from "./Components/Profile";
import Shimmer from "./Components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";


// Lazy loading 
const Instamart=lazy(()=> import("./Components/Instamart"))
const AboutUS=lazy(()=>import("./Components/AboutUS"))
const Cart=lazy(()=> import("./Components/Cart"))




const heading1=React.createElement("h1",{},"Namaste dosto");

const root=ReactDOM.createRoot(document.getElementById('root'));

console.log("HI")













const AppLayout= ()=>
{

  const[user,setUser]=useState({
    name:"Lucky",
    email:"xyz@gmail.com"
  })


    return(
        <>
        <Provider store={store}>
        <UserContext.Provider  
        value={{
            user:user,
            setUser:setUser
        }}
        >
        <Header/>
        <Outlet />
        <Footer/>
        </UserContext.Provider>
        </Provider> 
        </>
    )
}

const appRouter=createBrowserRouter([
    {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {   
            path:"/",
            element:<Body/>

        },
        {   
            path:"/contact",
            element:<ContactUS/>

        },
        {   
            path:"/about",
            element:<Suspense  fallback={<h1>Loading.........</h1>}   ><AboutUS/></Suspense>,
            children:[
                {
                    path:"profile",
                    element:<Profile/>
                }
            ]

        },
        {
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>
        },
        {
            path:"/instamart",
            element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
        },
        {
            path:"/cart",
            element: <Suspense fallback={<Shimmer/>}> <Cart/></Suspense> 
        }
      
    ],
},])


 
root.render(<RouterProvider router={appRouter}/>);
