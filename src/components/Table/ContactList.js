import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    const fetchContacts = async () => {
      try {
            const response = await axios.get('http://localhost:5000/api/contact');
            
        const data = await response.json();
        setContacts(data); // Set the fetched data into state
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <li key={contact._id}>
              <strong>Name:</strong> {contact.name}<br />
              <strong>Mobile:</strong> {contact.mobile}<br />
              <strong>Date:</strong> {contact.date}<br />
              <strong>Day Time:</strong> {contact.dayTime}<br />
              <strong>Service:</strong> {contact.service}<br />
              <strong>Message:</strong> {contact.message || 'No message'}
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;
