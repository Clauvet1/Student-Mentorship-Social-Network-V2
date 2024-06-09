import React, { useState, useEffect } from 'react';

function Message() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [sender, setSender] = useState(''); // assume sender is the current user's ID
  const [receiver, setReceiver] = useState('mentor'); // assume receiver is the mentor's ID

  useEffect(() => {
    // fetch messages from /messages endpoint
    fetch('http://localhost:3001/api/messages')
     .then(response => response.json())
     .then(data => setMessages(data))
     .catch(error => console.error('Error:', error));
  }, []);

  const handleSendMessage = async () => {
    // send message to /send-message endpoint
    try {
      const response = await fetch('http://localhost:3001/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender, receiver, text: newMessage }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setNewMessage('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="message-page">
      <div className="chat-header">
        <h2>Chat with Mentor</h2>
      </div>
      <div className="chat-history">
            {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender === sender ? 'sent' : 'received'}`}>
          <p>{message.text}</p>
          <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
        </div>
             ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Message;