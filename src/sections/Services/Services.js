import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';
//import { Link } from 'react-router-dom';
//import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Services = () => {
    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                    <SectionTitle title="Feel amazing about your respiratory health" subTitle="Services"/>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <p className='service-title-text'>Empower yourself to breathe easier and live healthier by prioritizing your respiratory wellness.</p>
                        </div>
                </div>

                <div className="row">
                    {
                        ServicesData.map(singleService => <Service serviceList={singleService}/>)
                    }
                </div>
                
            </div>

        </section>
    );
};

export default Services;