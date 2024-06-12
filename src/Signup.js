import { useState } from "react";
import { useHistory } from "react-router-dom";
import loginImage from "./assets/images/female.png"

const Signup = () => {
  const [userType, setUserType] = useState("mentors");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialty, setSpecialty] = useState(""); 
  const history = useHistory();

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { userType, fullName, email, password };
    if (userType === "mentor") {
      userData.specialty = specialty;
    }

    try {
      const response = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        console.log("User data sent successfully to the server");
        history.push("/login");
      } else {
        console.error("Failed to send user data to the server");
      }
    } catch (error) {
      console.error("Error sending user data:", error);
    } finally {
      setFullName("");
      setEmail("");
      setPassword("");
      setSpecialty(""); // Added for mentors
    }
  };

  return (
    <center className="mb-5">
    <div className="login-container rounded-5 mb-5 mt-5 col-lg-8 col-md-6 col-sm-9">
    <div className="row w-100 ">
      <div className="col-lg-6 px-5" id="lim">
          <img className="w-100" src={loginImage} />
      </div>
      <div className="col-lg-6">
      <h1>Signup</h1>
      <div className="user-type">
          <button className={userType === "mentors"? "active" : ""} onClick={() => handleUserTypeChange("mentors")}>
            Mentor
          </button>
          <button className={userType === "mentees"? "active" : ""} onClick={() => handleUserTypeChange("mentees")}>
            Mentee
          </button>
        </div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="login-input" value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder="Full Name"/>
        <input type="email" className="login-input" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
        <input type="password" className="login-input" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password"/>
        {userType === "mentors" && (
          <input type="text" className="login-input" value={specialty} onChange={(event) => setSpecialty(event.target.value)} placeholder="Specialty"/>
        )}
       <center>
        <button className="m-2 w-50 px-5 rounded-2 mt-5" type="submit">
          Signup as {userType}
        </button>
        </center>
      </form>
      </div>
    </div>
    </div>
    </center>
  );
};

export default Signup;
