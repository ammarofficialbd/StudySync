import React from 'react'
import Heading from '../../Components/Heading';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import Loading from '../../../Loading';
import { useMutation, useQuery } from '@tanstack/react-query';
import Header from '../../Components/Header';
import toast from 'react-hot-toast';


function RejectedSession({loading ,refetch}) {

const axiosSecure = useAxiosSecure()
const {user} = useAuth()
const {data: items=[], isLoading, error, refetch:reGet} = useQuery({
  queryKey: ['rejeted-sessions' , user?.email],
  queryFn: async()=>{
      const {data} = await axiosSecure.get(`/rejected-session-list/${user?.email}`)
      return data
  }
})




console.log(items);
if(isLoading || loading) return <Loading/>
  //console.log(data);
  if(error) return <Header title={'Internet Problem'}/>
  return (
    <section> 
        <Heading title="Session List (Rejected)" link="add-session" label={"Add Session"}/>
    <div className="card shadow mt-5">
    <div className="card-body">
         <div className="bg-light rounded p-3 d-none d-lg-block">
             <div className="row row-cols-7 g-4">
                 <div className="col">
                     <h6 className="mb-0">Title</h6>
                 </div>
                 <div className="col">
                     <h6 className="mb-0">Reason</h6>
                 </div>
            
                 <div className="col">
                     <h6 className="mb-0">Feedback</h6>
                 </div>
                 <div className="col">
                     <h6 className="mb-0">Status</h6>
                 </div>
                 <div className="col">
                     <h6 className="mb-0">Action</h6>
                 </div>
             </div>
         </div>   
         {items && items.length > 0 ? (items?.map((item)=>(
           <Table item={item} refetch={refetch} reGet={reGet}/>))) : (
         <Header title={'Not available Data'}/>
)

}
   
         
</div>
     
    </div></section>
  )
}

export default RejectedSession

const Table = ({item,refetch, reGet}) =>{
    const { _id, tutor, sessionTitle, status, rejectionReason } = item;

    const axiosSecure = useAxiosSecure();

    const { mutateAsync } = useMutation({
      mutationFn: async (sessionData) => {
        const { data } = await axiosSecure.patch(
          `/session/update/${_id}`,
          sessionData
        );
        return data;
      },
      onSuccess: () => {
        reGet()
        console.log("Data Saved Successfully");
        toast.success("Session Update Successfully!");
        refetch()
      },
    });
  
    const handleSubmit = async () => {
 
      const status = "pending";
  
      try {
        const materials = {
          status,
        };
        console.table(materials);
  
        //   Post request to server
        await mutateAsync(materials);
      } catch (err) {
        console.log(err);
        toast.error(err.message);
   
      }
    };
    
   
return(
<div className="card-body">
         
            <div className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
                <div className="col"><small className="d-block d-lg-none">Title:</small>
                    <div className="d-flex align-items-center">
                {/*         <div className="avatar avatar-xs flex-shrink-0"><img className="avatar-img rounded-circle"
                                src="/booking_v/assets/09-1AM4Ze_z.jpg" alt="avatar"/></div> */}
                        <div className="ms-2">
                            <h6 className="mb-0 fw-ligh">{sessionTitle}</h6>
                        </div>
                    </div>
                </div>
                <div className="col"><small className="d-block d-lg-none">Reason:</small>
                    <h6 className="mb-0 fw-normal">{rejectionReason?.reason}</h6>
                </div>
               
             
                <div className="col"><small className="d-block d-lg-none">Feedback</small>
                    <h6 className="mb-0 fw-normal">{rejectionReason?.feedback}</h6>
                </div>
                <div className="col"><small className="d-block d-lg-none">Status:</small>
                    <div className={`badge bg-opacity-20 bg-danger text-white `}> {status}</div>
                </div>
                <div className="col d-flex flex-column gap-2">
                  <small className="d-block d-lg-none">Action:</small>
                  <a  href={`/session/${_id}`} className="btn btn-sm btn-light mb-0"> View </a>
                  <button className="btn btn-sm btn-light mb-0" onClick={handleSubmit}> Request </button>
                
                </div>
            </div>
            
</div>
)
  }