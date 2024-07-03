import React from 'react'
import Heading from '../../Components/Heading'

function TutorStatistics() {
  return (
    <div>
      <Heading title={"Dashboard"}  label={"Create Session"} link={'add-session'}/>

         <div className="row g-4 mb-5">
                    <div className="col-md-6 col-xxl-3">
                        <div
                            className="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100">
                            
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h4 className="mb-0">56</h4><span className="h6 fw-light mb-0">Total Session</span>
                                </div>
                                <div className="icon-lg rounded-circle bg-warning text-white mb-0"><svg
                                        className="svg-inline--fa fa-hotel" aria-hidden="true" focusable="false"
                                        data-prefix="fas" data-icon="hotel" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path className="" fill="currentColor"
                                            d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z">
                                        </path>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xxl-3">
                        <div
                            className="card card-body bg-success bg-opacity-10 border border-success border-opacity-25 p-4 h-100">
                            
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h4 className="mb-0">$836,789</h4><span className="h6 fw-light mb-0">Total Incomes</span>
                                </div>
                                <div className="icon-lg rounded-circle bg-success text-white mb-0"><svg
                                        className="svg-inline--fa fa-hand-holding-dollar" aria-hidden="true"
                                        focusable="false" data-prefix="fas" data-icon="hand-holding-dollar" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path className="" fill="currentColor"
                                            d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z">
                                        </path>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xxl-3">
                        <div
                            className="card card-body bg-primary bg-opacity-10 border border-primary border-opacity-25 p-4 h-100">
                            
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h4 className="mb-0">245</h4><span className="h6 fw-light mb-0">Total Material</span>
                                </div>
                                <div className="icon-lg rounded-circle bg-primary text-white mb-0"><svg
                                        className="svg-inline--fa fa-bed" aria-hidden="true" focusable="false"
                                        data-prefix="fas" data-icon="bed" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512">
                                        <path className="" fill="currentColor"
                                            d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z">
                                        </path>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xxl-3">
                        <div
                            className="card card-body bg-info bg-opacity-10 border border-info border-opacity-25 p-4 h-100">
                            
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h4 className="mb-0">147</h4><span className="h6 fw-light mb-0">Booked Session</span>
                                </div>
                                <div className="icon-lg rounded-circle bg-info text-white mb-0"><svg
                                        className="svg-inline--fa fa-building-circle-check" aria-hidden="true"
                                        focusable="false" data-prefix="fas" data-icon="building-circle-check" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path className="" fill="currentColor"
                                            d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c15.1 0 28.5-6.9 37.3-17.8C340.4 462.2 320 417.5 320 368c0-54.7 24.9-103.5 64-135.8V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z">
                                        </path>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
          </div>
       
          <div className="col-lg-6 col-xxl-4">
                        <div className="card shadow h-100">   
                            <div
                                className="card-header border-bottom d-flex justify-content-between align-items-center p-3">
                                <h5 className="card-header-title">Reviews</h5><a aria-current="page"
                                    href="/booking_v/admin/dashboard"
                                    className="router-link-active router-link-exact-active btn btn-link p-0 mb-0"> View all
                                </a>
                            </div>
                            <div className="card-body p-3">  
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        <div className="flex-shrink-0"><img src="/booking_v/assets/08-asctfRT6.jpg"
                                                className="rounded h-60px" alt=""/></div>
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Deluxe Pool View with Breakfast</h6>
                                            <ul className="list-inline smaller mb-0">
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li> 
                                                <li className="list-inline-item me-0"><svg className="svg-inline--fa fa-star"
                                                        aria-hidden="true" focusable="false" data-prefix="fas"
                                                        data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-0">(35&nbsp;reviews)</li>
                                            </ul>
                                        </div>
                                    </div><a aria-current="page" href="/booking_v/admin/dashboard"
                                        className="router-link-active router-link-exact-active btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">
                                        View </a>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        <div className="flex-shrink-0"><img src="/booking_v/assets/09-1mSywpw6.jpg"
                                                className="rounded h-60px" alt=""/></div>
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Deluxe Pool View</h6>
                                            <ul className="list-inline smaller mb-0">
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li> 
                                                <li className="list-inline-item me-0"><svg className="svg-inline--fa fa-star"
                                                        aria-hidden="true" focusable="false" data-prefix="fas"
                                                        data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-0">(25&nbsp;reviews)</li>
                                            </ul>
                                        </div>
                                    </div><a aria-current="page" href="/booking_v/admin/dashboard"
                                        className="router-link-active router-link-exact-active btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">
                                        View </a>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        <div className="flex-shrink-0"><img src="/booking_v/assets/01-Do9UFJy7.jpg"
                                                className="rounded h-60px" alt=""/></div>
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Luxury Room with Balcony</h6>
                                            <ul className="list-inline smaller mb-0">
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li> 
                                                <li className="list-inline-item me-0"><svg className="svg-inline--fa fa-star"
                                                        aria-hidden="true" focusable="false" data-prefix="fas"
                                                        data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-0">(18&nbsp;reviews)</li>
                                            </ul>
                                        </div>
                                    </div><a aria-current="page" href="/booking_v/admin/dashboard"
                                        className="router-link-active router-link-exact-active btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">
                                        View </a>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        <div className="flex-shrink-0"><img src="/booking_v/assets/05-BJkIRO7u.jpg"
                                                className="rounded h-60px" alt=""/></div>
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Premium Room With Balcony</h6>
                                            <ul className="list-inline smaller mb-0">
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li> 
                                                <li className="list-inline-item me-0"><svg className="svg-inline--fa fa-star"
                                                        aria-hidden="true" focusable="false" data-prefix="fas"
                                                        data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-0">(8&nbsp;reviews)</li>
                                            </ul>
                                        </div>
                                    </div><a aria-current="page" href="/booking_v/admin/dashboard"
                                        className="router-link-active router-link-exact-active btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">
                                        View </a>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        <div className="flex-shrink-0"><img src="/booking_v/assets/02-NATOWiis.jpg"
                                                className="rounded h-60px" alt=""/></div>
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Rock Family Suite</h6>
                                            <ul className="list-inline smaller mb-0">
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star text-warning" aria-hidden="true"
                                                        focusable="false" data-prefix="fas" data-icon="star" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-1"><svg
                                                        className="svg-inline--fa fa-star-half-stroke text-warning"
                                                        aria-hidden="true" focusable="false" data-prefix="fas"
                                                        data-icon="star-half-stroke" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path className="" fill="currentColor"
                                                            d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z">
                                                        </path>
                                                    </svg></li>
                                                <li className="list-inline-item me-0">(11&nbsp;reviews)</li>
                                            </ul>
                                        </div>
                                    </div><a aria-current="page" href="/booking_v/admin/dashboard"
                                        className="router-link-active router-link-exact-active btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">
                                        View </a>
                                </div> 
                            </div>  
                        </div>
                    
                  
          </div>
    </div>
  )
}

export default TutorStatistics