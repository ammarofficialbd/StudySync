import React from 'react'
import useRole from '../hooks/useRole'
import Loading from '../Components/Loading'
import { Navigate } from 'react-router-dom'

function AdminRoute({children}) {
    const {role, isLoading} = useRole()
   // if(isLoading) return <Loading/>
    if(role === "admin") return children
    return <Navigate to={'/dashboard'}/>
}

export default AdminRoute