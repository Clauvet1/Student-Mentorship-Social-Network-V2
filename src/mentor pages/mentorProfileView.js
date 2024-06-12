import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faLocationDot, faMessage, faPhone, faVoicemail} from '@fortawesome/free-solid-svg-icons'
import amIMG from '../assets/images/female.png';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';

const MentorProfileView = () => {
    const [userData, setUserData] = useState("");
    const history = useHistory();
    const {id: mentorId} = useParams();

    useEffect(() => {
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        try {

            const response = await fetch(`http://localhost:3001/api/mentor-profile-view/${mentorId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
              console.log("Response error")
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
            <div className="col-lg-8 col-md-8 col-sm-10 col-xs-6 p-4 mb-5">
                <div className="col-lg-4 col-md-8 col-sm-8 col-xs-4">
                    <div className="amIMG w-50">
                        <img className='w-100' src={amIMG} alt="profileImage" />
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
                            <FontAwesomeIcon className='icon-large w-100 mt-3 mb-2' icon={faMessage} />
                        </div>
                        <div className='col-lg-6'>
                            <h4>Message mentor</h4>
                            <p>You can Communicate with mentor from here</p>
                        </div>
                        <div className="col-lg-4">
                            <Link id='messagebtn' className='btn rounded-5 text-white mt-3 ms-4' to = {`/message/${userData.id}`}>Message Mentor</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorProfileView;
