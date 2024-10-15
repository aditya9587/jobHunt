import React, { useState } from "react";
import { registerUser } from "../../services";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function login() {
  const navigate = useNavigate();
  const [userValue, setuserValue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [errorValue, setErrorValue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  async function handelSubmit(e) {
    e.preventDefault();
    if (remember.checked) {
      await registerUser(userValue);
      navigate("/login")
    } else {
      alert("checkbox empty");
    }
  }

  return (
    <div className="container">
      <div className="loginDiv">
        <div>
          <h2>Create an account</h2>
          <p>Your personal job finder is here</p>
          <form onSubmit={handelSubmit}>
            <input
              type="text"
              placeholder="NAME"
              value={userValue.name}
              onChange={(e) =>
                setuserValue({ ...userValue, name: e.target.value })
              }
            />
            
            <input
              type="text"
              placeholder="EMAIL"
              value={userValue.email}
              onChange={(e) =>
                setuserValue({ ...userValue, email: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="MOBILE"
              value={userValue.mobile}
              onChange={(e) =>
                setuserValue({ ...userValue, mobile: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="PASSWORD"
              value={userValue.password}
              onChange={(e) =>
                setuserValue({ ...userValue, password: e.target.value })
              }
            />
            <p>
              <span>
                <input type="checkbox" id="remember" />
              </span>
              By creating an account, I agree to our terms of use and privacy
              policy
            </p>
            <button type="submit">Create Account</button>
          </form>
          <p>
            Already have an account?
            <span onClick={() => navigate("/login")}>Sign In </span>
          </p>
        </div>
      </div>
      <div className="loginImage">Your Personal Job Finder</div>
    </div>
  );
}
