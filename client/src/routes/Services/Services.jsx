import React from 'react';
import businessData from '../../components/services_data.json';
import './Services.css';

const Services = () => {
    return (
        <div className='services-page-container'>
            {Object.entries(businessData).map(([category, items], index) => (
                <div key={index} className='category-container'>
                    <h2 className='category-title'>{category.replace(/_/g, ' / ')}</h2>
                    <div className='services-list'>
                        {Object.entries(items).map(([key, value], subIndex) => (
                            <div key={subIndex} className='service-item'>
                                <h3 className='service-title'>{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                                <p className='service-description'>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
