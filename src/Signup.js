import { useState } from "react";

const Signup = () => {
    const [userType, setUserType] = useState('mentor');
  
    const handleUserTypeChange = (type) => {
      setUserType(type);
    };
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const userData = { fullName, email, password };
      console.log('User Data:', userData);
  
    
      try {
        const response = await fetch('http://localhost:3001/Signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
        if (response.ok) {
          console.log('User data sent successfully to the server');
        } else {
          console.error('Failed to send user data to the server');
        }
      } catch (error) {
        console.error('Error sending user data:', error);
      }
    };
    
  
    return (
      <div className="login-container">
        <h1>Signup</h1>
        <div className="user-type">
          <button className={userType === 'mentor' ? 'active' : ''} onClick={() => handleUserTypeChange('mentor')}>Mentor</button>
          <button className={userType === 'mentee' ? 'active' : ''} onClick={() => handleUserTypeChange('mentee')}>Mentee</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={fullName} onChange={e => setFullName(e.target.value)}  placeholder="Full Name" />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <button className=" m-2 px-5 rounded-5" >Signup as {userType}</button>
        </form>
      </div>
    );
  };
  
  export default Signup;
  