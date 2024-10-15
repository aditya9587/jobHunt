import React from 'react'
import './JobDescription.css'
import Navbar from '../../components/Navbar/Navbar'

export default function JobDescription() {
  return (
    <div className='mainDiv'>
      <Navbar />
      <div className='jobDescrip'>
        <h1>  JOB POSITION </h1>
        <p> JOB LOCATION </p>
        <p> Salary </p>
        <h3>About Company</h3>
        <p> About company descripton</p>
        <h3>About the job</h3>
        <p>About the job description</p>
        <h3>Skills Required</h3>
        <p>skills</p>
        <h3>Additional Information</h3>
        <p>Additional information description</p>
      </div>
    </div>
  )
}
