import user1 from './assets/images/pic.jpg'
import Messaging from './assets/images/messaging.jpg'
import SMM from './assets/images/peaple-connect.png'    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faMapLocation, faCalendarWeek, faCircleNodes, faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Home = () => {
    return ( 
        <div className="main">
            <div className="content1">
                <div className="row">
                    <div className="col-lg-6 mb-5 col-md-12 col-sm-12">
                        <div className="orangeBox">
                        <h1 className='mb-5 fw-bold'>Get advice from Mentors</h1>
                        <p className='mb-5'>Talk with other successful students from your Institution, and become moltivated.</p>
                     <Link to="/mentors"><button className='btn bg-black rounded-5 text-white'>Find a mentor</button></Link> 
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="box">
                            <div className="IMG">
                                <img className='IMG1 w-100 h-100' src={user1} alt="" />
                            </div>
                            <div className="boxContent w-75">
                            <center><h2 className='fs-1 fw-bold'>Clauvet Yome</h2>
                                <p className=''>Director of Scholar Institute</p>
                                <hr />
                                <h3 className='pb-5'>Scholar Institute</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="student-mentor-matching">
                <div className="row">
                    <div className="SMM col-lg-6 col-md-6 col-sm-12">
                        <h2 className='fw-bold my-4'>Student mentorship matching</h2>
                        <div className="line">
                        <FontAwesomeIcon className='icon-large' icon={faLanguage} />
                        <p>Language will be used to match mentee to a suitable mentor</p>
                        </div>
                        <div className="line">
                        <FontAwesomeIcon className='icon-large' icon={faMapLocation} />
                        <p>The geographical location of both the mentee and mentor is considered when matching</p>
                        </div>
                        <div className="line">
                        <FontAwesomeIcon className='icon-large' icon={faCalendarWeek} />
                        <p>Mentors schedule is considered when matching them with mentee, that is a mentor is available time is more likely to be a match</p>
                        </div>
                        <div className="line">
                        <FontAwesomeIcon className='icon-large' icon={faCircleNodes} />
                        <p>Both Mentee's and Mentor's shared interest are considered during the matching</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="IMG-SMM mx-auto">
                            <img className='w-100' src={SMM} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="student-mentor-matching pt-5">
                <div className="row my-4">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="IMG-SMM mx-auto">
                            <img className='w-100' src={Messaging} alt="" />
                        </div>
                    </div>
                    <div className="SMM col-lg-6 col-md-6 col-sm-12">
                        <h2 className='fw-bold my-4'>Message your mentor</h2>
                        <div className="line">
                        <FontAwesomeIcon className='icon-large' icon={faFacebookMessenger} />
                        <p>Send messages to either mentees or mentors. Access yoyr messages at any time from your desktop or mobile device</p>
                        </div>
                        <div className="line">
                        <FontAwesomeIcon className='icon-large' icon={faCheckDouble} />
                        <p>Share an agenda with topic to discuss, also share resources with mentees</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;