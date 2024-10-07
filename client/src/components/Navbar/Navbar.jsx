import { useNavigate } from "react-router-dom";
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/signup");
  }

  return (
    <div className="header">
      <div className="first">
        <p>Job Portal</p>
      </div>
      <div className="middle">
        <p>Home</p>
        <p>Jobs</p>
        <p>About us</p>
        <p>contact us</p>
      </div>
      <div className="last">
        <p onClick={()=>{navigate("/login")}}>Login</p>
        <button type="button" onClick={clickHandler}>
          Register
        </button>
      </div>
    </div>
  );
}
