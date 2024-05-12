import React, { useState } from 'react';

const MeetingScheduler = () => {
    const [meetingTitle, setMeetingTitle] = useState('');
    const [meetingDate, setMeetingDate] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [briefDescription, setBriefDescription] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', meetingTitle, meetingDate, meetingTime, contactName, contactEmail, briefDescription);
    };

    return (
        <div className="meeting-scheduler-container pb-5">
            <h1>Schedule a Meeting</h1>
            <form onSubmit={handleFormSubmit} className="meeting-form">
                <label htmlFor="meeting-title">Meeting Title:</label>
                <input type="text" id="meeting-title" value={meetingTitle} onChange={(e) => setMeetingTitle(e.target.value)} required />
                <label htmlFor="meeting-date">Select Date:</label>
                <input type="date" id="meeting-date" value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)} required />
                <label htmlFor="meeting-time">Select Time:</label>
                <input type="time" id="meeting-time" value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)} required />
                <label htmlFor="contact-name">Your Name:</label>
                <input type="text" id="contact-name" value={contactName} onChange={(e) => setContactName(e.target.value)} required />
                <label htmlFor="contact-email">Your Email:</label>
                <input type="email" id="contact-email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required />
                <label htmlFor="contact-email">Brief Description:</label>
                <textarea className='mb-4' type='descr' id="contact-email" value={briefDescription} onChange={(e) => setBriefDescription(e.target.value)} />
                <button type="submit">Schedule Meeting</button>
            </form>
        </div>
    );
};

export default MeetingScheduler;