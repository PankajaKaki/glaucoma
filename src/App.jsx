import { useState } from 'react'
import './App.css'
import PatientProfile from './components/Patient_dashboard'
import { Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import BookAppointments from './components/Book_Appointments'
import Medications from './components/Medications'
import Landing from './components/Landing';
import RegistrationForm from './components/RegistrationForm'
import SignupForm from './components/SignupForm'
import MedicalForm from './components/MedicalForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/registration-form' element={<RegistrationForm />}/>
      {/* <Route path='/doctor-page' element={<DoctorPage />}/> */}
      <Route path='/signup-form' element={<SignupForm/>}/>
      <Route path='/medical-form' element={<MedicalForm/>}/>


      <Route path='/patient-profile' element={<PatientProfile/>}/>
      <Route path='/book-appointment' element={<BookAppointments/>}/>
      <Route path='/medications' element={<Medications/>}/>
      
    </Routes>
    
    </>
  )
}

export default App

// react
// jsx
// virtual Dom
// components
// react hooks - useState,useEffet - axios, usememo, useRedcuer, 
// react router Dom
// state management - cart 
// ---context api
// ---redux toolkit (rtk)


//backend
// node 

// express 
// mongoose
// mongodb
// cors



