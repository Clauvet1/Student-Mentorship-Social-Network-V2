import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const pusher = new Pusher('1816841', {
  key: 'fdbc9ff346ce4463966c',
  secret: 'b8f5f2310869942fcb6c',
  cluster: 'eu',
  useTLS: true,
});

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const history = useHistory();
  const { id: recipientId } = useParams();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
      return;
    }

    const fetchMessages = async () => {
      try {
        const receivedResponse = await fetch(`http://localhost:3001/api/messages/received/${recipientId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const receivedData = await receivedResponse.json();
        setReceivedMessages(receivedData);
      } catch (error) {
        console.error('Error fetching received messages:', error);
      }
    };

    fetchMessages();

    const channel = pusher.subscribe('messages');

    const handleMessage = (data) => {
      if (data.recipientId === recipientId) {
        setReceivedMessages((prevMessages) => [...prevMessages, data]);
      } else if (data.senderId === recipientId) {
        setSentMessages((prevMessages) => [...prevMessages, data]);
      }
    };

    channel.bind('new-message', handleMessage);

    return () => {
      channel.unbind('new-message', handleMessage);
      pusher.unsubscribe('messages');
    };
  }, [recipientId, history]);

  const handleSendMessage = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        history.push('/login');
        return;
      }

      const response = await fetch(`http://localhost:3001/api/messages/${recipientId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message: newMessage }),
      });
      const data = await response.json();
      setSentMessages((prevMessages) => [...prevMessages, data]);
      setNewMessage('');

      // Manually trigger Pusher event to simulate real-time message reception for the sender
      pusher.trigger('messages', 'new-message', {
        ...data,
        senderId: recipientId,
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date(timestamp));
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          
          <div className='row chat-body'>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-8 mb-2">
          <div className="chat-header mb-4">
            <h1>Received Messages</h1>
          </div>
            <ul className="messages col-lg-8 col-md-8 col-sm-10">
              {receivedMessages.map((message, index) => (
                <li key={index} className="received">
                  <span>{message.message}</span> <br />
                  <span className="timestamp">{formatTimestamp(message.timestamp)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-8">
          <div className="chat-header mb-4">
            <h1>Sent Messages</h1>
          </div>
            <ul className="messages col-lg-8 col-md-8 col-sm-10">
              {sentMessages.map((message, index) => (
                <li key={index} className="sent">
                  <span>{message.message}</span> <br />
                  <span className="timestamp">{formatTimestamp(message.timestamp)}</span>
                </li>
              ))}
            </ul>
          </div>
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="chat-footer">
            <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." className="form-control"/>
            <button onClick={handleSendMessage} className="btn">
              <FontAwesomeIcon className="icon-large" icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBoard;
