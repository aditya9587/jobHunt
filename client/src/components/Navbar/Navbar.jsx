import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(true);

  function signupClickHandler() {
    navigate("/signup");
  }

  function loginClickHandler() {
    navigate("/login");
    setLogout(false);
  }

  return (
    <div className="header">
      <div className="first">
        <p>Job Portal</p>
      </div>
      {/* <div className="middle">
        <p>Home</p>
        <p>Jobs</p>
        <p>About us</p>
        <p>contact us</p>
      </div> */}
      {logout ? (
        <div className="last">
          <p onClick={loginClickHandler}>Login</p>
          <button type="button" onClick={signupClickHandler}>
            Register
          </button>
        </div>
      ) : (
        <div className="last">
          <button>Logout</button>
        </div>
      )}
    </div>
  );
}
