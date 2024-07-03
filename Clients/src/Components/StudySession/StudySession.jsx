import React from "react";
import Card from "./Card";
import Head from "../Head";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../Loading";

function StudySession() {
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
    <section>
      <div className="container">
        <div className="row mb-4">
          <Head title="Study Session" />
        </div>

        {sessions && sessions?.length > 0 ? (
          <div className="row g-4">
            {sessions?.slice(0, 8).map((session) => (
              <Card key={session._id} session={session} />
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
    </section>
  );
}

export default StudySession;
