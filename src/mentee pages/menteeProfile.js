import amIMG from '../assets/images/pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faLocationDot, faPhone, faVoicemail, faEdit} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const MenteeProfile = () => {
    const [phone, setPhone] = useState(682876311)
    const [language, setLanguage] = useState('English')
    const [skills, setSkills] = useState('Software Engineer')
    const [menteeName, setMenteeName] = useState("Clauvet Yome")
    const [email, setEmail] = useState('mongambac@gmail.com')
    const [school, setSchool] = useState('College of Technology')
    const [department, setDepartment] = useState('Computer Department')
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
                    <h3 className='fw-bold'>{menteeName}</h3>
                    <h6>Student at {school} <br /><span>{department}</span></h6>
                    <div className='mt-4'>
                    <div className="line1">
                    <FontAwesomeIcon className='icon-small' icon={faLocationDot} />
                    <p>Cameroon</p>
                    </div>
                    <div className="line1">
                    <FontAwesomeIcon className='icon-small' icon={faPhone} />
                    <p>({phone})</p>
                    </div>
                    <div className="line1">
                    <FontAwesomeIcon className='icon-small' icon={faLanguage} />
                    <p>{language}</p>
                    </div>
                    <div className="line1">
                    <FontAwesomeIcon className='icon-small' icon={faVoicemail} />
                    <p>{email}</p>
                    </div>
                   
                    </div>
                </div>
                <div className="col-lg-6">
                    <h5>Skills</h5>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="skillsBox">
                            <p>{skills}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="skillsBox">
                            <p>{skills}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="skillsBox">
                            <p>{skills}</p>
                        </div>
                    </div>
                    </div>
                    </div>
               </div>
            <hr />
            <div className="AboutM mt-5">
                <h3 className='fw-bold'>Bio</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque amet nesciunt, ut iure, quae maxime minus accusamus distinctio fugit debitis sequi ex ratione a et tempore quisquam odio omnis id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia iusto id, hic sunt consequuntur reprehenderit quis necessitatibus eaque voluptas soluta quidem suscipit provident vitae saepe consectetur, temporibus tenetur. Id!
                </p>
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
                        <a id='messagebtn' className='btn rounded-5 text-white mt-3 ms-4' href='#'>Edit Profile</a>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default MenteeProfile;