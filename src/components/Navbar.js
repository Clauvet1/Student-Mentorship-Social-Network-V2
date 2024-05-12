import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/sm1.png";
import { UserContext } from "../Usercontext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {

        setIsLoggedIn(false);
        // Redirect the user to the login page or any other page you want
        window.location.href = '/login';
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bar shadow-lg rounded-5 p-1 fw-bold">
      <nav className="navbar navbar-expand-xxl  navbar-white bg-white rounded-5" aria-label="Seventh navbar example">
        <div className="container-fluid">
          <Link className="navbar-brand mx-3" id="IMG-logo" to="/">
            <img className="w-100" src={logo} alt="Logo" />
          </Link>
          <Link className="navbar-brand" to="/">
            SMentorship
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExampleXxl"
            aria-controls="navbarsExampleXxl"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleXxl">
            <ul className="navbar-nav me-auto ms-5 mb-2 mb-sm-0">
              <li className="nav-item dropdown ms-5">
                <Link
                  className="nav-link dropdown-toggle ms-5"
                  to=""
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Browse
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/mentors">
                      Mentors
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menteeProfile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mentees">
                      mentees
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <form role="search" className="pe-5 me-2">
                  <input
                    className="form-control rounded-5 me-5 pe-5"
                    id="search"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </li>
              <li className="nav-item ms-5 ps-5">
                <Link
                  to="/testimonials"
                  className="nav-link active"
                  aria-current="page"
                >
                  Success Stories
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="/"
                >
                  More
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/aboutUs" className="dropdown-item">
                      AboutUs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faq">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/feedBack">
                      Feed-Back
                    </Link>
                  </li>
                </ul>
              </li>
              {isLoggedIn ? (
                <li className="nav-item" id="navMore">
                   <button className="nav-link" onClick={handleLogout}>Log Out</button>
                </li>
              ) : (
                <li className="nav-item" id="navMore">
                  <Link className="nav-link" to="/login">
                    Log in
                  </Link>
                </li>
              )}
              <li className="nav-item rounded-5" id="signUp">
                <Link className="nav-link btn rounded-5" to="/signup">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;