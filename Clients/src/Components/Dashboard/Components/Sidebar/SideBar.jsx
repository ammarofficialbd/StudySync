import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useRole from "../../../../hooks/useRole";
import MenuItem from "../MenuItem";
import Loading from "../../../Loading";
import logo from './../../../../assets/img/logob.png'
import useAuth from "../../../../hooks/useAuth";

const studentMenu = [
  {
    label: "Create Notes",
    link: "/dashboard/add-notes",
  },
  {
    label: "View Booked Session",
    link: "/dashboard/booked-session",
  },
  {
    label: "View Notes",
    link: "/dashboard/view-notes",
  },
];
const tutorMenu = [
  {
    label: "Create Session",
    link: "/dashboard/add-session",
  },
  {
    label: "View Session",
    link: "/dashboard/view-session",
  },
  {
    label: "View Materials",
    link: "/dashboard/view-materials",
  },
];
const adminMenu = [
  {
    label: "View All Users",
    link: "/dashboard/all-users",
  },
  {
    label: "View All Session",
    link: "/dashboard/all-sessions",
  },
  {
    label: "View All Materials",
    link: "/dashboard/all-materials",
  },
];

function SideBar({ showMenu }) {
  const navigate = useNavigate()
  const {logOut} = useAuth()
  const { role, isLoading } = useRole();

  
  const handleSignOut = () => {
    navigate('/login') 
   logOut((result)=> {
    navigate('/login') 
    //console.log(result);
   })
   
}
  if(isLoading) return <Loading/>

  //console.log(role);
  // console.log(showMenu);
  return (
    <nav
      className={`navbar sidebar    ${
        showMenu ? "" : "navbar-expand-xl"
      } navbar-light`}
    >
      <div className="d-xl-flex  d-md-none">
        <NavLink to="/" className="navbar-brand">
          <img
            className="light-mode-item navbar-brand-item"
            src={logo}
            alt="logo"
          />
          <img
            className="dark-mode-item navbar-brand-item"
            src={logo}
            alt="logo"
          />
        </NavLink>
      </div>
      <div className="flex-row custom-scrollbar h-100" tabindex="0">
        <div className="sidebar-content d-flex flex-column pt-4">
         
          <ul className="navbar-nav flex-column" id="navbar-sidebar">
            <li className="nav-item">
              <Link
                to="/dashboard"
                end
                aria-current="page"
                className="router-link-active router-link-exact-active nav-link"
              >
                Dashboard
              </Link>
            </li>
            { role === "student" &&
                studentMenu.map((item) =>(
                    <li className="nav-item" key={item.link}>
                    <MenuItem label={item.label} link={item.link} />
                    </li>
                ))
             
            }
             { role === "tutor" &&
                tutorMenu.map((item) =>(
                    <li className="nav-item">
                    <MenuItem label={item.label} link={item.link} />
                    </li>
                ))
             
            }
             { role === "admin" &&
                adminMenu.map((item) =>(
                    <li className="nav-item">
                    <MenuItem label={item.label} link={item.link} />
                    </li>
                ))
             
            }
          </ul>

          <div className="d-flex align-items-center justify-content-between text-primary-hover mt-auto p-3">
            <div
              
              className="h6 fw-light mb-0 text-body"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Sign out"
              onClick={handleSignOut}
            >
              <svg
                className="svg-inline--fa fa-arrow-right-from-bracket"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-right-from-bracket"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  className=""
                  fill="currentColor"
                  d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
                ></path>
              </svg>{" "}
              Log out{" "}
            </div>
            <div href="/booking_v/admin/settings" className="h6 mb-0 text-body">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                role="img"
                focusable="false"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
