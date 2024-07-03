import React from 'react'
import { NavLink } from 'react-router-dom'

function Heading({title, link, label}) {
  return (
  <div  className="row">
<div  className="col-12 mb-4 mb-sm-5">
  <div  className="d-sm-flex justify-content-between align-items-center">
    <h1  className="h3 mb-2 mb-sm-0">{title}</h1>
    <div  className="d-grid">
      <NavLink 
        aria-current="page"
        to={`/dashboard/${link}`}
         className="router-link-active router-link-exact-active btn btn-primary-soft mb-0 flex-centered gap-1"
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          role="img"
          focusable="false"
           className="fa-fw"
        >
          <path
            fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
          ></path>
        </svg>
         {label}
      </NavLink>
    </div>
  </div>
</div>
</div>
  )
}

export default Heading