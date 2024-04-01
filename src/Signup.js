import { useState } from "react";

const Signup = () => {
    const [userType, setUserType] = useState('mentor');
  
    const handleUserTypeChange = (type) => {
      setUserType(type);
    };
  
    const handleSignup = () => {
      // Add your signup logic here
    //   console.log(Signing up as ${userType});
    };
  
    return (
      <div className="login-container">
        <h1>Signup</h1>
        <div className="user-type">
          <button className={userType === 'mentor' ? 'active' : ''} onClick={() => handleUserTypeChange('mentor')}>Mentor</button>
          <button className={userType === 'mentee' ? 'active' : ''} onClick={() => handleUserTypeChange('mentee')}>Mentee</button>
        </div>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className=" m-2 px-5 rounded-5" onClick={handleSignup}>Signup as {userType}</button>
        </form>
      </div>
    );
  };
  
  export default Signup;
  