import React, { useState } from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';
import axios from 'axios';

// Helper function to get today's date in 'YYYY-MM-DD' formatt  date formate to tje current date as the passion of the date is very being differnt 
const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero for single-digit days
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
};
const getDayOfWeek = (date) => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const selectedDate = new Date(date);
    return dayNames[selectedDate.getDay()];
};

const ContactForm = () => {
    // Form data state
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        date: '',
        dayTime: '',
        service: '',
        message: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            alert(response.data.msg);  // Success message
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert(error.response.data.msg);  // Display "Not Available" message
            } else {
                alert('Error submitting form');  // General error message
            }
        }
    };

     // Time slots mapped by days of the week
     const timeSlots = {
        Monday: ['6:00 PM', '7:00 PM', '8:00 PM' , '9:00 PM'],
        Tuesday: ['10:00 AM', '11:00 AM','7:00 PM', '8:00 PM' , '9:00 PM'],
        Wednesday: ['6:00 PM', '7:00 PM', '8:00 PM' , '9:00 PM'],
        Thursday: ['6:00 PM', '7:00 PM', '8:00 PM' , '9:00 PM'],
        Friday:['10:00 AM', '11:00 AM','7:00 PM', '8:00 PM' , '9:00 PM'],
        Saturday:['10:00 AM', '11:00 AM','6:00 PM','7:00 PM', '8:00 PM' , '9:00 PM'],
    };

     // Get the current day of the week based on the selected date
     const selectedDay = formData.date ? getDayOfWeek(formData.date) : '';

    
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your name..." 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Mobile No</label>
                        <input 
                            type="tel" 
                            className="form-control" 
                            placeholder="Enter mobile no..." 
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            pattern="[0-9]{10}" 
                            maxLength="10" 
                            title="Please enter a valid mobile no..."
                            required 
                        />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Date</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={getCurrentDate()}  // Prevent past dates
                            required 
                        />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Day & Time</label>
                        <select 
                            className="form-control" 
                            name="dayTime"
                            value={formData.dayTime}
                            onChange={handleChange}
                            required
                            disabled={!selectedDay} // Disable if no valid date is selected
                        >
                            <option>Select Day & Time</option>
                            {selectedDay && timeSlots[selectedDay] 
                                ? timeSlots[selectedDay].map((time, index) => (
                                    <option key={index} value={`${selectedDay}-${time}`}>
                                        {selectedDay} {time}
                                    </option>
                                  ))
                                : <option>No time slots available</option>
                            }
                        </select>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Service</label>
                        <select 
                            className="form-control" 
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option>Select Service</option>
                            <option value="chest">CHEST DISEASES & INFECTION</option>
                            <option value="asthma">ASTHMA AND ALLERGY</option>
                            <option value="tobacco">TOBACCO AND SMOKING CESSATION</option>
                            <option value="tb">TUBERCULOSIS (T.B.)</option>
                        </select>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Messages</label>
                        <textarea 
                            className="form-control" 
                            placeholder="Enter your messages..." 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                        />
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" className="btn appointment-btn">Book an appointment</button>
                </div>

                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className="icon">
                            <img src={icon} alt="icon" />
                        </div>
                        <div className="call-text">
                            <p>Need Urgent Help?</p>
                            <h6>+91-9158450788</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;