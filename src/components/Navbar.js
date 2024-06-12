import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/sm1.png";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Usercontext";
import {jwtDecode} from 'jwt-decode';
import profile from '../assets/images/consultancy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(UserContext);
  const history = useHistory();
  const [userType, setUserType] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        logout();
        localStorage.removeItem("token");
        history.push("/login");
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    if (isLoggedIn) {
      const decodeToken = async () => {
        const token = localStorage.getItem("token");
        
        if (!token) {
          history.push("/login");
          console.log("token missing");
        } else {
          const decodedToken = jwtDecode(token);
          console.log('token frontend: ', decodedToken);
          const userType = decodedToken.claims?.userType;
          const userName = decodedToken.claims?.userName;
          const email = decodedToken.claims?.email;
          console.log("Logged in user's type:", userType);
          console.log("Logged in user's name:", userName);
          console.log("Logged in user's email:", email);
          setUserType(userType);
          setUserName(userName);
          setEmail(email)
        }
      }
      
      decodeToken();
    }
  }, [history, isLoggedIn])
 

  return (
    <div className="bar shadow-lg rounded-5 p-1 fw-bold">
      <nav className="navbar navbar-expand-xxl  navbar-white bg-white rounded-5" aria-label="Seventh navbar example">
        <div className="container-fluid">
          <Link className="navbar-brand mx-3" id="IMG-logo" to="/">
            <img className="w-100" src={logo} alt="Logo" />
          </Link>
          <Link className="navbar-brand" to="/">SMentorship</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleXxl">
            <ul className="navbar-nav me-auto ms-5 mb-2 mb-sm-0">
            {isLoggedIn? (
              <li className="nav-item dropdown ms-5">
                <Link className="nav-link dropdown-toggle ms-5" to="" data-bs-toggle="dropdown" aria-expanded="false"> Browse</Link>
                <ul className="dropdown-menu">
                 
                  <li><Link className="dropdown-item" to="/mentors">  Mentors</Link> </li>
                  <li><Link className="dropdown-item" to="/mentees">  Mentees</Link> </li>
                </ul>
              </li>
            ):(
              <li className="mx-5"></li>
            )
          }
              <li>
                <form role="search" className="pe-5 me-2"> <input   className="form-control rounded-5 me-5 pe-5"   id="search"   type="search"   placeholder="Search"   aria-label="Search" />
                </form>
              </li>
              <li className="nav-item ms-5 ps-5">
                <Link to="/testimonials" className="nav-link active" id="success" aria-current="page"> Success Stories </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" to="/"
                > More
                </Link>
                <ul className="dropdown-menu"> <li>   <Link to="/aboutUs" className="dropdown-item">     AboutUs   </Link> </li>
                <li>   <Link className="dropdown-item" to="/faq">     FAQs   </Link> </li>
                <li>   <Link className="dropdown-item" to="/feedBack">     Feed-Back   </Link> </li>
                </ul>
              </li>

              {isLoggedIn ? (
                <>
                <li   id="navMore"><div className="profileIMG"> <img className='w-100' src={profile} alt="profileImage" /></div></li>
                 <li className="nav-item dropdown">
                  
                 <Link className="row nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" to="/"> 
                 {userName} 
                 </Link>
                 <ul className="dropdown-menu">
                 <li> <Link className="dropdown-item " id="profile-name" to="/">  {userName} <br/> <span >{email}</span>  </Link> </li>
                 {userType === 'mentees'? (
                    <li><Link className="dropdown-item" to="/menteeProfile">Profile</Link> </li>
                  ) : (
                    <li><Link className="dropdown-item" to="/mentorProfile">Profile</Link> </li>
                  )}
                
                 <li className="logout">   <FontAwesomeIcon className='logout-icon icon-small mt-3 mb-2' icon={faArrowRightToBracket} /> <button className=" nav-link" id="logout" onClick={handleLogout}>LogOut</button> </li>
                 </ul>
               </li>
                
               </>
              ) : (
                <><li className="nav-item" id="navMore">   <Link className="nav-link" to="/login">     Log In   </Link> </li> 
                <li className="nav-item rounded-5" id="signUp">     <Link className="nav-link btn border border-none rounded-5" id="link-color" to="/signup">Sign Up</Link> </li>
                </>
              )}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;