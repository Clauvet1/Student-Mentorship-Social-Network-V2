import React, { useState } from 'react';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedBack] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to submit the feedback data
        console.log('what your submitting:', name, email, feedback);
    };

    return (
        <div className="feedback-container mb-5">
            <h1>Feedback Form</h1>
            <center>
            <form onSubmit={handleSubmit} id='editP' className='col-lg-6 rounded-3 shadow-lg mb-5'>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Email:</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Feedback:</label>
                <textarea className='mb-4' name="feedback" value={feedback} onChange={(e) => setFeedBack(e.target.value)} required />

                <button type="submit">Submit Feedback</button>
            </form>
            </center>
        </div>
    );
};

export default Feedback;
