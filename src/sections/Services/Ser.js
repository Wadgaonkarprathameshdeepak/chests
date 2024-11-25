import React from 'react';
import ServicesData from './ServicesData';

function Ser() {
    return (
        <div>
            {ServicesData.map((Ser, index) => (
                <div key={index}>
                    <img src={Ser.icon} alt={Ser.title} style={{ width: '3000px', height: '230rem' }} />
                    <h2>{Ser.title}</h2>
                    <p>{Ser.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Ser;
