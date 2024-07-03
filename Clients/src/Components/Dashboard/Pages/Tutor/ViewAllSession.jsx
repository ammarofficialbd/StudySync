import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

import RejectedSession from "./RejectedSession";

function ViewAllSession() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  
  const { data, isLoading , refetch} = useQuery({
    queryKey: ["sessions" , user?.email, currentPage],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/session-list/${user?.email}?page=${currentPage}&size=${itemsPerPage}`
      );
      return data;
    },
  });

   console.log(data);

  useEffect(() => {
    setLoading(true);

    getCount();
  }, []);

  async function getCount() {
    try {
      const response = await axiosSecure.get(`/session-all-list/${user?.email}`);
      const data = response.data;
      // console.log(data);
      setCount(data.length);
      /*  if (response.status === 200) {
      } else {
        console.error('Failed to fetch data');
      } */
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  const numOfPages = Math.ceil(count / itemsPerPage);
  //console.log(currentPage);
  const pages = [...Array(numOfPages).keys()].map((el) => el + 1);

  function handlePaginationButton(value) {
    setLoading(true);
    setCurrentPage(value);
    refetch();
    setLoading(false);
  }

  return (
    <>
      <Heading title="Session List" link="add-session" label={"Add Session"} />
      <div className="card shadow mt-5">
        <div className="card-body">
          <div className="bg-light rounded p-3 d-none d-lg-block">
            <div className="row row-cols-7 g-4">
              <div className="col">
                <h6 className="mb-0">Title</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">Tutor Name</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">Class Start:</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">Class End:</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">Fees</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">Status</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">Action</h6>
              </div>
            </div>
          </div>
          {data && data?.map((item) => <Table item={item} />)}
        </div>

        <div className="card-footer pt-0">
          <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
            <p className="mb-sm-0 text-center text-sm-start">
              Showing 1 to {pages.length} of {count} entries
            </p>
            <nav
              className="mb-sm-0 d-flex justify-content-center"
              aria-label="navigation"
            >
              <ul className="pagination pagination-sm pagination-primary-soft mb-0">
                <li className="page-item disabled">
                  <button
                 
                    className="router-link-active router-link-exact-active page-link"
                    tabindex="-1"
                    disabled={currentPage === 1}
                    onClick={() => handlePaginationButton(currentPage - 1)}
                  >
                    Prev
                  </button>
                </li>

                {pages &&
                  pages.map((el) => (
                    <li className="page-item active">
                      <button
                   
                        className={`${currentPage === el ? "page-link" : ""} `}
                        onClick={() => handlePaginationButton(el)}
                        key={el}
                      >
                         
                        {el} 
                      </button>
                    </li>
                  ))}

                <li className="page-item">
                  <button
                 
                    className="router-link-active router-link-exact-active page-link"
                    disabled={currentPage === numOfPages}
                    onClick={() => handlePaginationButton(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {<RejectedSession loading={isLoading} refetch={refetch}/>}
    </>
  );
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

const Table = ({ item }) => {
  const {
    _id,
    tutor,
    registrationStartDate,
    classStartDate,
    classEndDate,
    sessionTitle,
    registrationFee,
    status,
  } = item;
  return (
    <div className="card-body">
      <div className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
        <div className="col">
          <small className="d-block d-lg-none">Title:</small>
          <div className="d-flex align-items-center">
            {/*         <div className="avatar avatar-xs flex-shrink-0"><img className="avatar-img rounded-circle"
                                src="/booking_v/assets/09-1AM4Ze_z.jpg" alt="avatar"/></div> */}
            <div className="ms-2">
              <h6 className="mb-0 fw-ligh">{sessionTitle}</h6>
            </div>
          </div>
        </div>
        <div className="col">
          <small className="d-block d-lg-none">Tutor Name:</small>
          <h6 className="mb-0 fw-normal">{tutor.name}</h6>
        </div>
        <div className="col">
          <small className="d-block d-lg-none">Class Start:</small>
          <h6 className="mb-0 fw-normal">
             
            {new Date(classStartDate).toLocaleDateString()}
          </h6>
        </div>
        <div className="col">
          <small className="d-block d-lg-none">Class End:</small>
          <h6 className="mb-0 fw-normal">
             
            {new Date(classEndDate).toLocaleDateString()}
          </h6>
        </div>
        <div className="col">
          <small className="d-block d-lg-none">Fees:</small>
          <h6 className="mb-0 fw-normal">{registrationFee}</h6>
        </div>
        <div className="col">
          <small className="d-block d-lg-none">Status:</small>
          <div
            className={`badge bg-opacity-20  ${
              status === "pending"
                ? "bg-warning text-danger"
                : "bg-success text-white"
            }`}
          >
             
            {status}
          </div>
        </div>
        <div className="col d-flex flex-column gap-2">
        <small className="d-block d-lg-none">Action:</small>
            {
                status === "approved" ? (<>  <a href={`/session/${_id}`} className="btn btn-sm btn-light mb-0">
                 
                View 
              </a>
              <a
                href={`/dashboard/upload-materials/${_id}`}
                className="btn btn-sm btn-light mb-0"
              >
                 
                Upload 
              </a>
              </>) : (<a href={`/session/${_id}`} className="btn btn-sm btn-light mb-0">
                 
                View 
              </a>)
            }
        
         
          {/*  <NavLink href={`dashboard/upload-materials/${_id}`} className="btn btn-sm btn-light mb-0"> Upload </NavLink> */}
        </div>
      </div>
    </div>
  );
};
export default ViewAllSession;
