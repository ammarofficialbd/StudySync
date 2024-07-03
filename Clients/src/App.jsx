
import { Helmet } from 'react-helmet-async'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header/Header'
import {Outlet} from 'react-router-dom'
function App() {


  return (
    <>
    <Helmet> <title>Study Sync | Home</title> </Helmet>
    <Header/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default App
