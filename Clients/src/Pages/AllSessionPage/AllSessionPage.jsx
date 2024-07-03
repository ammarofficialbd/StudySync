import React from 'react'
import Head from '../../Components/Head'
import AllCard from './AllCard'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading';
import { Helmet } from 'react-helmet-async';


function AllSessionPage() {
  const axiosSecure = useAxiosSecure();
  const { data: sessions = [], isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/sessions");
      return data;
    },
  });

  if (isLoading) return <Loading />;
  return (
    <section className="pt-3 pt-lg-5">
          <Helmet> <title>Study Sync | Session</title> </Helmet>
         <div className="container">
         <div className="row g-4 g-lg-5">
          <Head title={"All Study Session"}/>
         </div>
         <div className="row g-4 g-lg-5 mt-2" >
         {sessions && sessions?.length > 0 ? (
          <div className="row g-4">
            {sessions?.map((session) => (
              <AllCard key={session._id} session={session} />
            ))}
            {sessions.length > 6 && (
              <button className="btn btn-primary-soft mb-0">
                See All Session
              </button>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
            <Head title="No Session Available At this Time" />
          </div>
        )}
         </div>
         </div>
        
    </section>
  )
}

export default AllSessionPage