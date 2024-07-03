import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
function DeleteNote({_id, refetch}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [loading, setLaoding] = useState(false)
    const handleShowDeleteModal = () => setShowDeleteModal(true);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const axiosSecure = useAxiosSecure()

    //console.log(_id);
     const { mutateAsync} = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/note/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetch()
      setLaoding(false)
      toast.success("Successfully Deleted");
    },
  });

  const handleDelete = async(id) =>{
    setLaoding(true)
    console.log(id);
    try{
      await mutateAsync(id)
    
    }catch(err) {
      setLaoding(false)
      toast.error('Error Deleteing')
    }
    
    } 
  return (
    <div>
          <button className="btn btn-sm btn-light flex-shrink-0 mb-0 flex-centered"  onClick={handleShowDeleteModal}>
            <MdDelete className="h-20px w-20px" />
          </button>

             {/* delete Modal */}
             <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} >
          <Modal.Header>
            <Modal.Title>Delete Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are You Sure ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDeleteModal}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {handleDelete(_id)
            handleCloseDeleteModal()}}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default DeleteNote