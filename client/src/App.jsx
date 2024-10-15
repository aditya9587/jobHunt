import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Job from "./pages/Addjob/Job.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Signup from "./pages/register/Signup.jsx"
import Login from "./pages/login/Login.jsx"
import "./app.css";
import Test from "./pages/Test.jsx";
import JobDescription from "./pages/JobDescription/JobDescription.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/editJob" element={<Job />} />
          <Route path="/test" element={<JobDescription />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
