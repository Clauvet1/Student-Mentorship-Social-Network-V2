import React, { useState, useEffect } from 'react';
import {  addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebase.config";

function Message() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = [];
      snapshot.forEach((doc) => {
        messages.push({
          id: doc.id,
          from: doc.data().from,
          text: doc.data().text,
          timestamp: doc.data().timestamp.toDate(),
        });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      from: 'me',
      text: newMessage,
      timestamp: new Date(),
    });
    setNewMessage('');
  };

  return (
    <div className="message-page">
      <div className="chat-header">
        <h2>Chat with Mentor</h2>
      </div>
      <div className="chat-history">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.from === 'me' ? 'sent' : 'received'}`}>
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