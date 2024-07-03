import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Heading from "../../Components/Heading";
import useAuth from "../../../../hooks/useAuth";
import Loading from "../../../Loading";
import {Modal, Button} from 'react-bootstrap';
import toast from "react-hot-toast";

import { TbFidgetSpinner } from "react-icons/tb";
import DeleteNote from "./DeleteNote";
function ManageNotes() {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
const {data: notes=[], isLoading, refetch} =useQuery({
  queryKey: ['notes'],
  queryFn: async()=>{
const {data} = await axiosSecure.get(`/notes/${user?.email}`)
return data
  }
})
if(isLoading) return <Loading/>
  return (
    <div>
      <Heading title={"All Notes"} label={"Create Notes"} link={'add-notes'}/>

      <div class="row g-3 align-items-center justify-content-between mb-5">
        <div class="col-md-8">
          <form class="rounded position-relative">
            <input
              id="__BVID__334288___BV_input__"
              class="form-control pe-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y"
              type="submit"
            >
              <svg
                class="svg-inline--fa fa-magnifying-glass"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="magnifying-glass"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  class=""
                  fill="currentColor"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>

      <div className="row g-4">
        {notes && notes?.map((note) => <Card note={note} refetch={refetch} />)}
      </div>
    </div>
  );
}

export default ManageNotes;

const Card = ({ note , refetch}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLaoding] = useState(false)
  const axiosSecure = useAxiosSecure();
  const { _id, studentEmail, title, description} = note;

  //update Role
  //console.log(_id);
  const { mutateAsync } = useMutation({
    mutationFn: async (updateNote) => {
      const { data } = await axiosSecure.patch(`/note/update/${_id}`, updateNote);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetch()
      setLaoding(false)
      toast.success("Successfully Updated.");
    },
  });



  const handleSubmit = async (e) => {
    setLaoding(true)
    e.preventDefault();
    const form = e.target;
    const title = form.head.value;
    const description = form.note.value;
    
    const updateNote = {
     title,
     description
    };
    console.table(updateNote);
    try {
      await mutateAsync(updateNote);
    } catch (err) {
      toast.error("Error Updating role");
      setLaoding(false)
    }
  }; 


  return (
    <div className="col-md-6 col-lg-4 col-xxl-3">
      <div className="card border h-100">
        <div className="card-body text-center pb-0">
          
          <h5 className="mb-1">{title}</h5>
          <div className="d-flex flex-column justify-content-start mt-3">
            <h6 className="mb-0 small">
              <span className="fw-semibold">Email: {studentEmail} </span>
          
            </h6>
            <h6 className="mt-2 small">
              <span className="fw-semibold">Notes :</span>
              {description}
            </h6>
          </div>
        </div>
        <div className="card-footer d-flex gap-3 align-items-center">
          <button
            className="btn btn-sm btn-primary-soft mb-0 w-100"
            onClick={handleShow}
          >
            Update
          </button>

          {/* Update Note */}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Update Notes </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <form onSubmit={handleSubmit}>
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
                              <label
                                htmlFor="image"
                                className="block mb-2 text-sm"
                              >
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
                            <fieldset>
                              <legend className="form-label bv-no-focus-ring col-form-label pt-0">
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
                  <button type="submit" className="btn btn-primary" onClick={handleClose}>
                    {loading ? (
                      <TbFidgetSpinner className="animate-spin m-auto" />
                    ) : (
                      " Save & Continue"
                    )}
                  </button>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
         
         <DeleteNote _id={_id} refetch={refetch}/>
       
        </div>
      </div>
    </div>
  );
};
