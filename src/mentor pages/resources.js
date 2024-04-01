import React from 'react';

const resources = [
    {
        title: 'Resource 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'https://www.example.com/resource1'
    },
    {
        title: 'Resource 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'https://www.example.com/resource2'
    },
    {
        title: 'Resource 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'https://www.example.com/resource3'
    }
];

const Resources = () => {
    return (
        <div className="resources-container">
            <h1>Resources</h1>
            {resources.map((resource, index) => (
                <div key={index} className="resource-card">
                    <h2>{resource.title}</h2>
                    <p>{resource.description}</p>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">View Resource</a>
                </div>
            ))}
        </div>
    );
};

export default Resources;