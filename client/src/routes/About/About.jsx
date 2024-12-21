import React from 'react'
import bulb from '../../assets/bulb.png'
import dotted_path from '../../assets/dotted_path.png'
import p1 from '../../assets/person.png'
import rocket from '../../assets/rocket.png'
import scratch from '../../assets/scratch.png'
import './About.css'

const About = () => {
    return (
        <div className='about-page-container'>
            <div className="about-page-hero-section">
                <h1 className="about-page-hero-title">About Us</h1>
                <p className="about-page-hero-text">
                    A-ploy Global is a dynamic consultancy firm based in Surat that is dedicated to empowering businesses and individuals to achieve their full potential. We provide innovative strategies and personalized solutions tailored to the unique needs of our clients. Our mission is to drive comprehensive growth and operational excellence, enabling our clients to thrive in a competitive landscape.
                </p>
                <div className="about-page-hero-bg-elements">
                    <div className="about-page-hero-circle-blue"></div>
                    <div className="about-page-hero-circle-sandal"></div>
                    <img src={bulb} alt="" className='about-page-bulb'/>
                    <img src={rocket} alt="" className='about-page-rocket'/>
                    <img src={dotted_path} alt="" className='about-page-dotted_path'/>
                    <img src={scratch} alt="" className='about-page-scratch'/>
                </div>
            </div>
            <div className="about-page-team-members-section">
                <div className="team-members-container1">
                    <h1>Our Company Corporate Governance Team</h1>
                    <div className="team-member-1">
                    <img src={p1} alt="" className=''/>
                    <div className="team-member-details">
                        <h2 className="team-member-name">Keval Badamaliya</h2>
                        <p className="team-member-position">Founder & CEO</p>
                        <p className="team-member-description">
                        I have over 3 years of experience in the consultancy and IT industry. As the ex-Executive Director of Filantroop Global Pvt Ltd, I have honed my skills in business strategy, leadership management, and team building. My expertise drivesthe vision of A-Ploy, ensuring that the company remains at the forefront of innovation and client satisfaction.
                        </p>
                    </div>
                </div>
                <div className="team-member-2">
                    <div className="team-member-details">
                        <h2 className="team-member-name">Kailash Patel</h2>
                        <p className="team-member-position">Co-Founder & COO</p>
                        <p className="team-member-description">
                            I have over 17 years of extensive experience in operations and the equity market and have brought a wealth of knowledge and expertise to he team. My deep understanding of market dynamics and exceptional relationship-building skills have been instrumental in driving sustainable business growth. As a co-founder of our consultancy, our vision is to deliver innovative business management solutions and digital marketing strategies that empower companies to reach their full potential.
                        </p>
                    </div>
                    <img src={p1} alt="" className=''/>
                </div>
                </div>
                <div className="team-members-container2">
                    <h1>Our Company Professional Team</h1>
                    <div className="team-member-3">
                        <img src={p1} alt="" className=''/>
                        <div className="team-member-details">
                            <h2 className="team-member-name">Vivek Kumar</h2>
                            <p className="team-member-position">CTO (Chief Technical Officer)</p>
                            <p className="team-member-description">
                            I have over 5 years of experience in teaching computer science and expertise in digital marketing. As a digital strategist and educator, I have developed a deep understanding of business development and online growth strategies. My knowledge drives the vision of my consulting firm, ensuring businesses achieve success through tailored solutions and innovative approaches.
                            </p>
                        </div>
                    </div>
                    <div className="team-member-4">
                        <div className="team-member-details">
                            <h2 className="team-member-name">Dharmesh Prajapati                       </h2>
                            <p className="team-member-position">HR Head & Managing Partner</p>
                            <p className="team-member-description">
                            With 8 years of experience in human resources, I specialize in developing comprehensive policies, providing strategic guidance, and designing effective employee management systems. At Aploy Group, I lead the HR department, ensuring the recruitment of top talent and fostering a culture of growth and excellence. My expertise in people management helps drive the organization's vision and support its dynamic workforce.
                            </p>
                        </div>
                        <img src={p1} alt="" className=''/>
                    </div>
                    <div className="team-members-container2-bg-elements">
                        <div className="about-page-team-container-circle-blue"></div>
                        <div className="about-page-team-container-circle-sandal"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
    