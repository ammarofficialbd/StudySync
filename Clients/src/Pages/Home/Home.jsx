import React from 'react'
import Banner from '../../Components/Banner/Banner'
import StudySession from '../../Components/StudySession/StudySession'
import Review from '../../Components/Review'
import TutorSection from '../../Components/TutorSection'


function Home() {
  return (
    <main> 
        <Banner/>
        <StudySession/>
        <Review/>
        <TutorSection/>
    </main>
  )
}

export default Home