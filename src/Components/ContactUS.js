import React from 'react'

const ContactUS = () => {
  return (
   <div className="border border-gray-200 rounded-md lg:w-[1000px]  md:w-[800px] sm:w-[500px] h-80  lg:mx-64 md:mx-32  sm:mx-4 my-20  bg-gray-50  shadow-2xl  md:flex  lg:flex  justify-between">
    
    <div className="lg:m-20 md:m-20">
      <img className="w-24 pl-4" src="https://toppng.com/uploads/preview/phone-icon-11549498584attf3ik674.png"/>
      <span className="font-bold text-lg">180-000-111</span>
    
    </div>
    <div className="lg:m-20 md:m-20" >
      <img className="w-32 pl-12" src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png"/>
      <span className="font-bold ">service@foodvilla.com</span>
    
    </div>
    <div className="lg:m-20 md:m-20"  >
      <img className="w-32 pl-12" src="https://cdn-icons-png.flaticon.com/512/4616/4616655.png"/>
      <span className="font-bold ">Instant chat support</span>
    
    
    </div>
   </div>
  )
}

export default ContactUS