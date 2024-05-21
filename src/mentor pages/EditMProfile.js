import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const EditMProfile = () => {
    const [userType, setUserType] = useState("mentor");
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [language, setLanguage] = useState('');
    const [school, setSchool] = useState('');
    const [specialty, setspecialty] = useState('');
    const [bio, setBio] = useState('');
    const history = useHistory();


    const handleUserTypeChange = (type) => {
        setUserType(type);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = {fullName, email, phone, language, school, specialty, bio, userType, location};
        console.log('User data:', userData);
        try {
            const response = await fetch("http://localhost:3001/upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(userData),
            });
            if (response.ok) {
                console.log("User data sent successfully to server");
                if(userType === 'mentee'){
                    history.push("/menteeProfile");
                } else{
                history.push("/mentorProfile");
                }
            } else {
                console.log("Failed to send user's data to server")
            }
        } catch (error) {
            console.error("Error sending user's data: ", error);
        }
    };

    return (
        <div className="container mt-5">
            
            <center>
            <h2 className="mb-4">Edit Profile</h2>
            <div className="">
        <button className={userType === "mentor"? "active" : ""} onClick={() => handleUserTypeChange("mentor")}> Mentor </button>
        <button className={userType === "mentee"? "active" : ""} onClick={() => handleUserTypeChange("mentee")}> Mentee </button>
      </div>
                <form onSubmit={handleSubmit} id='editP' className='col-lg-6 rounded-3 shadow-lg mb-5'>
                <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type='number' className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="language" className="form-label">Language</label>
                        <input type="text" className="form-control" id="language" value={language} onChange={(e) => setLanguage(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="language" className="form-label">Location</label>
                        <input type="text" className="form-control" id="language" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="school" className="form-label">School</label>
                        <input type="text" className="form-control" id="school" value={school} onChange={(e) => setSchool(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="specialty" className="form-label">specialty</label>
                        <input type="text" className="form-control" id="specialty" value={specialty} onChange={(e) => setspecialty(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bio" className="form-label">Bio</label>
                        <textarea className="form-control" id="bio" rows="3" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                    </div>
                    
                    <button type="submit" className='s my-4 rounded-1'>Save Changes</button>
                </form>
            </center>
        </div>
    );
};

export default EditMProfile;
