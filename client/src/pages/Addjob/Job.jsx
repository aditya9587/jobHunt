import React, { useState } from "react";
import "./Job.css";
import { createjob } from "../../services/jobApi.js";

export default function Signup() {
  const [jobValue, setjobValue] = useState({
    companyName: "",
    logoUrl: "",
    jobPosition: "",
    monthlySalary: "",
    jobType: "",
    remote: "",
    location: "",
    jobDescription:"",
    AboutCompany: "",
    skills: "",
    information: "",
  });

  async function hnadlesubmit(e){
    e.preventDefault();
    await createjob(jobValue)

  }
  return (
    <div className="container">
      <div className="left">
        <h2>Add job description</h2>

        <form onSubmit={hnadlesubmit}>
          <label htmlFor="Company">
            Company Name
            <input type="text" placeholder="ENTER YOUR COMPANY NAME HERE..." value={jobValue.companyName} onChange={(e)=> setjobValue({ ...jobValue , companyName: e.target.value})} />
          </label>

          <label htmlFor="">
              LogoURL
            <input
              type="text"
              name=""
              id=""
              placeholder="ENTER LOGO URL HERE"
              value={jobValue.logoUrl}
              onChange={(e)=> setjobValue({ ...jobValue , logoUrl: e.target.value})}
            />
          </label>

          <label htmlFor="">
            Job Position
            <input
              type="text"
              name=""
              id=""
              placeholder="ENTER YOUR JOB POSITION"
              value={jobValue.jobPosition}
              onChange={(e)=> setjobValue({ ...jobValue , jobPosition: e.target.value})}
            />
          </label>

          <label htmlFor="">
            Monthly Salary
            <input
              type="text"
              name=""
              id=""
              placeholder="ENTER YOUR MONTHLY SALARY HERE"
              value={jobValue.monthlySalary}
              onChange={(e)=> setjobValue({ ...jobValue , monthlySalary: e.target.value})}
            />
          </label>

          <label htmlFor="">
            Jobtype
            <input
              type="text"
              name=""
              id=""
              placeholder="ENTER YOUR JOB TYPE HERER"
              value={jobValue.jobType}
              onChange={(e)=> setjobValue({ ...jobValue , jobType: e.target.value})}
            />
          </label>

          <label htmlFor="">
            REMOTE/Office
            <input
              type="text"
              name=""
              id=""
              placeholder="ENTER THE REMOTE/OFFICE"
              value={jobValue.remote}
              onChange={(e)=> setjobValue({ ...jobValue , remote: e.target.value})}
            />
          </label>

          <label htmlFor="">
              Location
            <input
              type="text"
              name=""
              id=""
              placeholder="ENTER YOUR JOB LOCATION"
              value={jobValue.location}
              onChange={(e)=> setjobValue({ ...jobValue , location: e.target.value})}
            />
          </label>

          <label htmlFor="">
            Job Description
            <input
              type="text"
              name=""
              id=""
              placeholder="ENTER YOUR JOB DESCRIPTION..."
              value={jobValue.jobDescription}
              onChange={(e)=> setjobValue({ ...jobValue , jobDescription: e.target.value})}
            />
          </label>

          <label htmlFor="">
            About Company
            <input
              type="text"
              name=""
              id=""
              placeholder="ENTER ABOUT COMPANY"
              value={jobValue.AboutCompany}
              onChange={(e)=> setjobValue({ ...jobValue , AboutCompany: e.target.value})}
            />
          </label>

          <label htmlFor="">
            Skills
            <input
              type="text"
              name=""
              id=""
              placeholder="ENTER REQUIRED SKILLS..."
              value={jobValue.skills}
              onChange={(e)=> setjobValue({ ...jobValue , skills: e.target.value})}
            />
          </label>

          <label htmlFor="">
            Information
            <input
              type="text"
              name=""
              id=""
              placeholder="ENTER THE INFOMATION"
              value={jobValue.information}
              onChange={(e)=> setjobValue({ ...jobValue , information: e.target.value})}
            />
          </label>
        
            {/* <button>Cancel</button> */}
            <button type="submit" onClick={hnadlesubmit}>+ Add Job</button>
          
        </form>
      </div>
      <div className="right">Recruiter add job details here</div>
    </div>
  );
}
