import React from 'react';
import user1 from '../assets/images/pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const menteeData = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Software Engineer',
    image: user1,
    bio: 'John is a software engineer with 5 years of experience in the industry. He enjoys hiking and playing guitar in his free time.',
    message: 'Hello John, how is your day going?',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Product Manager',
    image: user1,
    bio: 'Jane is a product manager with a background in computer science. She enjoys reading and playing tennis in her free time.',
    message: 'Hi Jane, I hope you are doing well!',
  },
  // Add more mentee data as needed
];

const Mentees = () => {
  return (
    <div className="main">
      <div className="mentees-list">
        <div className="row">
          {menteeData.map((mentee) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={mentee.id}>
              <div className="mentee-card">
                <div className="mentee-image">
                  <img className="w-100 h-100" src={mentee.image} alt={mentee.name} />
                </div>
                <div className="mentee-content">
                  <h2 className="fs-5 fw-bold mb-3">{mentee.name}</h2>
                  <p className="mb-3">{mentee.title}</p>
                  <p className="mb-3">{mentee.bio}</p>
                  <Link to={`/mentees/${mentee.id}`}>
                    <button className="btn bg-black rounded-5 text-white">View Profile</button>
                  </Link>
                  <button className="btn btn-secondary rounded-5 text-white ml-3" onClick={() => alert(mentee.message)}>
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