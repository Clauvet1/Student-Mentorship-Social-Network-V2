import React, { useState, useEffect } from 'react';

function Message() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // fetch messages from API or database
  }, []);

  const handleSendMessage = () => {
    // send new message to API or database
    setMessages([...messages, { text: newMessage, timestamp: new Date() }]);
    setNewMessage('');
  };

  return (
    <div className="message-page">
      <div className="chat-header">
        <h2>Chat with Mentor</h2>
      </div>
      <div className="chat-history">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.from === 'me'? 'sent' : 'received'}`}>
            <p>{message.text}</p>
            <span>{message.timestamp.toLocaleTimeString()}</span>
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
