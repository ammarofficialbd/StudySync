import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';
import App from './../Services/firebase.config'


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const gitProvider = new GithubAuthProvider()

//firebase auth
const auth = getAuth(App);

//console.log(auth)

function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //console.log(user);
    //console.log(loading,"auth");

/* Social Sign up */
    const createGitUser = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }
    const createGoogleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const createFbUser = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    /* Email or Password Sign up */

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
/* sign in by Firebase Auth*/
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        localStorage.removeItem('token')
        signOut(auth)
    }
    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
      }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

      // Get token from server and store local storage
  const storeToken = async email => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/jwt`,
      { email },
      { withCredentials: true }
    )
    localStorage.setItem("token", data);
  } 

    // save user
    const saveUser = async user => {
      //  console.log(user.displayName);
        const saveUser = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          role: 'student',
          status: 'verified',
        }
     //   console.log(saveUser);
        try{
            const { data } = await axios.put(
                `${import.meta.env.VITE_API_URL}/user`,
                saveUser
              )
              return data
        }catch(err){
            console.log(err.message);
        }
       
      
      }

    useEffect(() => {
        setLoading(true)
           const setLoginUser = onAuthStateChanged(auth, currentUser => {
           
            setUser(currentUser);
            
             if (currentUser) {
                storeToken(currentUser.email)
                saveUser(currentUser)
            } else {
               localStorage.removeItem('token')
            
            }  
            setLoading(false)

        })
        return () => {
            setLoginUser()
            setLoading(false)
        }
    }, [])

    const authInfo = {
        auth,
        user,
        loading,
        setLoading,
        createUser,
        createGitUser,
        createGoogleUser,
        createFbUser,
        logOut,
        resetPassword,
        signIn,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider