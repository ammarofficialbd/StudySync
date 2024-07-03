import React from 'react'
import useRole from '../../../../hooks/useRole'
import AdminStatistics from '../Admin/AdminStatistics'
import StudentStatistics from '../Students/StudentStatistics'
import TutorStatistics from '../Tutor/TutorStatistics'
import Loading from '../../../Loading'

const Statistics = () => {
    const {role, isLoading} = useRole()
    if (isLoading) return <Loading />
    return (
      <>
        {role === 'admin' && <AdminStatistics />}
        {role === 'tutor' && <TutorStatistics />}
        {role === 'student' && <StudentStatistics />}
      </>
    )
  }
  export default Statistics