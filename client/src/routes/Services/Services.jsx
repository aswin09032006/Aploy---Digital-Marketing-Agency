import React from 'react';
import serviceImage from '../../assets/about-bg.png';
import businessData from '../../components/services_data.json';
import './Services.css';

const imageMap = {
    BusinessGrowth: serviceImage,
    OperationsImprovement: serviceImage,
    MIS_HR_Transformation: serviceImage,
    DigitalMarketing_PersonalBranding: serviceImage,
    Recruitment: serviceImage,
}

const Services = () => {
    return (
        <div className='services-page-container'>
            {Object.entries(businessData).map(([category, { title, subServices }], index) => (
                <div key={index} className={`category-container ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <h2 className='category-title'>{title}</h2>
                    <div className='category-content'>
                        <img
                            src={imageMap[category]}
                            alt={`${title}`}
                            className="category-image"
                        />
                        <div className='category-text'>
                            <div className='services-list'>
                                {subServices.map((service, subIndex) => (
                                    <div key={subIndex} className='service-item'>
                                        <h3 className='service-title'>{service.name}</h3>
                                        <p className='service-description'>{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
