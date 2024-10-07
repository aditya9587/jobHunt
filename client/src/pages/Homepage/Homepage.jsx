import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div>
      <div className=" heroSection">
        <>
          <Navbar />
        </>
        <div className="middleHeader">
          <h1>FIND YOUR DREAM JOB TODAY</h1>
          <p>Connecting Talent with Oppurtunity</p>
          <form action="" method="POST">
            <input
              type="search"
              name=""
              id=""
              placeholder="Job Title or Company"
            />
            <button>Search Job</button>
          </form>
        </div>
      </div>
    </div>
  );
}
