import React, { useState } from "react";
import Heading from "../../Components/Heading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "../../../Loading";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import avatar from "../../../../assets/img/OIP.jpg";
import { FaUser } from "react-icons/fa";

function ViewAllUser() {
  const axiosSecure = useAxiosSecure();
  const [name, setName] = useState('');
  //const [loading, setLoading] = useState(false);
  console.log(name);
  const {
    data: users = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users", name],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users?name=${name}`);
      return data;
    },
  });

const handleSubmit = (e)=>{
e.preventDefault()
const form = e.target 
const name = form.name.value;
setName(name);

}

  //console.log(data);
  if (isLoading) return <Loading />;

  if (error) return <p> Error </p>;

  return (
    <div>
      <Heading title={"All User"} label={"Create User"} />

      <div class="row g-3 align-items-center justify-content-between mb-5">
        <div class="col-md-8">
          <form class="rounded position-relative" onSubmit={handleSubmit}>
            <input
              id="__BVID__334288___BV_input__"
              class="form-control pe-5"
              type="search"
              name="name"
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
        <div class="col-md-3">
          <form class="">
            <div
              class="choices"
              data-type="select-one"
              tabindex="0"
              role="listbox"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="choices__inner">
                <select
                  id="sort-by"
                  class="form-select js-choice choices__input"
                  hidden=""
                  tabindex="-1"
                  data-choice="active"
                >
                  <option
                    value="sort-by"
                    data-custom-properties="[object Object]"
                  >
                    Sort by
                  </option>
                </select>
                <div class="choices__list choices__list--single">
                  <div
                    class="choices__item choices__item--selectable"
                    data-item=""
                    data-id="1"
                    data-value="sort-by"
                    data-custom-properties="[object Object]"
                    aria-selected="true"
                  >
                    Sort by
                  </div>
                </div>
              </div>
              <div
                class="choices__list choices__list--dropdown"
                aria-expanded="false"
              >
                <div class="choices__list" role="listbox">
                  <div
                    id="choices--sort-by-item-choice-1"
                    class="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                    role="option"
                    data-choice=""
                    data-id="1"
                    data-value="sort-by"
                    data-select-text="Press to select"
                    data-choice-selectable=""
                    aria-selected="true"
                  >
                    Sort by
                  </div>
                  <div
                    id="choices--sort-by-item-choice-2"
                    class="choices__item choices__item--choice choices__item--selectable"
                    role="option"
                    data-choice=""
                    data-id="2"
                    data-value="free"
                    data-select-text="Press to select"
                    data-choice-selectable=""
                  >
                    Free
                  </div>
                  <div
                    id="choices--sort-by-item-choice-3"
                    class="choices__item choices__item--choice choices__item--selectable"
                    role="option"
                    data-choice=""
                    data-id="3"
                    data-value="newest"
                    data-select-text="Press to select"
                    data-choice-selectable=""
                  >
                    Newest
                  </div>
                  <div
                    id="choices--sort-by-item-choice-4"
                    class="choices__item choices__item--choice choices__item--selectable"
                    role="option"
                    data-choice=""
                    data-id="4"
                    data-value="oldest"
                    data-select-text="Press to select"
                    data-choice-selectable=""
                  >
                    Oldest
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row g-4">
        {users && users.map((user) => <Card user={user} refetch={refetch}/>)}
      </div>
    </div>
  );
}

export default ViewAllUser;

const Card = ({ user, refetch }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const axiosSecure = useAxiosSecure();
  const { _id, email, name, image, role, status } = user;
  
  //update Role
//  console.log(image);
  const { mutateAsync } = useMutation({
    mutationFn: async (user) => {
      const { data } = await axiosSecure.patch(`user/update/${_id}`, user);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetch();
      toast.success("Successfully updated.");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const selectedRole = form.role.value
      console.log(selectedRole);
    const user = {
      role: selectedRole,
      status: "verified",
    };

    try {
      await mutateAsync(user);
    } catch (err) {
      toast.error("Error Updating role");
    }
  };

  return (
    <div className="col-md-6 col-lg-4 col-xxl-3">
      <div className="card border h-100">
        <div className="card-body text-center pb-0">
          <div className="avatar avatar-xl flex-shrink-0 mb-3">
            <img
              className="avatar-img rounded-circle"
              src={image || avatar}
              alt="avatar"
            /> 
          </div>
          <h5 className="mb-1">{name || "Name"}</h5>
          <small className="flex-centered gap-2">
            <FaUser />
            <span className="fw-semibold text-capitalize"> {role} </span>
          </small>
          <div className="d-flex flex-column justify-content-start mt-3">
            <h6 className="mb-0 small">
              <span className="fw-semibold">Status: </span>
              <span
                className={`${
                  status === "verified"
                    ? "text-bg-success p-1 rounded"
                    : "text-bg-warning p-1 rounded"
                }`}
              >
                {status} 
              </span>
            </h6>
            <h6 className="mt-2 small">
              <span className="fw-semibold">Eamil: </span>
              {email}
            </h6>
          </div>
        </div>
        <div className="card-footer d-flex gap-3 align-items-center">
          <button
            className="btn btn-sm btn-primary-soft mb-0 w-100"
            onClick={handleShow}
            disabled={role === "admin"}
          >
            Update
          </button>

          <button
            className="btn btn-sm btn-light flex-shrink-0 mb-0 flex-centered"
            disabled={role === "admin"}
          >
            <MdDelete className="h-20px w-20px" />
          </button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Update User Role </Modal.Title>
          </Modal.Header>
          
          <Modal.Body>

          <form onSubmit={handleSubmit} className="d-flex flex-column mb-2"> 
          <label for="cars">Choose a Role:</label>
            <select name="role" id="roles" className="form-control">
              <option value="student" className="">Student</option>
              <option value="tutor" className="">Tutor</option>
            </select>

            <input className="btn btn-sm btn-primary-soft mb-0 w-100 mt-2" type="submit" onClick={handleClose}/>
          </form>
           
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
      
        </Modal>
      </div>
    </div>
  );
};
