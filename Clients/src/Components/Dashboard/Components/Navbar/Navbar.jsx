import React, { useState } from 'react'
import useAuth from '../../../../hooks/useAuth';
import { NavLink, useNavigate } from 'react-router-dom';
import avatar from './../../../../assets/img/01-7N0KytgQ.jpg'
import SideBar from '../Sidebar/SideBar';
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';
import toast from 'react-hot-toast';
import logo from './../../../../assets/img/logob.png'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useRole from '../../../../hooks/useRole';
function Navbar() {
    const axiosSecure = useAxiosSecure()
    const {user, logOut} = useAuth()
    const {role} = useRole()
    const [show, setShow] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const navigate = useNavigate()
    

   const handleModal = async() =>{
    const currentUser = {
        email : user.email,
        role: "student",
        status : "requested"
    }
   const {data} = await axiosSecure.put('/user', currentUser)
   if(data.modifiedCount> 0){
    toast.success("success! Please wait for admin confirmation")
   }else{
     toast.success("success! Please wait for admin Aproval")
   }

   }


    const handleSignOut = () => {
        navigate('/login') 
       logOut((result)=> {
        navigate('/login') 
       // console.log(result);
       })
       
    }
  return (
    <>
     <nav  className="navbar top-bar navbar-light py-0 py-xl-3" id="sidebar-xl">
    <div  className="container-fluid p-0">
        <div  className="d-flex align-items-center w-100">
            <div  className="d-flex align-items-center d-xl-none"><a href="/"  className="navbar-brand"><img
                         className="light-mode-item navbar-brand-item h-40px"
                        src={logo} alt="logo"/><img
                         className="dark-mode-item navbar-brand-item h-40px"
                        src={logo} alt="logo"/> </a></div>
            <div  className="navbar-expand-xl sidebar-offcanvas-menu" ><button
                     className="navbar-toggler me-auto p-2 collapsed" type="button"
                    aria-controls="offcanvasSidebar" aria-expanded="false" onClick={() => setShowMenu(!showMenu)}><svg width="1em" height="1em"
                        viewBox="0 0 16 16" fill="currentColor" role="img" focusable="false"
                         className="text-primary fa-fw">
                        <path fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5">
                        </path>
                    </svg></button></div>
            <div  className="navbar-expand-lg ms-auto ms-xl-0"><button
                     className="navbar-toggler ms-auto p-0 collapsed" type="button"
                    aria-controls="navbarTopContent" aria-expanded="false"><svg width="1em" height="1em"
                        viewBox="0 0 16 16" fill="currentColor" role="img" focusable="false">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0">
                        </path>
                    </svg></button>
                <div id="navbarTopContent"  className="collapse navbar-collapse w-100 z-index-1" is-nav="false">
                    <div  className="nav my-3 my-xl-0 flex-nowrap align-items-center">
                        <div  className="nav-item w-100">
                            <form  className="position-relative"><input id="__BVID__193658___BV_input__"
                                     className="form-control bg-light pe-5" type="search" placeholder="Search"
                                    aria-label="Search"/><button
                                     className="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y"
                                    type="submit"><svg
                                         className="svg-inline--fa fa-magnifying-glass fs-6 text-primary"
                                        aria-hidden="true" focusable="false" data-prefix="fas"
                                        data-icon="magnifying-glass" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path  className="" fill="currentColor"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z">
                                        </path>
                                    </svg></button></form>
                        </div>
                    </div>
                </div>
            </div>
            <ul  className="nav flex-row align-items-center list-unstyled ms-xl-auto">
                <li  className="dropdown nav-item ms-3"><button
                         className="nav-notification lh-0 btn btn-light p-0 mb-0" id="bd-theme" type="button"
                        aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static"><svg
                            width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" role="img"
                            focusable="false"  className="fs-6">
                            <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"></path>
                        </svg></button>
                    <ul  className="dropdown-menu min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
                        <li  className="mb-1"><button type="button"
                                 className="dropdown-item d-flex align-items-center active"><svg width="1em"
                                    height="1em" viewBox="0 0 16 16" fill="currentColor" role="img"
                                    focusable="false">
                                    <path
                                        d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708">
                                    </path>
                                </svg> &nbsp;&nbsp; Light</button></li>
                        <li  className="mb-1"><button type="button"
                                 className="dropdown-item d-flex align-items-center"><svg width="1em"
                                    height="1em" viewBox="0 0 16 16" fill="currentColor" role="img"
                                    focusable="false">
                                    <path
                                        d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286">
                                    </path>
                                    <path
                                        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z">
                                    </path>
                                </svg> &nbsp;&nbsp; Dark</button></li>
                        <li  className=""><button type="button"
                                 className="dropdown-item d-flex align-items-center"><svg width="1em"
                                    height="1em" viewBox="0 0 16 16" fill="currentColor" role="img"
                                    focusable="false">
                                    <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"></path>
                                </svg> &nbsp;&nbsp; Auto</button></li>
                    </ul>
                </li>
             
                <li  className="dropdown nav-item ms-3"><a  className="nav-notification btn btn-light p-0 mb-0"
                        href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                        data-bs-auto-close="outside"><svg width="1em" height="1em" viewBox="0 0 16 16"
                            fill="currentColor" role="img" focusable="false"  className="fa-fw">
                            <path
                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6">
                            </path>
                        </svg></a><span  className="notif-badge animation-blink"></span>
                    <div
                         className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md shadow-lg p-0">
                        <div  className="card bg-transparent">   
                            <div  className="card-body p-0">  
                                <div
                                     className="card-header bg-transparent d-flex justify-content-between align-items-center border-bottom">
                                    <h6  className="m-0"> Notifications <span
                                             className="badge bg-danger bg-opacity-10 text-danger ms-2">4
                                            new</span></h6><a  className="small" href="#">Clear all</a>
                                </div>
                                <div  className="card-body p-0">  
                                    <ul  className="list-group list-group-flush list-unstyled p-2">
                                        <li><a href="#"
                                                 className="list-group-item list-group-item-action rounded border-0 mb-1 p-3 notif-unread">
                                                <h6  className="mb-2">New! Booking flights from New York ✈️</h6>
                                                <p  className="mb-0 small">Find the flexible ticket on flights
                                                    around the world. Start searching today</p><span>05 Feb
                                                    2024</span>
                                            </a></li>
                                        <li><a href="#"
                                                 className="list-group-item list-group-item-action rounded border-0 mb-1 p-3">
                                                <h6  className="mb-2">Sunshine saving are here 🌞 save 30% or
                                                    more on a stay</h6>
                                                <p  className="mb-0 small"></p><span>24 Aug 2024</span>
                                            </a></li>
                                    </ul>
                                </div>
                                <div  className="card-footer bg-transparent text-center border-top"><a href="#"
                                         className="btn btn-sm btn-link mb-0 p-0">See all incoming activity</a>
                                </div>
                            </div>  
                        </div>
                    </div>
                </li>
                {
                    user &&   <li  className="dropdown nav-item ms-3" onClick={() => setShow(!show)}><div  className="avatar avatar-sm p-0" role="button"
                    data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown"
                    aria-expanded="false"><img  className="avatar-img rounded-2"
                        src={user?.photoURL || avatar } alt="avatar"/></div>
                <ul  className={`dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3 ${show ? 'show' : ''}`}
                    aria-labelledby="profileDropdown">
                    <li  className="px-2 pb-2">
                        <div  className="d-flex align-items-center">
                            <div  className="avatar me-3"><img  className="avatar-img rounded-circle shadow"
                                    src={user?.photoURL || avatar } alt="avatar"/></div>
                            <div><a  className="h6 mt-2 mt-sm-0" href="#">{user?.displayName}</a>
                                <p  className="small m-0">{user?.email}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <hr  className="dropdown-divider"/>
                    </li>
                    <li><NavLink to="/"  className="dropdown-item"><svg width="1em"
                                height="1em" viewBox="0 0 16 16" fill="currentColor" role="img"
                                focusable="false"  className="fa-fw me-2">
                                <path fill-rule="evenodd"
                                    d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0">
                                </path>
                                <path
                                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z">
                                </path>
                            </svg> My Profile </NavLink></li>
                    <li><NavLink to="/wishlist"  className="dropdown-item"><svg width="1em"
                                height="1em" viewBox="0 0 16 16" fill="currentColor" role="img"
                                focusable="false"  className="fa-fw me-2">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15">
                                </path>
                            </svg> My Wishlist </NavLink></li>
                    <li><NavLink to="/"  className="dropdown-item"><svg width="1em"
                                height="1em" viewBox="0 0 16 16" fill="currentColor" role="img"
                                focusable="false"  className="fa-fw me-2">
                                <path
                                    d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0">
                                </path>
                                <path
                                    d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z">
                                </path>
                            </svg> Home Page </NavLink></li>
                    <li> <button className="dropdown-item" onClick={handleShow} disabled={role === "tutor" || role === "admin"}><svg width="1em"
                                height="1em" viewBox="0 0 16 16" fill="currentColor" role="img"
                                focusable="false"  className="fa-fw me-2">
                                <path
                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16">
                                </path>
                                <path
                                    d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0">
                                </path>
                            </svg> Become a Tutor </button></li>
                                {/* Modal */}

    <Modal show={showModal} onHide={handleClose} >
          <Modal.Header>
            <Modal.Title>Become a Tutor</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are You Sure ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {handleModal()
            handleClose()}}>
             Continue
            </Button>
          </Modal.Footer>
        </Modal>
                    <li><div   className="dropdown-item bg-danger-soft-hover cursor-pointer" onClick={handleSignOut}><svg
                                width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                                role="img" focusable="false"  className="fa-fw me-2">
                                <path d="M7.5 1v7h1V1z"></path>
                                <path
                                    d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812">
                                </path>
                            </svg> Sign Out </div></li>
                </ul>
            </li>
                }
              
            </ul>
        </div>
    </div>
    </nav>
        <SideBar showMenu= {showMenu}/>
    </>
   
  )
}

export default Navbar