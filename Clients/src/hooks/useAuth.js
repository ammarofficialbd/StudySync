import { useContext } from "react";
import { AuthContext } from "../Porvider/AuthProviders";


const useAuth = () =>{
    const auth = useContext(AuthContext) // direct reuturn hoy na
    return auth
}

export default useAuth