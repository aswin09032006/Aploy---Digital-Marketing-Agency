import React, { useState } from 'react'
import bulb from '../../assets/bulb.png'
import minty from '../../assets/companies/minty.png'
import network from '../../assets/companies/network.png'
import product from '../../assets/companies/product.png'
import proline from '../../assets/companies/proline.png'
import vertigo from '../../assets/companies/vertigo.png'
import coreValueBg from '../../assets/core_value_bg.png'
import dotted_path from '../../assets/dotted_path.png'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import rocket from '../../assets/rocket.png'
import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
import scratch from '../../assets/scratch.png'
import './Home.css'

const services = [
    {
        title: 'Business Growth',
        description: 'We build fast, scalable and secure web applications using the latest technologies.',
        image: s1,
    },
    {
        title: 'Digital Marketing',
        description: 'We build fast, scalable and secure web applications using the latest technologies.',
        image: s2
    },
    {
        title: 'Recruitment',
        description: 'We build fast, scalable and secure web applications using the latest technologies.',
        image: s3
    },
    {
        title: 'Operations Improvement',
        description: 'We build fast, scalable and secure web applications using the latest technologies.',
        image: s2
    },
    {
        title: 'MIS/HR Transformation',
        description: 'We build fast, scalable and secure web applications using the latest technologies.',
        image: s1
    }
]

const coreValues = [
    {
        title: 'Innovation',
        description: 'We embrace creativity and forward-thinking solutions.',
        image: coreValueBg,
    },
    {
        title: 'Integrity',
        description: 'We prioritize honesty and strong moral principles.',
        image: coreValueBg,
    },
    {
        title: 'Collaboration',
        description: 'Together we achieve greater success.',
        image: coreValueBg,
    },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    }

    return (
        <div className='home-page-container'>
            <div className="home-page-hero-section">
                <div className="home-page-hero-top">
                    <h2>Digital Marketing</h2>
                    <h5>Vision</h5>
                    <p>Extract real business value from social media. Ensuring the best return on investment for your bespoke SEO campaign requirement.</p>
                </div>
                <div className="home-page-hero-bottom">
                    <h5>Mission</h5>
                    <p>We aim to inspire and elevate our clients through innovative strategies and personalized branding solutions, helping them connect, engage, and thrive in a dynamic digital landscape.</p>
                </div>
                <div className="home-page-hero-bg-elements">
                    <div className="home-page-hero-circle-blue"></div>
                    <div className="home-page-hero-circle-sandal"></div>
                    <img src={p1} alt="" className='p1'/>
                    <img src={p2} alt="" className='p2'/>
                    <img src={p3} alt="" className='p3'/>
                    <img src={bulb} alt="" className='bulb'/>
                    <img src={rocket} alt="" className='rocket'/>
                    <img src={dotted_path} alt="" className='dotted_path'/>
                    <img src={scratch} alt="" className='scratch'/>
                </div>
            </div>
            <div className="home-page-highlights-section">
                <div className="home-page-highlight-element">
                    <h1>
                        10+
                        <span>Happy Clients</span>
                    </h1>
                </div>
                <div className="home-page-highlight-element">
                    <h1>
                        100+
                        <span>Hours of Support</span>
                    </h1>
                </div>
            </div>
            <div className="home-page-services-section">
                <h2>Our Core Services For You</h2>
                <div className="home-page-services-container">
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="home-page-service-element">
                                <img src={service.image} alt="" />
                                <h1>{service.title}</h1>
                                <p>{service.description}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="home-page-service-section-bg-elements">
                    <div className="home-page-service-circle-blue"></div>
                    <div className="home-page-service-circle-sandal"></div>
                </div>
            </div>
            <div className="home-page-companies-section">
                <h2>Our Partners</h2>
                <div className="home-page-companies-container">
                    <img src={minty} alt="" />
                    <img src={network} alt="" />
                    <img src={proline} alt="" />
                    <img src={product} alt="" />
                    <img src={vertigo} alt="" />
                </div>
            </div>
            <div className="home-page-core-values-section">
                <div className="home-page-core-values-container">
                    <h2>Our Core Values</h2>
                    <div
                    className="core-values-slider"
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                    >
                    {coreValues.map((value, index) => (
                        <div
                        key={index}
                        className="core-value"
                        style={{
                            backgroundImage: `url(${value.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                        >
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="slider-controls">
                    {coreValues.map((_, index) => (
                    <button
                        key={index}
                        className={currentSlide === index ? 'active' : ''}
                        onClick={() => handleSlideChange(index)}
                    ></button>
                    ))}
                </div>
            </div>
            <div className="home-page-testimonials-section">
                <h2>What Our Clients Say</h2>
                <div className="home-page-testimonials-container">
                    <div className="testimonial">
                        <img src={""} alt="" />
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestib
                            ulum magna sed, convallis ex."
                        </p>
                        <h3>John Doe</h3>
                    </div>
                    <div className="testimonial">
                        <img src={""} alt="" />
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestib
                            ulum magna sed, convallis ex."
                        </p>
                        <h3>John Doe</h3>
                    </div>
                    <div className="testimonial">
                        <img src={""} alt="" />
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestib
                            ulum magna sed, convallis ex."
                        </p>
                        <h3>John Doe</h3>
                    </div>
                    <div className="testimonial">
                        <img src={""} alt="" />
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestib
                            ulum magna sed, convallis ex."
                        </p>
                        <h3>John Doe</h3>
                    </div>
                </div>
            </div>
            <div className="home-page-contact-section">
                <h2>Locate us</h2>
                <div className="home-page-contact-container">
                    <iframe
                        width="100%"
                        height="500"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        loading='lazy'
                        src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=A1%20Call%20Taxi,%20Bagalur%20Hudco,%20Hosur,%20Tamil%20Nadu%20635109+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        title="A1 Call Taxi Hosur"
                    >
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Home
