import React from "react";
import { NavLink } from "react-router-dom";

function MenuItem({label, link}) {
  return (
    <NavLink
      to={link}
      end
      aria-current="page"
      className="router-link-active router-link-exact-active nav-link"
    >
      {label}
    </NavLink>
  );
}

export default MenuItem;
