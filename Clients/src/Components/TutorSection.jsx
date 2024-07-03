import React from "react";
import Head from "./Head";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../hooks/useAxiosCommon";

function TutorSection() {
  const axiosCommon = useAxiosCommon();
  const {
    data: tutors = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tutors"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/tutor");
      return data;
    },
  });
  //console.log(tutors);
  if (error) return <p> Not data </p>;
  return (
    <section>
      <div class="container">
        <div class="row mb-4">
          <Head title="Tutor Section" />
        </div>
        <div class="row g-4 g-md-5">
          {tutors && tutors.map((tutor) => <TutorCard tutor={tutor} />)}
        </div>
      </div>
    </section>
  );
}

export default TutorSection;

const TutorCard = ({ tutor }) => {
  return (
    <div class="col-sm-4 col-lg-3 col-xl-2 col-6">
      <div class="card bg-transparent text-center p-1 h-50 d-flex items-center">
        {" "}
        <img src={tutor.image} class="rounded-circle w-50" alt="place" />
        <div class="card-body p-0 pt-3">
          <h5 class="card-title">
            
            <a
              aria-current="page"
              href="/"
              class="router-link-active router-link-exact-active stretched-link"
            >
              {tutor?.name}
            </a>
          </h5>
          <span>{tutor?.email}</span>
        </div>
      </div>
    </div>
  );
};
