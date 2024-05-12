import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faGithub, faXTwitter, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import user1 from './assets/images/pic.jpg'
import people from './assets/images/people.png'
import aboutVideo from './assets/videos/Activities & The Activity Lifecycle - Android Basics 2023.mp4'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const AboutUs = () => {
    return ( 
        <div className="aboutUs">
          <div className="aboutUscontent1">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="text-black">SERVICE PROVIDER</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos dolore reiciendis dignissimos quaerat, quidem fugit repellendus delectus pariatur magni officia voluptatem. Obcaecati fugit voluptatem minima voluptas incidunt a consectetur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos dolore reiciendis dignissimos quaerat, quidem fugit repellendus delectus pariatur magni officia voluptatem. Obcaecati fugit voluptatem minima voluptas incidunt a consectetur?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus voluptate quam dignissimos soluta ullam maxime ea. Voluptate, nulla quidem, eveniet deserunt vel veniam tenetur ea sed ex ad vitae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum, natus quos, tempora incidunt cumque necessitatibus accusamus hic facere explicabo reiciendis, tenetur culpa earum nisi et. Magnam suscipit quisquam corrupti.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus voluptate quam dignissimos soluta ullam maxime ea. Voluptate, nulla quidem, eveniet deserunt vel veniam tenetur ea sed ex ad vitae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum, natus quos, tempora incidunt cumque necessitatibus accusamus hic facere explicabo reiciendis, tenetur culpa earum nisi et. Magnam suscipit quisquam corrupti.
                    </p>
                </div>
                <div className="col-lg-6">
                    <video className="shadow-lg" width="480px" height="360px" controls>
                        <source src={aboutVideo} type="video/mp4"/>
                    </video>
                    <Link href="http://">
                        <h3 className="apply">Apply as a Mentee</h3>
                    </Link>
                   

                
                </div>
            </div>
          </div>
          <div className="aboutUscontent2">
            <div className="bg_red">
                <div className="row">
                    <div className="col-lg-6">
                        WE Offer one of the best mentorship services on the internet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, minima! Culpa molestiae, dolores consectetur reiciendis at alias veritatis sunt. Cupiditate, dolores architecto laudantium magni necessitatibus numquam nihil neque explicabo ex.
                    </div>
                    <div className="col-lg-6 w-25">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos dolore reiciendis dignissimos quaerat, quidem fugit repellendus delectus pariatur magni officia voluptatem. Obcaecati fugit voluptatem minima voluptas incidunt a consectetur?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus temporibus voluptate quam dignissimos soluta ullam maxime ea. Voluptate, nulla quidem, eveniet deserunt vel veniam tenetur ea sed ex ad vitae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum, natus quos, tempora incidunt cumque necessitatibus accusamus hic facere explicabo reiciendis, tenetur culpa earum nisi et. Magnam suscipit quisquam corrupti.
                    </div>
                </div>
                
            </div>
            <div className="IMG_worker shadow-lg">
                  <img className="img" src={people} alt=""/>
            </div>
            <div className="IMG_workerB shadow-lg">
              <div className="row">
                <div className="col-lg-3">
                  <img className="img" src={user1} alt=""/>
                  </div>
                  <div className="col-lg-8 p-4">
                    <h1>OUR SERVICES</h1>
                    <ul>
                      <li>Mentor Matching</li>
                      <li>Alumni Mentors</li>
                      <li>Social Network</li>
                      <li>Messaging</li>
                      <li>...</li>
                      <li>...</li>
                    </ul>
                  </div>
              </div>
              
            </div>
          </div>
          <div className="content3">
            <div className="results">
              <h1>REAL PEOPLE. REAL <br/> RESULTS</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo facere voluptatibus, distinctio officiis fugiat pariatur hic unde assumenda nam quidem perspiciatis quod maxime magni aperiam minus commodi explicabo laborum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus libero unde non minima, exercitationem eveniet eligendi architecto distinctio dignissimos, blanditiis natus provident! Nam assumenda iste numquam, magnam soluta qui.</p>
            </div>
            <div className="views">
              <div className="row">
                <div className="col-lg-4 text-center">
                  <img className="imgX" src={user1} alt=""/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, itaque animi iste est non amet rerum excepturi magni facilis optio veniam nisi, ipsam dolor. Atque autem maxime quod incidunt impedit?
                     dolor sit amet consectetur adipisicing elit. Repellat corporis vitae iure magni aperiam recusandae ea perferendis ex amet voluptate optio, error, eligendi, nisi quasi reprehenderit magnam provident ut excepturi.</p>
                </div>
                <div className="col-lg-4 text-center">
                  <img className="imgX" src={people} alt=""/>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, eveniet possimus perferendis cupiditate, accusamus voluptas porro aspernatur itaque odio vel, minima quam fugiat. Distinctio tempore voluptatem quidem maiores, error molestiae!
                     dolor sit amet consectetur adipisicing elit. Repellat corporis vitae iure magni aperiam recusandae ea perferendis ex amet voluptate optio, error, eligendi, nisi quasi reprehenderit magnam provident ut excepturi.</p>
                </div>
                <div className="col-lg-4 text-center">
                  <img className="imgX" src={user1} alt=""/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi totam magni porro saepe expedita aspernatur officia unde! Delectus eius consectetur laboriosam doloribus minus, cumque fuga similique excepturi architecto minima!
                     dolor sit amet consectetur adipisicing elit. Repellat corporis vitae iure magni aperiam recusandae ea perferendis ex amet voluptate optio, error, eligendi, nisi quasi reprehenderit magnam provident ut excepturi.</p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="content4">
            <div className="rec">
              <div className="row">
                <div className="col-lg-5 shadow mx-1 pt-4" id="p_i">
                  <div>
                    <p>Welcoming you ........</p>
                  </div>
                  <div>
                  <Link to=""><FontAwesomeIcon className='icon-large' icon={faXTwitter} /></Link>
                  </div>
                </div>
                <div className="col-lg-5 shadow mx-1 pt-4" id="p_i">
                  <div>
                    <p>Welcoming you ........</p>
                  </div>
                  <div>
                  <Link to=""><FontAwesomeIcon className='icon-large' icon={faWhatsapp} /></Link>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-5 shadow mx-1 pt-4" id="p_i">
                  <div>
                    <p>Welcoming you ........</p>
                  </div>
                  <div>
                  <Link to=""><FontAwesomeIcon className='icon-large' icon={faFacebook} /></Link>
                  </div>
                </div>
                <div className="col-lg-5 shadow mx-1 pt-4" id="p_i">
                  <div>
                    <p>Welcoming you ........</p>
                  </div>
                  <div>
                  <Link to=""><FontAwesomeIcon className='icon-large' icon={faInstagram} /></Link>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-5 shadow mx-1 pt-4" id="p_i">
                  <div>
                    <p>Welcoming you ........</p>
                  </div>
                  <div>
                  <Link href="https://github.com/Clauvet1"><FontAwesomeIcon className='icon-large' icon={faGithub} /></Link> 
                  </div>
                </div>
                <div className="col-lg-5 shadow mx-1 pt-4" id="p_i">
                  <div>
                    <p>Welcoming you ........</p>
                  </div>
                  <div>
                  <Link to=""><FontAwesomeIcon className='icon-large' icon={faXTwitter} /></Link>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-5 shadow mx-1 pt-4" id="p_i">
                  <div>
                    <p>Enjoy Quality products ........</p>
                  </div>
                  <div>
                  <Link to=""><FontAwesomeIcon className='icon-large' icon={faWhatsapp} /></Link>
                  </div>
                </div>
                <div className="col-lg-5 shadow mx-1 pt-4" id="p_i">
                  <div>
                    <p>Enjoy Quality products ........</p>
                  </div>
                  <div>
                  <Link to=""><FontAwesomeIcon className='icon-large' icon={faFacebook} /></Link>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-5 shadow mx-1 pt-4" id="p_i">
                  <div>
                    <p>Enjoy Quality products ........</p>
                  </div>
                  <div>
                  <Link to=""><FontAwesomeIcon className='icon-large' icon={faInstagram} /></Link>
                  </div>
                </div>
                <div className="col-lg-5 shadow mx-1 pt-4" id="p_i">
                  <div>
                    <p>Enjoy Quality products ........</p>
                  </div>
                  <div>
                  <Link to=""><FontAwesomeIcon className='icon-large' icon={faXTwitter} /></Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          

    </div>
     );
}
 
export default AboutUs;