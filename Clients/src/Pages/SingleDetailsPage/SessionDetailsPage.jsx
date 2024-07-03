import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import Loading from "../../Components/Loading";
import cover from "./../../assets/img/ban.jpg";
import Booked from "./Booked";

function SessionDetailsPage() {

    const { id } = useParams();
    const axiosCommon = useAxiosCommon();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["session", "id"],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`session/${id}`);
            return data;
        },
    });
    if (isLoading) return <Loading />;
   // console.log(data);
    const { sessionTitle, sessionDescription, tutor, registrationStartDate, registrationEndDate, classStartDate, classEndDate, sessionDuration, registrationFee, _id} = data;
    const currentDate = new Date();

   
    const endDate = new Date(registrationEndDate);
    const isRegistrationOngoing = currentDate <= endDate;
   





    return (
        <main>
            
            <section className="pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <h1 className="fs-3">{sessionTitle}</h1>
                            <p className="fw-bold mb-0">

                                {sessionDescription}
                            </p>
                        </div>
                    </div>
                    <div className="row g-md-4">
                        <div className="col-md-6 col-12 position-relative">
                            <img src={cover} className="rounded-3" alt="" />
                            <div className="position-absolute top-0 start-0 px-3">
                                
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-sm-4">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-column">
                                    <div>
                                        <span className="fw-semibold "> Tutor Name: </span>
                                        <span> {tutor.name} </span>
                                    </div>
                                    <div className="mt-2">
                                        <span className="fw-semibold "> Tutor Email: </span>
                                        <span> {tutor.email} </span>
                                    </div>

                                </div>
                                <div className="d-flex flex-column mt-5">
                                    <div>
                                        <span className="fw-semibold "> Regisstration Start: </span>
                                        <span> {new Date(registrationStartDate).toLocaleDateString()} </span>
                                    </div>
                                    <div className="mt-2">
                                        <span className="fw-semibold "> Regisstration End: </span>
                                        <span> {new Date(registrationEndDate).toLocaleDateString()} </span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column mt-5">
                                    <div>
                                        <span className="fw-semibold"> Class Start: </span>
                                        <span> {new Date(classStartDate).toLocaleDateString()} </span>
                                    </div>
                                    <div className="mt-2">
                                        <span className="fw-semibold"> Class End: </span>
                                        <span> {new Date(classEndDate).toLocaleDateString()} </span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column mt-5">
                                    <div>
                                        <span className="fw-semibold "> Session Duration: </span>
                                        <span> {sessionDuration} </span>
                                    </div>
                                    <div className="mt-2">
                                        <span className="fw-semibold"> Registration Fee: </span>
                                        <span> ${registrationFee} </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- section details --> */}
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="card bg-transparent p-0">
                                <div className="card-header bg-transparent border-bottom d-sm-flex justify-content-sm-between align-items-center p-0 pb-3">
                                    <h4 className="mb-2 mb-sm-0">Select Session</h4>
                                    <div className="col-sm-4">{/* autocomplete box */}</div>
                                    {/* Ssuggestion Session */}
                                  
                                </div>
                            </div>
                        </div>
                        <Booked  registrationStartDate={registrationStartDate} registrationEndDate={registrationEndDate} registrationFee={registrationFee} isRegistrationOngoing={isRegistrationOngoing} title={sessionTitle} classStartDate={classStartDate} tutorEmail={tutor.email} _id={_id} refetch={refetch} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default SessionDetailsPage;

