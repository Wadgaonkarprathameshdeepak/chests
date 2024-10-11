import React from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="email" class="form-control" placeholder="Enter your name..." />
                    </div>
                </div>

                <div className="col-lg-6">
    <div className="form-group">
        <label>Mobile No</label>
        <input 
            type="" 
            className="form-control" 
            placeholder="Enter mobile no..." 
            pattern="[0-9]{10}" 
            maxLength="10" 
            title="Please enter mobile no..."
            required
        />
    </div>
</div>

                <div class="form-group">
                    <label for="date">Date</label>
                    <input type="date" id="date" class="form-control" />
                </div>


                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Day & Time</label>
                        <select class="form-control">
                            <option>Select Day & Time</option>
                            <option value="">Select Day & Time</option>
                            <option value="monday-9am">Monday 6:00 PM</option>
                            <option value="monday-10am">Monday 7:00 PM</option>
                            <option value="monday-11am">Monday 8:00 PM</option>
                            <option value="tuesday-9am">Tuesday 9:00 AM</option>
                            <option value="tuesday-10am">Tuesday 10:00 AM</option>
                            <option value="tuesday-11am">Tuesday 11:00 AM</option>


                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Service</label>
                        <select class="form-control">
                            <option>Select Service</option>

                            <option>CHEST DISEASES & INFECTION</option>
                            <option>ASTHMA AND ALLERGY</option>
                            <option>TOBACCO AND SMOKING CESSATION</option>
                            <option>TUBERCULOSIS (T.B.)</option>
                        </select>
                    </div>
                </div>
                
           
                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Messages</label>
                        <textarea class="form-control" placeholder='Enter your messages...' rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" class="btn appointment-btn">Book an appointment</button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
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