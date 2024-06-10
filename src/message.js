// message.js
import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const pusher = new Pusher("1816841", {
  key: "fdbc9ff346ce4463966c",
  secret: "b8f5f2310869942fcb6c",
  cluster: "eu",
  useTLS: true
});

const channel = pusher.subscribe('messages');

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const history = useHistory();
  const { id: recipientId } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
      return;
    }

    const fetchMessages = async () => {
      try {
        const receivedResponse = await fetch(`http://localhost:3001/api/messages/received`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const receivedData = await receivedResponse.json();
        setReceivedMessages(receivedData);
      } catch (error) {
        console.error('Error fetching received messages:', error);
      }
    };

    fetchMessages();

    channel.bind('new-message', (data) => {
      if (data.recipientId === recipientId) {
        setReceivedMessages((prevMessages) => [...prevMessages, data]);
      } else if (data.senderId === recipientId) {
        setSentMessages((prevMessages) => [...prevMessages, data]);
      }
    });
  }, [recipientId, history]);

  const handleSendMessage = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push("/login");
        return;
      }

      const response = await fetch(`http://localhost:3001/api/messages/${recipientId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ message: newMessage }),
      });
      const data = await response.json();
      setSentMessages((prevMessages) => [...prevMessages, data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="chat-header">
            <h1>Received Messages</h1>
          </div>
          <div className="chat-body">
            <ul className="messages">
              {receivedMessages.map((message, index) => (
                <li key={index} className="received">
                  <span>{message.message}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="chat-header">
            <h1>Sent Messages</h1>
          </div>
          <div className="chat-body">
            <ul className="messages">
              {sentMessages.map((message, index) => (
                <li key={index} className="sent">
                  <span>{message.message}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="chat-footer">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="form-control"
            />
            <button onClick={handleSendMessage} className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBoard;
