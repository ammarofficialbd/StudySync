import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import cover from "./../../../../assets/img/ban.jpg";
import { NavLink } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import Head from "../../../Head";
import Loading from "../../../Loading";
import { Modal, Button } from "react-bootstrap";
import { cutWords } from "../../../../utils";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TbFidgetSpinner } from "react-icons/tb";
import toast from "react-hot-toast";
import { ImSpinner9 } from 'react-icons/im'

function ViewAllStudySession() {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const {
    data: sessions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['approve-sessions', currentPage, itemsPerPage],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/pending-sessions?page=${currentPage}&size=${itemsPerPage}`
      );
      return data;
    },
 
  });

  const fetchApproveSession = async() =>{
     const{data} = await axiosSecure.get(`/apporve-sessions`)
     return data
  }

  const {data: items=[], refetch: reGet} = useQuery({
    queryKey: ['approve-session'],
    queryFn: fetchApproveSession
  })
 
  
//console.log(count);
  useEffect(() => {
    setLoading(true);

    getCount();
  }, []);

  async function getCount() {
    try {
      const response = await axiosSecure.get("/pending-sessions");
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

  function handlePaginationButton(value) {
    setLoading(true);
    setCurrentPage(value);
    setLoading(false)
  }

  const numOfPages = Math.ceil(count / itemsPerPage);
  //console.log(currentPage);
  const pages = [...Array(numOfPages).keys()].map((el) => el + 1);
  // console.log(pages);

  if (isLoading || loading) return <Loading />;
  return (
    <div>
      <Heading title={"All Study Session (Pending)"} />
      <div>
        {sessions && sessions?.length > 0 ? (
          <div className="row g-4">
            {sessions?.map((session) => (
              <Card key={session._id} session={session} refetch={refetch}/>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
            <Head title="No Session Available At this Time" />
          </div>
        )}

        <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
          <p className="mb-sm-0 text-center text-sm-start">
            Showing 1 to {pages.length} of {sessions.length} entries
          </p>
          <nav
            className="mb-sm-0 d-flex justify-content-center"
            aria-label="navigation"
          >
            <ul className="pagination pagination-sm pagination-primary-soft mb-0">
              <li className="page-item">
                <button className="router-link-active router-link-exact-active page-link"  disabled={currentPage === 1}
         onClick={() => handlePaginationButton(currentPage - 1)}>
                  Prev
                </button>
              </li>

              {pages &&
                pages.map((el) => (
                  <li className="page-item">
                    <button
                      onClick={() => handlePaginationButton(el)}
                      key={el}
                      className={` ${currentPage === el ? "bg-primary text-white" : ""} page-link`}
                    >
                      {el}
                    </button>
                  </li>
                ))}

              <li className="page-item">
                <button className="router-link-active router-link-exact-active page-link"  disabled={currentPage === numOfPages}
         onClick={() => handlePaginationButton(currentPage + 1)}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Heading title={"All Study Session (Approved)"} />
      <div className="row g-4">
        {items && items?.length > 0 ? (
          <div className="row g-4">
            {items?.map((item) => (
                <CardApproved item={item} key={item._id} reGet={reGet}/>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
            <Head title="No Session Available At this Time" />
          </div>
        )}
     
      </div>
    </div>
  );
}

export default ViewAllStudySession;

function Card({ session, refetch }) {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleRejectClose = () => setShowRejectModal(false);

  const handleShow = () => setShow(true);
  const handleShowReject = () => setShowRejectModal(true);

  const [loading, setLoading] = useState(false);
  const { _id, sessionTitle, sessionDescription, registrationFee, status } =
    session;
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (sessionData) => {
      const { data } = await axiosSecure.patch(
        `/session/update/${_id}`,
        sessionData
      );
      return data;
    },
    onSuccess: () => {
      console.log("Data Saved Successfully");
      toast.success("Session Update Successfully!");
      refetch()
      setLoading(false);
    },
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const registrationFee = form.fees.value;
    const status = "approved";

    try {
      const materials = {
        registrationFee,
        status,
      };
     //console.table(materials);

      //   Post request to server
      await mutateAsync(materials);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  const handleRejectFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const rejection = form.reason.value;
    const feedBack= form.feedback.value;


    const status = "rejected";

    const rejectionReason = {
      reason : rejection,
      feedback: feedBack
    }

    const data = {
      status,
      rejectionReason
    }
    //console.table(data);
   
    try {
      //   Post request to server
    await mutateAsync(data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
   
  };
  //console.log(isRegistrationOngoing);
  return (
    <div className="col-sm-6 col-md-4 col-xl-3 col-lg-3">
      <div className="card card-img-scale overflow-hidden bg-transparent">
        <div className="card-img-scale-wrapper rounded-3">
          <img src={cover} className="card-img" alt="session image" />
          <div className="position-absolute bottom-0 start-0 p-3">
            <div className="badge text-bg-warning fs-7 rounded-pill stretched-link d-flex">
              {status}
            </div>
          </div>
        </div>
        <div className="card-body px-2">
          <h5 className="card-title">
            <NavLink to={`/session/${_id}`} className="fs-6">
              {cutWords(sessionTitle, 2)}
            </NavLink>
          </h5>
          <p className="card-text fs-7">
            {cutWords(sessionDescription, 7)}...read more
          </p>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="text-success mb-0">$ {registrationFee} </h6>
            <h6 className="mb-0 d-flex">
              4.5
              <svg
                className="svg-inline--fa fa-star text-warning ms-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
              </svg>
            </h6>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-warning cursor-pointer fs-7 "
              onClick={handleShow}
            >
              approve
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Update Status</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Tabs>
                  <TabList>
                    <Tab>Free</Tab>
                    <Tab>Paid</Tab>
                  </TabList>

                  <TabPanel>
                    <form onSubmit={handleFormSubmit}>
                      <div className="content">
                        <div className="">
                          <div className="card shadow">
                            <div className="card-header border-bottom">
                              <h5 className="mb-0">Upload Fees</h5>
                            </div>
                            <div className="card-body">
                              <div className="row g-4">
                                <div className="col-12">
                                  Regestration Fees Stataus : Free
                                </div>

                                <div className="col-12">
                                  <fieldset className="form-label bv-no-focus-ring col-form-label pt-0">
                                    <legend className="form-label bv-no-focus-ring col-form-label pt-0">
                                      Regestration Fees
                                    </legend>
                                    <div className="">
                                      <input
                                        className="form-control"
                                        placeholder="Enter Fees"
                                        wrap="soft"
                                        name="fees"
                                      />
                                    </div>
                                  </fieldset>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-2">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleClose}
                        >
                          {loading ? (
                            <TbFidgetSpinner className="animate-spin m-auto" />
                          ) : (
                            " Save & Continue"
                          )}
                        </button>
                      </div>
                    </form>
                  </TabPanel>
                  <TabPanel>
                    <form onSubmit={handleFormSubmit}>
                      <div className="content">
                        <div className="">
                          <div className="card shadow">
                            <div className="card-header border-bottom">
                              <h5 className="mb-0">Upload Fees</h5>
                            </div>
                            <div className="card-body">
                              <div className="row g-4">
                                <div className="col-12">
                                  Regestration Fees Stataus : Paid
                                </div>

                                <div className="col-12">
                                  <fieldset className="form-label bv-no-focus-ring col-form-label pt-0">
                                    <legend className="form-label bv-no-focus-ring col-form-label pt-0">
                                      Regestration Fees
                                    </legend>
                                    <div className="">
                                      <input
                                        className="form-control"
                                        placeholder="Enter Fees"
                                        wrap="soft"
                                        name="fees"
                                      />
                                    </div>
                                  </fieldset>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-2">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleClose}
                        >
                          {loading ? (
                            <TbFidgetSpinner className="animate-spin m-auto" />
                          ) : (
                            " Save & Continue"
                          )}
                        </button>
                      </div>
                    </form>
                  </TabPanel>
                </Tabs>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <butoon
              className="btn btn-primary cursor-pointer fs-7"
              onClick={handleShowReject}
            >
              Reject
            </butoon>
            <Modal show={showRejectModal} onHide={handleRejectClose}>
              <Modal.Header>
                <Modal.Title>Update Status</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                
                    <form onSubmit={handleRejectFormSubmit}>
                      <div className="content">
                        <div className="">
                          <div className="card shadow">
                            <div className="card-header border-bottom">
                              <h5 className="mb-0">Update Reason For Reject</h5>
                            </div>
                            <div className="card-body">
                              <div className="row g-4">
                              

                                <div className="col-12">
                                  <fieldset className="form-label bv-no-focus-ring col-form-label pt-0">
                                    <legend className="form-label bv-no-focus-ring col-form-label pt-0">
                                      Reason
                                    </legend>
                                    <div className="">
                                      <input
                                        className="form-control"
                                        placeholder="Enter Reason"
                                        wrap="soft"
                                        name="reason" 
                                        type="text"
                                      />
                                    </div>
                                  </fieldset>
                                </div>
                                <div className="col-12">
                                  <fieldset className="form-label bv-no-focus-ring col-form-label pt-0">
                                    <legend className="form-label bv-no-focus-ring col-form-label pt-0">
                                     Feedback
                                    </legend>
                                    <div className="">
                                      <input
                                        className="form-control"
                                        placeholder="Enter Feedback"
                                        wrap="soft"
                                        name="feedback" 
                                        type="text"
                                      />
                                    </div>
                                  </fieldset>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-2">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleClose}
                        >
                          {loading ? (
                            <TbFidgetSpinner className="animate-spin m-auto" />
                          ) : (
                            " Save & Continue"
                          )}
                        </button>
                      </div>
                    </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleRejectClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}


function CardApproved({ item , reGet}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const { _id, sessionTitle, sessionDescription, registrationFee, status } =
   item;
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(
        `/session/${id}`,

      );
      return data;
    },
    onSuccess: () => {
      toast.success("Session Delete Successfully!");
      reGet()
      setLoading(false);
    },
  });



  const handleDelete = async(id) =>{
    setLoading(true)
    try{
      await mutateAsync(id)
    
    }catch(err) {
      toast.error('Error Deleteing')
    }
    
    }
  
  return (
    <div className="col-sm-6 col-md-4 col-xl-3 col-lg-3">
      <div className="card card-img-scale overflow-hidden bg-transparent">
        <div className="card-img-scale-wrapper rounded-3">
          <img src={cover} className="card-img" alt="session image" />
          <div className="position-absolute bottom-0 start-0 p-3">
            <div className="badge text-bg-warning fs-7 rounded-pill stretched-link d-flex">
              {status}
            </div>
          </div>
        </div>
        <div className="card-body px-2">
          <h5 className="card-title">
            <NavLink to={`/session/${_id}`} className="fs-6">
              {cutWords(sessionTitle, 2)}
            </NavLink>
          </h5>
          <p className="card-text fs-7">
            {cutWords(sessionDescription, 7)}...read more
          </p>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="text-success mb-0">$ {registrationFee} </h6>
            <h6 className="mb-0 d-flex">
              4.5
              <svg
                className="svg-inline--fa fa-star text-warning ms-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
              </svg>
            </h6>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <a href={`update-session/${_id}`}
              className="btn btn-warning cursor-pointer fs-7 "
            
            >
              Update
            </a>
          
            <butoon
              className="btn btn-primary cursor-pointer fs-7"
              onClick={handleShow}
            >
             Delete
            </butoon>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              Are You sure Delete this Session?
              </Modal.Body>
              <Modal.Footer>
              {loading ? (
              <ImSpinner9 className='animate-spin m-auto' size={24} />
            ) : (
              <Button variant="primary" onClick={() =>{
                handleDelete(_id)
                handleClose()
              }}>
                Delete
              </Button>
            )}
                
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}