// HotelChat.js
import React, { useState, useEffect } from "react";
import "./../../styles/hotel/hotel-chat.css";
import user from "./../../assets/images/user.jpeg";

const contacts = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "John Bar" },
  { id: 4, name: "Jane Kohli" },
  { id: 5, name: "John Dhoni" },
  { id: 6, name: "Jane Rohit" },
  // Add more contacts
];

const HotelChat = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].sender === "user"
    ) {
      setTimeout(() => {
        const autoReply = {
          id: messages.length + 1,
          text: "Thanks for your message.",
          sender: "contact",
        };
        setMessages([...messages, autoReply]);
      }, 1000);
    }
  }, [messages]);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    // Fetch or load messages for the selected contact
    // For now, let's use dummy messages
    const dummyMessages = [
      { id: 1, text: "Hello!", sender: "contact" },
      { id: 2, text: "Hi there!", sender: "user" },
      // Add more messages
    ];
    setMessages(dummyMessages);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <div className="d-flex w-100 justify-content-center">
      <div className="col-10 chat-page shadow-lg my-4">
        <div className="contacts-list">
          <h2>Contacts</h2>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`contact ${
                selectedContact?.id === contact.id ? "selected" : ""
              }`}
              onClick={() => handleContactClick(contact)}
            >
              <div className="contact-avatar">
                <img src={user} alt={`${contact.name} avatar`} />
              </div>
              <div className="contact-details">
                <div className="contact-name">{contact.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="chat-interface">
          {selectedContact ? (
            <>
              <div className="chat-header">
                <div className="contact-avatar">
                  <img src={user} alt={`${selectedContact.name} avatar`} />
                </div>
                <div className="contact-details">
                  <div className="contact-name">{selectedContact.name}</div>
                </div>
              </div>
              <div className="message-list">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message ${
                      message.sender === "user" ? "user" : "contact"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="message-input">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                />
                <button type="submit">Send</button>
              </form>
            </>
          ) : (
            <div className="no-chat-selected">
              Select a contact to start chatting
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelChat;
