import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "./Usercontext";
import loginImage from "./assets/images/loginp.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("mentors");
  const history = useHistory();
  const { login } = useContext(UserContext);
  

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, userType }),
       
      });
  
      const data = await response.json();
  
      if (data.success) {
        // Save the custom token to local storage
        localStorage.setItem("token", data.token);
        login();
        // Redirect the user to the dashboard
        if (userType === "mentors") {
          history.push("/mentorProfile");
        } else {
          history.push("/menteeProfile");
        }
  
       
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Error in login endpoint:", error);
      alert("An error occurred while logging in. Please try again later.");
    }
  };

  return (
    <center>
      <div className="login-container rounded-5 mb-4 col-lg-8 col-md-6 col-sm-9">
      <div className="row w-100 ">
      <div className="col-lg-6">
          <img className="w-100" src={loginImage} />
      </div>
      <div className="col-lg-6">
        <h1>Login</h1>
        <div className="user-type">
          <button className={userType === "mentors"? "active" : ""} onClick={() => handleUserTypeChange("mentors")}>
            Mentor
          </button>
          <button className={userType === "mentees"? "active" : ""} onClick={() => handleUserTypeChange("mentees")}>
            Mentee
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <input className="login-input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="clauvet@gmail.com"/>
          <input className="login-input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password"/>
          <center>
          <button className="m-2 w-50 px-5 rounded-2" type="submit">
            LogIn as {userType}
          </button>
          </center>
        </form>
        <div className="py-3">
          <Link className="loginLinks" to="/signUp">
            Forgot password
          </Link>
          <p>Do not have an account?</p>
          <Link className="loginLinks" to="/signUp">
            Sign Up as either mentee or mentor
          </Link>
        </div>
        </div>
      </div>
      </div>
    </center>
  );
};

export default Login;