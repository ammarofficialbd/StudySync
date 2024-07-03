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
import { IoMailSharp } from "react-icons/io5";
function ViewAllMaterials() {
  const axiosSecure = useAxiosSecure()
 const {user} = useAuth()

 const [loading, setLoading] = useState(false);
 
const { data : materials = [], isLoading, error, refetch} = useQuery({
  queryKey: ['materials'],
  queryFn: async()=>{
      const {data} = await axiosSecure.get(`/materials`)
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
  //  console.log(data);

    refetch()
    setLoading(false)
    toast.success('Successfully deleted.')
  },
})

const handleDelete = async(id) =>{
setLoading(true)
try{
  await mutateAsync(id)

}catch(err) {
  toast.error('Error Deleteing')
}

}

//console.log(data);
if(isLoading || loading) return <Loading/>

if(error) return <p> Error </p>



  return (
    <div>
      <Heading title={"Session Materials"} label={"Upload Material"} />

      <div  className='row g-4'>
      {
       materials && materials?.map((item)=>(
          <Card item={item} handleDelete={handleDelete}/>
        ))
      }
     

      </div>
    </div>
  )
}

export default ViewAllMaterials


const Card =({item, handleDelete})=>{

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const axiosSecure = useAxiosSecure()

  const {_id, tutorEmail, sessionTitle,  imageBB,
    gdriveLink , sessionId} = item

    const { data : session = [], isLoading, error, refetch} = useQuery({
      queryKey: ['session'],
      queryFn: async()=>{
          const {data} = await axiosSecure.get(`/session/${sessionId}`)
          return data
      }
    })

    const {classStartDate, classEndDate} = session

   const endDate = new Date(classEndDate)
  
   const date = new Date().toLocaleDateString()
  // console.log(endDate, date);
    //console.log(date > classEndDate);

  return(
    <div  className="col-sm-6 col-md-4 col-xl-3 col-xxl-3 col-lg-3">
    <div  className="card border h-100">
      
      <div  className="card-body text-center pb-0">
        <div  className="avatar avatar-xl flex-shrink-0 mb-3"><img  className="avatar-img rounded-circle"
            src={imageBB} alt="avatar"/> </div>
        <h5  className="mb-1">{sessionTitle}</h5><small  className="flex-centered"> <IoMailSharp className='mr-2'/>      {tutorEmail} </small>
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

