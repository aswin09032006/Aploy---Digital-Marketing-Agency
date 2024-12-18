import React from 'react'
import bulb from '../../assets/bulb.png'
import minty from '../../assets/companies/minty.png'
import network from '../../assets/companies/network.png'
import product from '../../assets/companies/product.png'
import proline from '../../assets/companies/proline.png'
import vertigo from '../../assets/companies/vertigo.png'
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

const Home = () => {
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
        </div>
    )
}

export default Home
