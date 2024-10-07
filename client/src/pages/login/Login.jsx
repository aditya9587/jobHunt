import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAuth } from "../../services";
import "./Login.css";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  async function handleLogin(e) {
    e.preventDefault();
    const res = await loginAuth(loginUser);
    console.log(res.response);
    if (res.status === 200) {
      const token = res.data;
      localStorage.setItem("token", token);
      navigate("/");
    } else if (res.status === 400) {
      setError(true);
    }
  }

  return (
    <div className="container">
      <div className="loginDiv">
        <h2>Already have an account?</h2>
        <p>Your personal job finder is here</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="email"
            value={loginUser.email}
            onChange={(e) =>
              setLoginUser({ ...loginUser, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="password"
            value={loginUser.password}
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
          />
          {error ? <p style={{color:"red", fontWeight:"bold", textAlign:"center", fontSize:"1rem"}}> Invalid Username or Password</p>: null}
          <button type="submit">SIGN IN</button>
        </form>
        <p>
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
      <div className="loginImage">Your Personal Job Finder</div>
    </div>
  );
}
