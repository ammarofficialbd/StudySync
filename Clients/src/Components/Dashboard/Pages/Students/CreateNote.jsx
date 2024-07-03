import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import Heading from '../../Components/Heading';
import { TbFidgetSpinner } from 'react-icons/tb';
import useAuth from '../../../../hooks/useAuth';

function CreateNote() {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    //console.log(data);
  
  
    const { mutateAsync } = useMutation({
      mutationFn: async (note) => {
        await axiosSecure.post(`/add-note`, note);
      },
      onSuccess: () => {
        console.log("Data Saved Successfully");
        toast.success("Upload Note Successfully!");
        navigate("/dashboard/view-notes");
        setLoading(false);
      },
    });
    //   Form handler
    const handleFormSubmit = async (e) => {
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
        setLoading(false);
      }
    };
  return (
    <div>
        <Heading title={"Create Notes"} />

<div className="row g-4">
  <div className="col-12">
    <form onSubmit={handleFormSubmit}>
      <div className="content">
        <div className="">
        
          <div className="card shadow">
            <div className="card-header border-bottom">
              <h5 className="mb-0">Add Note</h5>
            </div>
            <div className="card-body">
              <div className="row g-4">
                <div className="col-12">
                  <div className="mb-3">
                    <label htmlFor="image" className="block mb-2 text-sm">
                      Heading:
                    </label>
                    <input
                     className="form-control"
                      required
                      type="text"
                      id="head"
                      name="head"
                      
                    />
                  </div>
                </div>

                <div className="col-12">
                  <fieldset >
                    <legend
                      className="form-label bv-no-focus-ring col-form-label pt-0"
                    >
                     Content:
                    </legend>
                    <div className="">
                      <textarea
                        className="form-control"
                        placeholder="Enter Note"
                        rows="3"
                        wrap="soft"
                        name="note"
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
      <div className="text-center mt-2">
        <button type="submit" className="btn btn-primary">
          {loading ? (
            <TbFidgetSpinner className="animate-spin m-auto" />
          ) : (
            " Save & Continue"
          )}
        </button>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default CreateNote