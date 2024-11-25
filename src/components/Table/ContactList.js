import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactList.css'; // Create a separate CSS file for styling

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contact');
        setContacts(response.data); // Set the fetched data into state
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="contact-list-container">
      <h1>Contact List</h1>
      {contacts.length > 0 ? (
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Date</th>
              <th>Day Time</th>
              <th>Service</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.mobile}</td>
                <td>{contact.date}</td>
                <td>{contact.dayTime}</td>
                <td>{contact.service}</td>
                <td>{contact.message || 'No message'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;
