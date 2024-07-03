

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router-dom'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import useAuth from '../../../../hooks/useAuth'
import Heading from '../../Components/Heading'

function ViewBooked() {
 const axiosSecure = useAxiosSecure()
 const {user} = useAuth()

const {data, isLoading} = useQuery({
  queryKey: ['booked-session' , user?.email],
  queryFn: async()=>{
      const {data} = await axiosSecure.get(`/booked-sessions/${user?.email}`)
      return data
  }
})

 // console.log(data);
    
  return (
    <>
       <Heading title="Session List" link="add-session" label={"Add Session"}/>
       <div className="card shadow mt-5">
       <div className="card-body">
       <div className="bg-light rounded p-2 d-none d-lg-block">
                <div className="row row-cols-7 g-4">
                    <div className="col">
                        <h6 className="mb-0">Title</h6>
                    </div>
                    <div className="col">
                        <h6 className="mb-0">Tutor Email</h6>
                    </div>
                  {/*   <div className="col">
                        <h6 className="mb-0">Class Start:</h6>
                    </div>
                    <div className="col">
                        <h6 className="mb-0">Class End:</h6>
                    </div> */}
                    <div className="col">
                        <h6 className="mb-0">payment</h6>
                    </div>
                
                    <div className="col">
                        <h6 className="mb-0">Action</h6>
                    </div>
                </div>
            </div>
        {data && data?.map((item)=>(
          <Table item={item}/>
        ))}
      </div>
        <div className="card-footer pt-0">
            <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                <p className="mb-sm-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                <nav className="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
                    <ul className="pagination pagination-sm pagination-primary-soft mb-0">
                        <li className="page-item disabled"><a aria-current="page" href="/booking_v/admin/guests/list#"
                                className="router-link-active router-link-exact-active page-link" tabindex="-1">Prev</a>
                        </li>
                        <li className="page-item"><a aria-current="page" href="/booking_v/admin/guests/list#"
                                className="router-link-active router-link-exact-active page-link">1</a></li>
                        <li className="page-item active"><a aria-current="page" href="/booking_v/admin/guests/list#"
                                className="router-link-active router-link-exact-active page-link">2</a></li>
                        <li className="page-item disabled"><a aria-current="page" href="/booking_v/admin/guests/list#"
                                className="router-link-active router-link-exact-active page-link">..</a></li>
                        <li className="page-item"><a aria-current="page" href="/booking_v/admin/guests/list#"
                                className="router-link-active router-link-exact-active page-link">15</a></li>
                        <li className="page-item"><a aria-current="page" href="/booking_v/admin/guests/list#"
                                className="router-link-active router-link-exact-active page-link">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
       </div>
    </>
  )
}

/* const renderStatus = () => {
  switch (status) {
      case 'Pending':
          return <div className="badge bg-warning bg-opacity-10 text-warning"> Pending </div>;
      case 'Booked':
          return <div className="badge bg-success bg-opacity-10 text-success"> Booked </div>;
      case 'Rejected':
          return <div className="badge bg-danger bg-opacity-10 text-danger"> Rejected </div>;
      default:
          return <div className="badge bg-secondary bg-opacity-10 text-secondary"> Unknown </div>;
  } */

  const Table = ({item}) =>{

    
    const { sessionId, tutorEmail, totalFee, title} = item;
return(
<div className="card-body">
           
            <div className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 py-2">
                <div className="col"><small className="d-block d-lg-none">Title:</small>
                    <div className="d-flex align-items-center">
                {/*         <div className="avatar avatar-xs flex-shrink-0"><img className="avatar-img rounded-circle"
                                src="/booking_v/assets/09-1AM4Ze_z.jpg" alt="avatar"/></div> */}
                        <div className="ms-2">
                            <h6 className="mb-0 fw-ligh">{title}</h6>
                        </div>
                    </div>
                </div>
                <div className="col"><small className="d-block d-lg-none">Tutor Email:</small>
                    <h6 className="mb-0 fw-normal">{tutorEmail}</h6>
                </div>
               {/*  <div className="col"><small className="d-block d-lg-none">Class Start:</small>
                    <h6 className="mb-0 fw-normal"> {new Date(classStartDate).toLocaleDateString()}</h6>
                </div>
                <div className="col"><small className="d-block d-lg-none">Class End:</small>
                    <h6 className="mb-0 fw-normal"> {new Date(classEndDate).toLocaleDateString()}</h6>
                </div> */}
                <div className="col"><small className="d-block d-lg-none">Pay:</small>
                    <h6 className="mb-0 fw-normal">{totalFee}</h6>
                </div>
            {/*     <div className="col"><small className="d-block d-lg-none">Status:</small>
                    <div className="badge bg-success bg-opacity-10 text-success"> {status}</div>
                </div> */}
                <div className="col d-flex flex-column gap-2">
                  <small className="d-block d-lg-none">Action:</small>
                  <NavLink to={`/dashboard/view-session/${sessionId}`} className="btn btn-sm btn-light mb-0"> View </NavLink>
                </div>
            </div>
            
        </div>
)
  }
export default ViewBooked