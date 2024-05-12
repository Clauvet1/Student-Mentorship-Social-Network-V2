import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faGithub, faXTwitter, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-box">
                                <h1 className="text-secondary">You can get to Us through our<br/> <span className="fs-2 text-primary"> social media platforms</span><br/></h1>
                            
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-box">
                                <h2 className="text-white fs-3 mb-3">Countries where Our Services are available</h2>
                            <ul >
                                <li><Link to="" className="text-decoration-none text-white">Cameroon</Link></li>
                                <li><Link to="" className="text-decoration-none text-white">Nigeria</Link></li>
                                <li><Link to="" className="text-decoration-none text-white">USA</Link></li>
                                <li><Link to="" className="text-decoration-none text-white">England</Link></li>
                                <li><Link to="" className="text-decoration-none text-white">Ghana</Link></li>
                                <li><Link to="" className="text-decoration-none text-white">Mexico...</Link></li>
                            </ul>
                            </div>                    
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-box">
                                <h2 className="text-white fs-3">Contact</h2>
                                <p className="text-info fs-5">You can email us and</p>
                                <h2 className="text-info fs-5 mb-5">Follow us on</h2>
                                <p className="socials">
                                    <Link to="https://github.com/Clauvet1"><FontAwesomeIcon className='icon-large' icon={faGithub} /></Link> 
                                    <Link to=""><FontAwesomeIcon className='icon-large' icon={faInstagram} /></Link>
                                        <Link to=""><FontAwesomeIcon className='icon-large' icon={faFacebook} /></Link>
                                        <Link to=""><FontAwesomeIcon className='icon-large' icon={faWhatsapp} /></Link>
                                        <Link to=""><FontAwesomeIcon className='icon-large' icon={faXTwitter} /></Link>    
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="text-secondary">2024 All Rights Reserved.Designed by Clauvet Yome M.</p>
                </div>
                </div>
     );
}
 
export default Footer;