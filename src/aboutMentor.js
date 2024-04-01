import amIMG from './assets/images/pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faLocationDot, faStar, faClock} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const AboutMentor = () => {
    const rating = 5.0;
    const reviews = 9;
    const lastActive = 1;
    const Language = 'English';
    const Skills = 'Software Engineering';
    const mentorName = 'Clauvet Yome';
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
                    <h3 className='fw-bold'>{mentorName}</h3>
                    <h6>Professor at College of Technology <br /><span>Mentor and Lecturer</span></h6>
                    <div className='mt-4'>
                    <div className="line1">
                    <FontAwesomeIcon className='icon-small' icon={faLocationDot} />
                    <p>Cameroon</p>
                    </div>
                    <div className="line1">
                    <FontAwesomeIcon className='icon-small' icon={faStar} />
                    <p>{rating} ({reviews} reviews)</p>
                    </div>
                    <div className="line1">
                    <FontAwesomeIcon className='icon-small' icon={faLanguage} />
                    <p>{Language}</p>
                    </div>
                    <div className="line1">
                    <FontAwesomeIcon className='icon-small' icon={faClock} />
                    <p>{lastActive} day(s) ago</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h5>Skills</h5>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="skillsBox">
                            <p>{Skills}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="skillsBox">
                            <p>{Skills}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="skillsBox">
                            <p>{Skills}</p>
                        </div>
                    </div>
                    </div>
                    </div>
               </div>
            <hr />
            <div className="AboutM mt-5">
                <h3 className='fw-bold'>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque amet nesciunt, ut iure, quae maxime minus accusamus distinctio fugit debitis sequi ex ratione a et tempore quisquam odio omnis id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia iusto id, hic sunt consequuntur reprehenderit quis necessitatibus eaque voluptas soluta quidem suscipit provident vitae saepe consectetur, temporibus tenetur. Id!
                </p>
            </div>
            <div className="messageMentor">
                <div className="row">
                    <div className="col-lg-2">
                    <FontAwesomeIcon className='icon-large w-100 mt-3 mb-2' icon={faWhatsapp} />
                    </div>
                    <div className='col-lg-6'>
                        <h4>Message Mentor</h4>
                        <p>You can message {mentorName} on whatsApp</p>
                    </div>
                    <div className="col-lg-4">
                        <a id='messagebtn' className='btn rounded-5 text-white mt-3 ms-4' href='#'>Get in touch</a>
                    </div>
                </div>

            </div>
            </div>
        </div>
     );
}
 
export default AboutMentor;