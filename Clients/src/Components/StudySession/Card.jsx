import React from 'react'
import cover from './../../assets/img/ban.jpg'
import { NavLink } from 'react-router-dom';
function Card({
    session}) {

        const {_id,
            sessionTitle, 
            sessionDescription, registrationStartDate, registrationEndDate ,registrationFee} = session
    const currentDate = new Date();


    const endDate = new Date(registrationEndDate);

    const isRegistrationOngoing = currentDate <= endDate;
 //console.log(isRegistrationOngoing);
  return (
    <div className="col-md-6 col-lg-4 col-xxl-3">
    <div className="card card-img-scale overflow-hidden bg-transparent">
        <div className="card-img-scale-wrapper rounded-3">
            <img src={cover} className="card-img" alt="session image" />
            <div className="position-absolute bottom-0 start-0 p-3">
                <div className="badge text-bg-dark fs-6 rounded-pill stretched-link d-flex">
                   
                    {isRegistrationOngoing ? (
                    <span >Ongoing</span>
                ) : (
                    <span >Closed</span>
                )}
                </div>
            </div>
        </div>
        <div className="card-body px-2">
            <h5 className="card-title">
                <NavLink to={`/session/${_id}`}className="stretched-link">{sessionTitle}</NavLink>
            </h5>
            <p className="card-text">{sessionDescription}</p>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-success mb-0">$ {registrationFee} <small className="fw-light">/starting at</small></h6>
                <h6 className="mb-0 d-flex">4.5 
                    <svg className="svg-inline--fa fa-star text-warning ms-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                    </svg>
                </h6>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <NavLink to={`/booked/${_id}`} className="btn btn-warning cursor-pointer">Book Now</NavLink>
                <NavLink to={`/session/${_id}`} className="btn btn-primary cursor-pointer">Read More</NavLink>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card