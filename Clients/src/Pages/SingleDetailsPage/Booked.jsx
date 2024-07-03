import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../../Components/Form/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js'
import useRole from "../../hooks/useRole";

/* Booking Modal */
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

function Booked({registrationFee,isRegistrationOngoing,registrationStartDate,registrationEndDate, title, classStartDate,tutorEmail, _id , refetch}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLaoding] = useState(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseModal = () => setShowDeleteModal(false);
  const {user} = useAuth()
  const role =useRole()

  console.log(role);
  const servicesFee = 10;

  const totalFee = servicesFee + parseFloat(registrationFee)

 
  //   Form handler
 /*  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const title = form.head.value;
    const description = form.note.value;
    const studentEmail = user?.email

    try {
    
      const note = {
        title,
        description,
        studentEmail
      };
      console.table(note);

      //   Post request to server
      await mutateAsync(note);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLaoding(false);
    }
  }; */
  const paymentInfo = {
    sessionId : _id,
    title,
    totalFee,
    studentEmail : user?.email,
    tutorEmail
  };



  return (
    <aside className="col-xl-5  d-xl-block">
      <div className="card bg-transparent border">
        <div className="card-header bg-transparent border-bottom">
          <h4 className="card-title mb-0">Price Summary</h4>
        </div>
        <div className="card-body">
          <div className="row g-4 mb-3">
            <div className="col-md-6">
              <div className="bg-light py-3 px-4 rounded-3">
                <h6 className="fw-light small mb-1">Registration Start</h6>
                <h6 className="mb-0">{new Date(registrationStartDate).toLocaleDateString()} </h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-light py-3 px-4 rounded-3">
                <h6 className="fw-light small mb-1">Registration End</h6>
                <h6 className="mb-0">{new Date(registrationEndDate).toLocaleDateString()} </h6>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-borderless mb-3">
            <li className="list-group-item px-2 d-flex justify-content-between">
              <span className="h6 fw-light mb-0">Fee</span>
              <span className="h6 fw-light mb-0">${registrationFee}</span>
            </li>
            {/*   <li className="list-group-item px-2 d-flex justify-content-between">
                    <span className="h6 fw-light mb-0">
                        10% campaign discount
                    </span>
                    <span className="h6 fw-light mb-0">-$500</span>
                </li> */}
            <li className="list-group-item px-2 d-flex justify-content-between">
              <span className="h6 fw-light mb-0">Services Fee</span>
              <span className="h6 fw-light mb-0">${servicesFee}</span>
            </li>
            <li className="list-group-item bg-light d-flex justify-content-between rounded-2 px-2 mt-2">
              <span className="h5 fw-normal mb-0 ps-1">Total</span>
              <span className="h5 fw-normal mb-0">${totalFee}</span>
            </li>
          </ul>
          <div className="d-grid gap-2">
            {isRegistrationOngoing ? (
              <button
                onClick={handleShowDeleteModal}
                disabled={role === 'admin' || role === 'tutor'}
                className="btn btn-dark mb-0"
              >
                Continue To Book
              </button>
            ) : (
              <button disabled className="btn btn-dark mb-0">
                Date Over
              </button>
            )}
          </div>

          {/* Book modal */}
          {/* delete Modal */}
          <Modal show={showDeleteModal} onHide={handleCloseModal}>
            <Modal.Header>
              <Modal.Title>Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Session: {title}
                  </p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Class Start: {classStartDate}
                  </p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Guest: {user?.displayName}
                  </p>
                </div>

                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Price: $ {totalFee}
                  </p>
                </div>
                <Elements stripe={stripePromise}> 
                <CheckoutForm paymentInfo={paymentInfo} handleCloseModal={handleCloseModal} refetch={refetch}/>
               </Elements> 
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button
                variant="primary"
              
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </aside>
  );
}

export default Booked;
