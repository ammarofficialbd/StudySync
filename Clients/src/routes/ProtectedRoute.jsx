import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import useAuth from '../hooks/useAuth'
import Loading from '../Components/Loading'

function ProtectedRoute({children}) {
    const {user, loading} = useAuth()
    const location = useLocation()
  // const navigate = useNavigate()
   // console.log({loading, user})


    if(loading){
      return <div className='flex justify-center items-center'> <Loading/> </div>
    }
    
    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>

    }
   
  return children;
}

export default ProtectedRoute