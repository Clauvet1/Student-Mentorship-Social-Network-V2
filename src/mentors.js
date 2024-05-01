import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import mentorIMG from './assets/images/pic.jpg'
const Mentors = () => {
   const mentorData = [
    {
        id: 1,
        name: 'Clauvet Yome',
        speciality: 'Professor at College of Technology',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eius eveniet recusandae consectetur! Omnis beatae porro amet hic ea officia quibusdam quia atque, sunt libero fugiat officiis nostrum eius incidunt.',
        image: mentorIMG,
   },
   {
    id: 2,
    name: 'Clauvet Yome',
    speciality: 'Professor at College of Technology',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eius eveniet recusandae consectetur! Omnis beatae porro amet hic ea officia quibusdam quia atque, sunt libero fugiat officiis nostrum eius incidunt.',
    image: mentorIMG,
}]
    return ( 
        <div className="mentorContent my-5">
            <div className="filter ms-5 fw-bold">
               <div className='mx-5'> <input  type="checkbox" name="" id="" /> Lecturers</div>
               <div> <input type="checkbox" name="" id="" /> Atrium</div>
            </div>
        <div className="student-mentor-matching mt-5">
        <div className="container">

            {mentorData.map((mentor) => (
        
                <div id='mentorDesc' key={mentor.id} className="row">
                    <div className="col-lg-3">
                        <div id="shadow">
                        <div className="mentorIMG">
                            <img className='w-100' src={mentor.image} alt={mentor.name} />    
                        </div>    
                        </div>
                    </div> 
                    <div className="col-lg-9 p-4">
                    <div className="container">
                        <h2>{mentor.name}</h2>
                        <h5>{mentor.speciality}</h5>
                        <p>{mentor.bio}</p>
                       <Link to="/aboutMentor"><button className='btn bg-black text-white rounded-5 px-4 mt-2'>View Profile</button></Link>
                    </div>
                    </div>  
                </div>       
                        
            ))}
                                                                                                                                                                
             </div>
        </div>
        </div>
     );
}
 
export default Mentors;