import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faLocationDot, faPhone, faVoicemail, faEdit} from '@fortawesome/free-solid-svg-icons'
import amIMG from '../assets/images/profileB.jpg';
import { useHistory } from "react-router-dom";

const MenteeProfile = () => {
    const [userData, setUserData] = useState("");
    const history = useHistory();
  

    useEffect(() => {
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                history.push("/login");
                console.log("token missing");
            }

            const response = await fetch("http://localhost:3001/api/mentee-profile", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                
            });

            if (!response.ok) {
              console.lod("Response error")
            } else {
                const data = await response.json();
                setUserData(data);
            }
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="content5 p-4 mb-5">
                <div className="col-lg-2 col-sm-5 col-xs-4">
                    <div className="amIMG">
                        <img className='w-100' src={amIMG} alt="" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <h3 className='fw-bold'>{userData.fullName}</h3>
                        <h6>Student at {userData.school} <br /><span>{userData.department}</span></h6>
                        <div className='mt-4'>
                            <div className="line1">
                                <FontAwesomeIcon className='icon-small' icon={faLocationDot} />
                                <p>{userData.location}</p>
                            </div>
                            <div className="line1">
                                <FontAwesomeIcon className='icon-small' icon={faPhone} />
                                <p>({userData.phone})</p>
                            </div>
                            <div className="line1">
                                <FontAwesomeIcon className='icon-small' icon={faLanguage} />
                                <p>{userData.language}</p>
                            </div>
                            <div className="line1">
                                <FontAwesomeIcon className='icon-small' icon={faVoicemail} />
                                <p>{userData.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5>Skills</h5>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="skillsBox">
                                    <p>{userData?.skills}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="AboutM mt-5">
                    <h3 className='fw-bold'>Bio</h3>
                    <p>{userData.bio}</p>
                </div>
                <div className="messageMentor">
                    <div className="row">
                        <div className="col-lg-2">
                            <FontAwesomeIcon className='icon-large w-100 mt-3 mb-2' icon={faEdit} />
                        </div>
                        <div className='col-lg-6'>
                            <h4>Edit Profile</h4>
                            <p>You can edit your profile here</p>
                        </div>
                        <div className="col-lg-4">
                            <Link id='messagebtn' className='btn rounded-5 text-white mt-3 ms-4' to = '/editMenteeprofile'>Edit Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenteeProfile;
