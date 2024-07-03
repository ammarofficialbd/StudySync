import React, { useState } from 'react'
import Heading from '../../Components/Heading'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import useAuth from '../../../../hooks/useAuth'
import { useMutation, useQuery } from '@tanstack/react-query'
import Loading from '../../../Loading'
import { NavLink } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import {Modal, Button} from 'react-bootstrap';
import toast from 'react-hot-toast'
function ViewAllMaterial() {
  const axiosSecure = useAxiosSecure()
 const {user} = useAuth()

 //const [loading, setLoading] = useState(false);
 
const { data : material = [], isLoading, error, refetch} = useQuery({
  queryKey: ['material' , user?.email],
  queryFn: async()=>{
      const {data} = await axiosSecure.get(`/material-list/${user?.email}`)
      return data
  }
})


//delete Data 
const {mutateAsync} = useMutation({
  mutationFn :async (id) =>{
   const {data} = await axiosSecure.delete(`material/${id}`)
   return data
  },
  onSuccess: data => {
    console.log(data);
    refetch()
    toast.success('Successfully deleted.')
  },
})

const handleDelete = async(id) =>{

try{
  await mutateAsync(id)

}catch(err) {
  toast.error('Error Deleteing')
}

}

//console.log(data);
if(isLoading) return <Loading/>

if(error) return <p> Error </p>



  return (
    <div>
      <Heading title={"Session Materials"} label={"Upload Material"} />

      <div  className='row g-4'>
      {
       material && material?.map((item)=>(
          <Card item={item} handleDelete={handleDelete}/>
        ))
      }
     

      </div>
    </div>
  )
}

export default ViewAllMaterial


const Card =({item, handleDelete})=>{

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {_id, tutorEmail, sessionTitle,  imageBB,
    gdriveLink , sessionId} = item
  return(
    <div  className="col-md-6 col-lg-4 col-xxl-3">
    <div  className="card border h-100">
      
      <div  className="card-body text-center pb-0">
        <div  className="avatar avatar-xl flex-shrink-0 mb-3"><img  className="avatar-img rounded-circle"
            src={imageBB} alt="avatar"/> </div>
        <h5  className="mb-1">{sessionTitle}</h5><small  className="flex-centered"><svg width="1em" height="1em"
            viewBox="0 0 16 16" fill="currentColor" role="img" focusable="false"  className="me-1">
            <path
              d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10">
            </path>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
          </svg> Los Angeles, USA</small>
        <div  className="d-flex flex-column justify-content-start mt-3">
          <h6  className="mb-0 small"><span  className="fw-semibold">image Link:</span> {imageBB}</h6>
          <h6  className="mt-2 small">
            <span  className="fw-semibold">File Link :</span>
            {gdriveLink}
          </h6>
        </div>
      </div>
      <div  className="card-footer d-flex gap-3 align-items-center">
        
        <NavLink to={`/dashboard/upload-materials/${sessionId}`}
           className="btn btn-sm btn-primary-soft mb-0 w-100"> Update </NavLink>
           
           <button 
           className="router-link-active router-link-exact-active btn btn-sm btn-light flex-shrink-0 mb-0 flex-centered" onClick={handleShow}><MdDelete className='h-20px w-20px'/>
           </button>
           </div>



        <Modal show={show} onHide={handleClose} >
          <Modal.Header>
            <Modal.Title>Delete Material</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are You Sure ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {handleDelete(_id)
            handleClose()}}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>


    </div>
  </div>
  )
}

