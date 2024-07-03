
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'

function useRole() {
    const {user, loading} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: role = '', isLoading} = useQuery({
        queryKey: ["role"],
        enabled: !loading && !!user?.email,
        queryFn : async()=>{
            const {data} = await axiosSecure.get(`user/${user?.email}`)
            return data.role
        }
       
    })
  return {role, isLoading}
}

export default useRole

/* user.email = email@.com
!!user.email = true 
*/