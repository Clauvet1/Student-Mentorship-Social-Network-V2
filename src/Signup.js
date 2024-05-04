import { useState } from "react";

const Signup = () => {
  const [userType, setUserType] = useState("mentor");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { userType, fullName, email, password };
    console.log("User Data:", userData);

    try {
      const response = await fetch("http://localhost:3001/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        console.log("User data sent successfully to the server");
      } else {
        console.error("Failed to send user data to the server");
      }
    } catch (error) {
      console.error("Error sending user data:", error);
    } finally {
      setFullName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <h1>Signup</h1>
      <div className="user-type">
        <button className={userType === "mentor" ? "active" : ""} onClick={() => handleUserTypeChange("mentor")}>
          Mentor
        </button>
        <button className={userType === "mentee" ? "active" : ""} onClick={() => handleUserTypeChange("mentee")}>
          Mentee
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder="Full Name" />
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
        <button className="m-2 px-5 rounded-5" type="submit">
          Signup as {userType}
        </button>
      </form>
    </div>
  );
};

export default Signup;