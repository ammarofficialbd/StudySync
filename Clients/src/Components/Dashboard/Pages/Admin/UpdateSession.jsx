import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import { useMutation } from '@tanstack/react-query';

function UpdateSession() {
    const [loading, setLoading] = useState(false)

  const [selectedRegiStartDate, setSelectedRegiStartDate] = useState(new Date());
  const [selectedRegiEndDate, setSelectedRegiEndDate] = useState(new Date());
  const [selectedClassSatrtDate, setSelectedClassSatrtDate] = useState(new Date());
  const [selectedClassEndDate, setSelectedClassEndDate] = useState(new Date());

  const navigate = useNavigate()
  const items = useLoaderData();
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()

  const handleRegiStartDateChange = (date) => {
    setSelectedRegiStartDate(date);
  };
  const handleRegiEndEndChange = (date) => {
    setSelectedRegiEndDate(date);
  };
  const handleClassEndDateChange = (date) => {
    setSelectedClassEndDate(date);
  };
  const handleClassStartDateChange = (date) => {
    setSelectedClassSatrtDate(date);
  };


   // covert days 
   function convertMillisecondsToDays(milliseconds) {
    const seconds = milliseconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    return days;
}
  //upload data on database
  
  const { mutateAsync } = useMutation({
    mutationFn: async sessionData => {
      const { data } = await axiosSecure.patch(`/session/update/`, sessionData)
      return data
    },
    onSuccess: () => {
      console.log('Data Saved Successfully')
      toast.success('Session Added Successfully!')
      navigate('/dashboard/view-session')
      setLoading(false)
    },
  })
  //   Form handler
  const handleFormSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const sessionTitle = form.title.value
    const sessionDescription = form.desc.value
    const duration = (selectedClassEndDate - selectedClassSatrtDate) ;
    const sessionDuration = Math.floor(convertMillisecondsToDays(duration))
    const registrationFee = 0

    const status = 'pending'

    try {
      const sessionData = {
        sessionTitle, sessionDescription, registrationFee , registrationStartDate : selectedRegiStartDate, registrationEndDate: selectedRegiEndDate, classStartDate : selectedClassSatrtDate, classEndDate: selectedClassEndDate, sessionDuration, status
      }
      console.table(sessionData)

      //   Post request to server
      await mutateAsync(sessionData)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
      setLoading(false)
    }
  }
  return (
    <div>
         <Header title="Add Session" subTitle="Praise effects wish change way and any wanted. Lively use looked latter regard had." />
      <div className='row g-4 mt-5'>
        <div className='col-12'>
          <form onSubmit={handleFormSubmit}>

            <div className="content">
              <div className="">
                <h4 className="mb-0">Basic Information</h4>
                <div className="card shadow">
                  <div className="card-header border-bottom">
                    <h5 className="mb-0">Choose Listing Name & Description</h5>
                  </div>
                  <div className="card-body">
                    <div className="row g-4">

                      <div className="col-12">
                        <fieldset className="" id="__BVID__548048___BV___">
                          <legend id="__BVID__150193___BV__BV_label___" tabindex="-1"
                            className="form-label bv-no-focus-ring col-form-label pt-0">Session Title *</legend>
                          <div className=""><input className="form-control" name='title' defaultValue={items.sessionTitle} type="text"
                            placeholder="Enter Title" /> </div>
                        </fieldset><small> </small>
                      </div>

                      <div className="col-12">
                        <fieldset className="" id="__BVID__698262___BV___">
                          <legend id="__BVID__150103___BV__BV_label___" tabindex="-1"
                            className="form-label bv-no-focus-ring col-form-label pt-0">Short description *</legend>
                          <div className=""><textarea id="__BVID__250729___BV_input__" className="form-control"
                            placeholder="Enter Description" rows="2" wrap="soft" name='desc' defaultValue={items.sessionDescription}></textarea> </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card shadow">
                  <div className="card-header border-bottom">
                    <h5 className="mb-0">Listing Date</h5>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">

                      <div className="col-md-6">
                        <fieldset className=''>
                        <legend id="__BVID__240320___BV__BV_label___" tabindex="-1"
                            className="form-label bv-no-focus-ring col-form-label pt-0">Registration Start Date</legend>
                          <DatePicker
                            selected={selectedRegiStartDate}
                            onChange={handleRegiStartDateChange}
                            dateFormat="dd/MM/yyyy" // Adjust date format as needed
                            placeholderText="Select a date"
                            className="form-control"
                          />
                        </fieldset>
                      </div> 
                      <div className="col-md-6">
                        <fieldset className=''>
                        <legend id="__BVID__240320___BV__BV_label___" tabindex="-1"
                            className="form-label bv-no-focus-ring col-form-label pt-0">Registration End Date</legend>
                          <DatePicker
                            selected={selectedRegiEndDate}
                            onChange={handleRegiEndEndChange}
                            dateFormat="dd/MM/yyyy" // Adjust date format as needed
                            placeholderText="Select a date"
                            className="form-control"
                          />
                        </fieldset>
                      </div> 
                     
             
                      <div className="col-md-6">
                        <fieldset className=''>
                        <legend id="__BVID__240320___BV__BV_label___" tabindex="-1"
                            className="form-label bv-no-focus-ring col-form-label pt-0">Class Start Date</legend>
                          <DatePicker
                            selected={selectedClassSatrtDate}
                            onChange={handleClassStartDateChange}
                            dateFormat="dd/MM/yyyy" // Adjust date format as needed
                            placeholderText="Select a date"
                            className="form-control"
                          />
                        </fieldset>
                      </div> 
                      <div className="col-md-6">
                        <fieldset className=''>
                        <legend id="__BVID__240320___BV__BV_label___" tabindex="-1"
                            className="form-label bv-no-focus-ring col-form-label pt-0">Class End Date</legend>
                          <DatePicker
                            selected={selectedClassEndDate}
                            onChange={handleClassEndDateChange}
                            dateFormat="dd/MM/yyyy" // Adjust date format as needed
                            placeholderText="Select a date"
                            className="form-control"
                          />
                        </fieldset>
                      </div> 
                     
                    </div>
                  </div>
                </div>



              </div>
            </div>
            <div className="text-center mt-2">
              <button

                type='submit'
                className='btn btn-primary'
              >
                {loading ? (
                  <TbFidgetSpinner className='animate-spin m-auto' />
                ) : (
                  ' Save & Continue'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateSession