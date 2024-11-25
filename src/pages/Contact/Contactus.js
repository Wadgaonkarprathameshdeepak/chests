import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Navbar from '../../components/Navbar/Navbar';
import './Contactus.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../sections/Footer/Footer';

const Contactus = () => {
    return (
        <>
            <section className='section-bg section-common contact-section'>
                <Navbar />
                <SectionTitle 
                    title="Contact Us"
                    description="We’re here to help with all your respiratory health needs. Feel free to reach out for appointments, inquiries, or more information about our services. Our friendly staff is ready to assist you."
                />
            </section>
            <section className='contact-form-area' data-aos="fade-up" data-aos-duration="2000">
                <ContactForm />
            </section>
            <Footer />
        </>
    );
};

export default Contactus;