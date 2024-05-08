import { useState } from 'react';

const EditMProfile = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [language, setLanguage] = useState('');
    const [school, setSchool] = useState('');
    const [department, setDepartment] = useState('');
    const [bio, setBio] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic to update the mentor's profile data
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Edit Profile</h2>
           <center><form onSubmit={handleSubmit} id='editP' className='col-lg-6 rounded-3 shadow-lg mb-5'>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                    <label htmlFor="school" className="form-label">School</label>
                    <input type="text" className="form-control" id="school" value={school} onChange={(e) => setSchool(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="department" className="form-label">Department</label>
                    <input type="text" className="form-control" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
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
