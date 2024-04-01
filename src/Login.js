import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
    const [userType, setUserType] = useState('mentor');
  
    const handleUserTypeChange = (type) => {
      setUserType(type);
    };
  
    const handleLogin = () => {
      // Add your login logic here
      alert('Redirecting to User Profile');
      history.push('/mentorProfile')
    };

    const history = useHistory();
  
    return (
      <div className="login-container">
        <h1>Login</h1>
        <div className="user-type">
          <button className={userType === 'mentor' ? 'active' : ''} onClick={() => handleUserTypeChange('mentor')}>Mentor</button>
          <button className={userType === 'mentee' ? 'active' : ''} onClick={() => handleUserTypeChange('mentee')}>Mentee</button>
        </div>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className=" mt-4 px-5 rounded-5" onClick={handleLogin}>Login as {userType}</button>
        </form>
        <div className="py-3">
          <Link className="loginLinks" to="/signUp">Forgot password</Link>
          <p>Do no have an account?</p>
          <Link className="loginLinks" to="/signUp">SignUp as either mentee or mentor</Link>
        </div>
      </div>
    );
  };
  
  export default Login;