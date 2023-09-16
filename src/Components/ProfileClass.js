import React from "react"
import UserContext from "../utils/UserContext";

class Profile extends React.Component
{

    constructor(props)
    {
        super(props);
        console.log("constrctor is called")
        this.state={
           userInfo:{
            name:"Dummy",
            bio:"I am dummy"
           }
        }
    }

    componentDidUpdate()
    {
      console.log("component did updated")
    }

   async componentDidMount()
    {
       const data=await fetch("https://api.github.com/users/luckypareek")
       const json=await data.json()
       console.log(json)
       this.setState({
        userInfo:json
       });

      // this.timer=setInterval(()=>{
      //      console.log("Timer is on")
      // },1000)
      //  console.log("component did mount is called")
    }
    
    componentWillUnmount()
    {
      // clearInterval(this.timer)
      // console.log("Component is unmounted.")
    }




    render()
    {
      console.log("render is called")
      return( 
        
        <div>
          <UserContext.Consumer>
            {({user})=><h1>{user.name} is my name!</h1>}
          </UserContext.Consumer>
            <h1>Hi Everyone </h1>
            <img src={this?.state?.userInfo?.avatar_url}/>
            <h3>Name :{this?.state?.userInfo?.name}</h3>
            <h4>Bio: {this?.state?.userInfo?.bio}</h4>
           
        </div>
      )
    }
}


export default Profile