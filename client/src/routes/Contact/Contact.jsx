import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", comments: "" });
    const [message, setMessage] = useState("");
    const [popupOpen, setPopupOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://a1-call-taxi-hosur.onrender.com/api/send-query", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage(
                    "Thank you for reaching out to us. Your query has been submitted successfully. Our team will review it and get back to you shortly. We value your feedback and appreciate your patience."
                );
                setFormData({ name: "", email: "", comments: "" });
            } else {
                setMessage(
                    result.error || 
                    "We were unable to process your query at this time. Please try again later or contact our support team directly."
                );
            }
        } catch (error) {
            setMessage(
                "An unexpected error occurred while submitting your query. Please check your connection and try again. If the issue persists, feel free to contact our support team."
            );
        }

        setPopupOpen(true); // Open the popup after the message is set
    };

    const handlePopupClose = () => {
        setPopupOpen(false);
        setMessage(""); // Clear the message when the popup closes
    };
    return (
        <div className="contactpage-container">
            <h1 className="contact-page-title">Contact us</h1>
            <div className="contactpage-hero-section">
                <div className="contactpage-content">
                    <p>
                    At A-Ploy, we’re committed to helping your business grow and thrive. Whether you’re looking to learn more about our services, discuss a project, or share your feedback, our team is here to assist you every step of the way.
                    </p>
                </div>
                    <div className="about-page-hero-bg-elements">
                    <div className="about-page-hero-circle-blue"></div>
                    <div className="about-page-hero-circle-sandal"></div>
                </div>
            </div>
            <div className="contact-container">
                <div className="contact-cards">
                    <div className="contact-card">
                        <i className="fas fa-clock"></i>
                        <h3>Working hours</h3>
                        <p>
                            24/7
                            <br />
                        </p>
                    </div>
                    <div className="contact-card">
                        <i className="fas fa-phone"></i>
                        <h3>Phone numbers</h3>
                        <p>
                        <br />
                        <br />
                        </p>
                    </div>
                    <div className="contact-card">
                        <i className="fas fa-envelope"></i>
                        <h3>Email address</h3>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="contactpage-map">
                <iframe
                    width="95%"
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    loading="lazy"
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=A1%20Call%20Taxi,%20Bagalur%20Hudco,%20Hosur,%20Tamil%20Nadu%20635109+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="A1 Call Taxi Hosur"
                ></iframe>
            </div>
            <div className="query-form">
                <h3 style={{ color: '#0f011f', textAlign: 'center' }}>Send us a query</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="form-group-name">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group-mail">
                            <label htmlFor="email">Email ID</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="comments">Comments</label>
                        <textarea
                            id="comments"
                            name="comments"
                            className="form-textarea"
                            placeholder="Enter your comments"
                            value={formData.comments}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="form-button-submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact