import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/banner_1.png'
//import bannerTwo from '../../assets/about/banner/banner_2.png'
import pattern from '../../assets/banner/pattern.png'

const AboutBanner = () => {
    return (
        <section className='about-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about-banner-text">
                                    <h2>About Us</h2>
                                    <p>We are dedicated to helping you breathe easy and feel great every day. Your respiratory health is our priority, not just when symptoms arise, but every time you take a deep breath, laugh with loved ones, or enjoy the beauty of daily life. Our goal is to support your well-being with compassionate, expert care tailored to your needs.</p>

                                    <div className="theme-btn">
                                        <Link to='/'>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-banner-img">
                                    <img src={bannerOne} alt="about banner"/>
                                  
                                    <img className='pattern' src={pattern} alt="about banner two"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;