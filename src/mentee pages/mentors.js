import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profileA from '../assets/images/computer.png';
import profileB from '../assets/images/female.png';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const mentorImages = [profileA, profileB];

const Mentors = () => {
  const [mentorData, setMentorData] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const history = useHistory();

  useEffect(() => {
    if(!token){
      history.push('./login');
    }
    const fetchMentorData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/mentors');
        if (!response.ok) {
          throw new Error('Unable to access the endpoint');
        }
        const data = await response.json();
        setMentorData(data);
      } catch (error) {
        console.error('Error fetching mentors:', error);
        setError(error.message);
      }
    };

    fetchMentorData();
  }, [history, token]);

  return (
    <div className="mentorContent my-5">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="filter ms-5 fw-bold">
        <div className='mx-5'> <input  type="checkbox" name="" id="" /> Lecturers</div>
        <div> <input type="checkbox" name="" id="" /> Atrium</div>
      </div>
      <div className="student-mentor-matching mt-5">
        <div className="container">
          {mentorData.map((mentor) => (
            <div id='mentorDesc' key={mentor.id} className="row">
              <div className="col-lg-3">
                <div id="shadow">
                  <div className="mentorIMG">
                    <img className='w-100 H-100' src={mentorImages[Math.floor(Math.random() * mentorImages.length)]} alt={mentor.fullName} />
                    <div className="placeholder-image"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 p-4">
                <div className="container">
                    <h2>{mentor.fullName}</h2>
                    <h5 className="mColor">{mentor.specialty}</h5>
                    <p>{mentor.bio}</p>
                    <Link to={`/mentorProfileView/${mentor.id}`}>
                      <button id='mView' className='btn text-white rounded-5 px-4 mt-2'>View Profile</button>
                    </Link>
                  <Link className="btn btn-secondary rounded-5 text-white ms-2 mt-2 ml-3" to={`/message/${mentor.id}`}><FontAwesomeIcon icon={faEnvelope} /> message</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentors;