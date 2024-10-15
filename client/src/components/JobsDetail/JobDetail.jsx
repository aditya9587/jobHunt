import React, { useEffect, useState } from "react";
import { displayJob } from "../../services/jobApi";
import "./JobDetail.css";
import { useNavigate } from "react-router-dom";

export default function JobDetail() {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const random = async () => {
      try {
        const jobResponse = await displayJob();
        setJobData(jobResponse.data.jobs);
        console.log(jobData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    random();
    console.log(jobData);
  }, []);
  if (loading) {
    return <p>Loading job listings...</p>; // Display loading text while data is being fetched
  }
  return (
    <div className="box">
      <div className="box2">
        <h1>Recent jobs Available...</h1>
        <button onClick={()=>navigate("/editjob")}>+ Add job</button>
      </div>

      {jobData.length > 0 ? (
        jobData.map((job, index) => (
          <div className="jobContainer" key={index}>
            <div className="detailDiv">
              <h3>{job.jobPosition}</h3>
              <p>
                {job.monthlySalary} <span> {job.location}</span>
              </p>
              <p>{job.jobType}</p>
            </div>
            <div className="mergediv">
              <div className="skillrow">
                {job.skills.map((ski, index) => (
                  <div className="skillsDiv" key={index}>
                    <span>{ski}</span>
                  </div>
                ))}
              </div>

              <div className="insideSkills">
                <button>View Details</button>
                <button>Edit Job</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No jobs available</div> // Render this if jobData is empty
      )}
    </div>
  );
}
