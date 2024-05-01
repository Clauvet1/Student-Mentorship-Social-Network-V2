import React from 'react';
import { Link } from 'react-router-dom';

const mentorSearch = () => {
  return (
    <div className="mentorContent my-5">
      <div className="filter ms-5 fw-bold">
        <div className="mx-5">
          <input type="checkbox" name="" id="" />
          Lecturers
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          Atrium
        </div>
      </div>
      <div className="student-mentor-matching mt-5">
        <div className="container">
          {[...Array(4)].map((mentor, index) => (
            <div id="mentorDesc" className="row" key={index}>
              <div className="col-lg-3">
                <div id="shadow">
                  <div className="mentorIMG">
                    <img
                      className="w-100"
                      src="https://via.placeholder.com/150"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-9 p-4">
                <div className="container">
                  <h2>Clauvet Yome</h2>
                  <h5>Professor at College of Technology</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus eius eveniet recusandae consectetur! Omnis beatae
                    porro amet hic ea officia quibusdam quia atque, sunt libero
                    fugiat officiis nostrum eius incidunt.
                  </p>
                  <Link to="/aboutMentor">
                    <button className="btn bg-black text-white rounded-5 px-4 mt-2">
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default mentorSearch;
