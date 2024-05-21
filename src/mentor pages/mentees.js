import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import profileA from '../assets/images/profilA.jpg';
import profileB from '../assets/images/profileB.jpg';

const menteeImages = [profileA, profileB];

const Mentees = () => {
const [menteeData, setMenteeData] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchMenteeData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/mentees');
      if(!response.ok){
        throw new Error('Unable to access the endpoint');
      }
      const data = await response.json();
      setMenteeData(data);
    } catch(error) {
      console.error('Error fetching mentee', error);
      setError(error.message);
    }
  };

  fetchMenteeData();
}, []);

  return (
    <div className="main">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mentees-list">
        <div className="row">
          {menteeData.map((mentee) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={mentee.id}>
              <div className="mentee-card">
                <div className="mentee-image">
                  <img className="w-100 h-100" src={menteeImages[Math.floor(Math.random() * menteeImages.length)]} alt={mentee.fullName} />
                </div>
                <div className="mentee-content">
                  <h2 className="fs-5 fw-bold mb-3">{mentee.fullName}</h2>
                  <p className="mb-3">{mentee.speciality}</p>
                  <p className="mb-3">{mentee.bio}</p>
                  <Link to={`/menteeProfile/${mentee.id}`}>
                    <button className="btn bg-black rounded-5 text-white">View Profile</button>
                  </Link>
                  <button className="btn btn-secondary rounded-5 text-white ml-3">
                    <FontAwesomeIcon icon={faEnvelope} /> Message
                  </button>
                  <Link to="/message">message</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentees;