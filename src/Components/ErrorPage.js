import React from 'react'
import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {
    
    const err=useRouteError()
  return (
   <>
   <h1>Page Not Exists!</h1>
   <h2>{err.status}:{err.statusText}</h2>
   </>
    
  )
}

export default ErrorPage