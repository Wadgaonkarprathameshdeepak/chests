import React from 'react';
import './Banner.scss';
import {Link} from 'react-router-dom';
import icon from '../../assets/banner/icons/Calling.png';
import bannerImg from '../../assets/banner/1.png';
import doctorImg from '../../assets/banner/doctor.jpg';
import bannerPattern from '../../assets/banner/pattern_02.png';
//import shapeOne from '../../assets/download.svg';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

const Banner = () => {

    return (
        <section className='section-bg section-common banner-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>Your most trusted health partner</h1>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <Link to="/contact">Book an appointment</Link>
                                        </div>

                                        <div className="banner-call">
                                            <div className='icon'>
                                                <img src={icon} alt="icon" />
                                            </div>
                                            <div className='call-text'>
                                                <p>Support Available for 24/7</p>
                                                <h6>+91-9158450788</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    <div className="banner-img">
                                        <img src={bannerImg} alt="banner model" />
                                    </div>
                                    <div className='info-box'>
                                        <div className="info-img">
                                            <img src={doctorImg} alt="doctor" style={{ width: '80px', height: 'auto' }} />
                                        </div>
                                        <div className='info-text'>
                                            <p>Dr. Vaibhav D. Pandharkar<br></br>
                                           <br></br> MBBS, DNB-Tuberculosis and Respiratory diseases/Pulmonary Medicine<br></br>
                                                Diploma in Tuberculosis and Chest Diseases(DTCD) </p>
                                            <p><small></small></p>
                                        </div>
                                    </div>  

                                    {/* Vector Shapes */}
                                    <div className="shapes">
                                        <div className="shpaess">
                                        </div>
                                        <img src={shapeTwo} alt="shape" />
                                        <img src={shapeThree} alt="shape" />
                                        <img src={shapeFour} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;