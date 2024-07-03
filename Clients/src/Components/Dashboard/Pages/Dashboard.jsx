import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import useRole from "../../../hooks/useRole";
import Heading from "../Components/Heading";

function Dashboard() {
  const {role}= useRole()
    
  return (
    <main>
  
      <div className="page-content">
        <Navbar />
      
        <div  className="page-content-wrapper p-xxl-4">
        {/*  {
           role ==="student" && <Heading title={"Welcome to Dashboard"} label={"create Note"} link={'add-notes'}/>
         } */}
          <Outlet/>
        </div>
       
      </div>
    </main>
  );
}

export default Dashboard;
