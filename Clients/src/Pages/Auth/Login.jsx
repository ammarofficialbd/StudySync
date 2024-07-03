import React, { useState } from 'react'
import img from "./../../assets/img/signin-CCgA2CDV.svg"
import useAuth from '../../hooks/useAuth';
import logo from './../../assets/img/logob.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';
function Login() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const { signIn, createGoogleUser,createGitUser, setLoading, resetPassword} = useAuth()

    const handleSocialLogin = async (socialProvider) => {
       
          const result = await socialProvider();
          console.log(result);
          navigate('/');
      
      }
    
      const handleLoginSubmit = async(e) => {
        e.preventDefault();
        const form = e.target
         const email = form.email.value
         const password = form.password.value

       // console.log(email);
       try {
        setLoading(true)
        // 1. sign in user
        await signIn(email, password)
        navigate(location?.state ? location.state : '/')
        toast.success('Login Successful')
      } catch (err) {
        console.log(err)
        if (err.code === "auth/invalid-credential") {
            toast.warn("Email Or Pasword Doesn't Match")
          }
        toast.error(err.message)
        setLoading(false)
      }
        
    
      };
      const handleResetPassword = async () => {
        console.log(email);
        if (!email) return toast.error('Please write your email first!')
        try {
          await resetPassword(email)
          toast.success('Request Success! Check your email for further process...')
          setLoading(false)
        } catch (err) {
          console.log(err)
          toast.error(err.message)
          setLoading(false)
        }
       // console.log(email)
      }
  return ( 
    <div className='container '>
        <div className="row justify-content-center align-items-center m-auto">
        <div className="col-12">
            <div className="d-flex-lg shadow bg-mode rounded-3 overflow-hidden">
           
                    <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                        <div className="p-3 p-lg-5"><img src={img} alt=""/></div>
                        <div className="vr opacity-1 d-none d-lg-block"/></div>
              
                    <div className="col-lg-6 order-1">
                        <div className="p-4 p-sm-7"><NavLink href="/" className=""><img className="h-50px mb-4"
                                    src={logo}
                                    alt="logo"/></NavLink>
                            <h1 className="mb-2 h3">Welcome back</h1>
                            <p className="mb-0"> New here? <a href="/signup" className=""> Create an account</a></p>
                            <form className="mt-4 text-start" onSubmit={handleLoginSubmit}>  
                                <div className="mb-3">
                                    <fieldset className="" id="__BVID__745902___BV___">
                                        <legend id="__BVID__118706___BV__BV_label___" tabindex="-1"
                                            className="form-label bv-no-focus-ring col-form-label pt-0">Enter email</legend>
                                        <div className=""><input id="__BVID__077948___BV_input__" className="form-control"
                                                name="email" type="email"    onBlur={e => setEmail(e.target.value)}/>      </div>
                                    </fieldset>
                                </div>
                                <div className="mb-3">
                                    <div className="position-relative" name="password" autocomplete=""><label
                                            className="form-label" for="form-password">Enter password</label><input
                                            className="form-control" type="text" id="form-password" placeholder=""
                                            name="password" autocomplete=""/><span
                                            className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3"><svg
                                                className="svg-inline--fa fa-eye cursor-pointer pe-2 mt-1"
                                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye"
                                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path className="" fill="currentColor"
                                                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z">
                                                </path>
                                            </svg></span></div>
                                </div>
                                <div className="mb-3 d-sm-flex justify-content-between">
                                    <div>
                                        <div className="form-check"><input id="__BVID__552329___BV_form-check__"
                                                className="form-check-input" type="checkbox" true-value="true"
                                                false-value="false" value="true"/><label
                                                for="__BVID__552329___BV_form-check__" className="form-check-label">Remember
                                                me?</label></div>
                                    </div> 
                                </div>
                                <div><button className="btn btn-md btn-primary w-100 mb-0" type="submit">Login</button>
                                </div>
                            </form> 
                             <div className='d-flex justify-content-end'> <div  className="mt-2 cursor-pointer" onClick={handleResetPassword}>Forgot password?</div>
                             </div>   
                            
                                <div className="position-relative my-4">
                                    <hr/>
                                    <p className="small bg-mode position-absolute top-50 start-50 translate-middle px-2"> Or
                                        sign in with </p>
                                </div>
                                <div className="vstack gap-3"><div className="btn btn-light mb-0" onClick={() => handleSocialLogin(createGoogleUser)}><svg
                                            className="ov-icon fa-fw text-google-icon me-1" aria-hidden="true" width="19.2"
                                            height="19.2" viewBox="0 0 48 48" fill="currentColor"
                                            style={{fontSize: '1.2em'}}>
                                            <path fill="#FFC107"
                                                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z">
                                            </path>
                                            <path fill="#FF3D00"
                                                d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z">
                                            </path>
                                            <path fill="#4CAF50"
                                                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z">
                                            </path>
                                            <path fill="#1976D2"
                                                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z">
                                            </path>
                                        </svg> Sign in with Google </div>
                                        <div  className="btn btn-light mb-0" onClick={() => handleSocialLogin(createGitUser)}> <FaGithub/> Sign in with Github </div></div>
                                <div className="text-primary-hover text-body mt-3 text-center"> Copyrights ©2024 Booking.
                                    Build by <a href="" className="text-body">rareTechIt</a>.
                                </div>
                           
                           
                        </div>
                    </div>
            </div>
        </div>
        </div>
    </div>
  
  )
}

export default Login