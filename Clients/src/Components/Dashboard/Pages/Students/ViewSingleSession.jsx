import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import {NavLink, useParams } from "react-router-dom";

import cover from "./../../../../assets/img/ban.jpg";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../Loading";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";
import StudyMaterial from "./StudyMaterial";

function ViewSingleSession() {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
   // console.log(id);

  const { data: sessionData= [], isLoading: sessionLoading, error: sessionError } = useQuery({
    queryKey: ["session", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/session/${id}`);
      return data;
    },
  });

  //console.log(sessionData);

  const {
    _id,
    sessionTitle,
    sessionDescription,
    tutor,
    registrationStartDate,
    registrationEndDate,
    classStartDate,
    classEndDate,
    sessionDuration,
  } = sessionData || {};


  if (sessionLoading) return <Loading />;

  if ( sessionError) return <p>Session data not found</p>;

  
  return (
    <main>
      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h1 className="fs-3">{sessionTitle}</h1>
              <p className="fw-bold mb-0">{sessionDescription}</p>
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
                    <span> {new Date(registrationStartDate).toLocaleDateString()}</span>
                  </div>
                  <div className="mt-2">
                    <span className="fw-semibold "> Regisstration End: </span>
                    <span> {new Date(registrationEndDate).toLocaleDateString()} </span>
                  </div>
                </div>
                <div className="d-flex flex-column mt-5">
                  <div>
                    <span className="fw-semibold"> Class Start: </span>
                    <span> {new Date(classStartDate).toLocaleDateString()}</span>
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
            <div className="col-xl-7 ">
              <div className="card bg-transparent p-0">
                <div className="card-header bg-transparent border-bottom d-sm-flex justify-content-sm-between align-items-center p-0 pb-3">
                  <h4 className="mb-2 mb-sm-0"> Session Material</h4>
                  <div className="col-sm-4">{
                  /* autocomplete box */}</div>
                  
                </div>
                {/* material Session */}
                  <StudyMaterial sessionId={_id}/>
              </div>
            </div>
           <Review/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ViewSingleSession;


const Review = () =>{

  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  //console.log(data);
  const {user} = useAuth()
  const { mutateAsync } = useMutation({
    mutationFn: async (review) => {
      await axiosSecure.post(`/add-review`, review);
    },
    onSuccess: () => {
      console.log("Data Saved Successfully");
      toast.success("Upload Reviews Successfully!");
      setLoading(false);
    },
  });
  //   Form handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
    const form = e.target;
    const rating = form.rating.value;
    const reviews = form.review.value;
    const studentEmail = user?.email;

    try {
      const review = {
        rating,
        reviews,
        studentEmail,
      };
      console.table(review);

      //   Post request to server
      await mutateAsync(review);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };
  return(
    <aside className="col-xl-5  d-md-block mt-md-5">
    <div className="card bg-transparent border">
      <div className="card-header bg-transparent border-bottom">
        <h4 className="card-title mb-0">Review</h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleFormSubmit}>
          <div className="row g-4 mb-3">
            <div className="content">
              <div className="">
                <div className="card shadow">
                  <div className="card-header border-bottom">
                    <h5 className="mb-0">Add Review</h5>
                  </div>
                  <div className="card-body">
                    <div className="row g-4">
                      <div className="col-12">
                        <div className="mb-3">
                          <label
                            htmlFor="image"
                            className="block mb-2 text-sm"
                          >
                            Rating:
                          </label>
                          <input
                            className="form-control"
                            required
                            type="text"
                            id="rating"
                            name="rating"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <fieldset>
                          <legend className="form-label bv-no-focus-ring col-form-label pt-0">
                            Review:
                          </legend>
                          <div className="">
                            <textarea
                              className="form-control"
                              placeholder="Enter Review"
                              rows="3"
                              wrap="soft"
                              name="review"
                              type="text"
                            ></textarea>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-2 d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                {loading ? (
                  <TbFidgetSpinner className="animate-spin m-auto" />
                ) : (
                  " Save & Continue"
                )}
              </button>
            </div>
          </div>
        
        </form>
      </div>
    </div>
  </aside>
  )
}