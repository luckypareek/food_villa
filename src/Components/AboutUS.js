import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import Profile2 from "./ProfileClass"




const AboutUs=()=>
{
    return(
        <>
        <h1>Welcome!</h1>
        <h2> I am a Professional Developer!</h2>
        <Profile/>
         <Profile2 name={"Lucky"}/>
        </>
    )
}


export default AboutUs