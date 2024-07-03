
import React, { useEffect, useState } from "react";
import Loading from "../../../Loading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


function StudyMaterial({ sessionId }) {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
console.log(data);
  const fetchMaterialForSession = async () => {
    try {
      const response = await axiosSecure.get(`/material/${sessionId}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching material:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchMaterialForSession();
  }, [sessionId]); // Add sessionId to the dependency array to refetch when it changes

  while(data.length > 0){
    if (loading) {
      return <Loading/>;
    }
  }


  return (
    <div>
      <div className="d-flex flex-column">
        <div className="mt-2">
          <span className="fw-semibold">Image File:</span>
          <span> {data?.imageBB} </span>
          {data?.imageBB && (
            <a href={data.imageBB} download>
              <button>Download</button>
            </a>
          )}
        </div>
        <div className="mt-2">
          <span className="fw-semibold">File Link:</span>
          <span> {data?.gdriveLink} </span>
        </div>
      </div>
    </div>
  );
}

export default StudyMaterial;

