import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import profileA from '../assets/images/consultancy.png';
import profileB from '../assets/images/mentorship.png';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const menteeImages = [profileA, profileB];

const Mentees = () => {
const [menteeData, setMenteeData] = useState([]);
const [error, setError] = useState(null);
const history = useHistory();
const token = localStorage.getItem('token');


useEffect(() => {
  if(!token){
    history.push('./login');
  }
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
}, [history, token]);

  return (
    <div className="main">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mentees-list">
        <div className="row">
          {menteeData.map((mentee) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={mentee.id}>
              <div className="mentee-card">
                <div className="mentee-image">
                  <img className="w-50 h-150" src={menteeImages[Math.floor(Math.random() * menteeImages.length)]} alt={mentee.fullName} />
                </div>
                <div className="mentee-content">
                  <h4 className=" fw-bold mb-3">{mentee.fullName}</h4>
                  <h5 className="mb-3 mColor">{mentee.speciality}</h5>
                  <p className="mb-3">{mentee.bio}</p>
                  <Link to={`/menteeProfileView/${mentee.id}`}>
                  <button id='mView' className='btn text-white rounded-5 px-4 mt-2'>View Profile</button>
                  </Link>
                  <Link className="btn btn-secondary rounded-5 text-white ms-2 mt-2 ml-3" to={`/message/${mentee.id}`}><FontAwesomeIcon icon={faEnvelope} /> message</Link>
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