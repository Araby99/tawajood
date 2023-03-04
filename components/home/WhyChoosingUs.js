import React from 'react'
import { Container } from 'react-bootstrap'

const WhyChoosingUs = () => {
    return (
        <div className='why-choosing-us py-5' id='whyChoosingUs'>
            <Container fluid className='p-5'>
                <div className="section-main-title mb-5 white">
                    <p className="section-title-sm">Why Us</p>
                    <p className="section-title">Why Choosing Us</p>
                </div>
                <div className="why-container py-5">
                    <div className="why-item">
                        <div className="icon">
                            <img src="/images/home/why-choosing-us/icon-1.png" alt="Icon" />
                        </div>
                        <div className="text">
                            <p className="title">Protection</p>
                            <p className="description">
                                The application and database are 100% protected and secure.
                            </p>
                        </div>
                    </div>
                    <div className="why-item">
                        <div className="icon">
                            <img src="/images/home/why-choosing-us/icon-2.png" alt="Icon" />
                        </div>
                        <div className="text">
                            <p className="title">Control Panel & DB</p>
                            <p className="description">
                                Create a complete control panel and dashboard for the application for easy modification and control.
                            </p>
                        </div>
                    </div>
                    <div className="why-item">
                        <div className="icon">
                            <img src="/images/home/why-choosing-us/icon-3.png" alt="Icon" />
                        </div>
                        <div className="text">
                            <p className="title">Staff</p>
                            <p className="description">
                                We always strive to acquire the best expertise and competencies to achieve the required work in all its aspects with the same level of creativity and distinction.
                            </p>
                        </div>
                    </div>
                    <div className="why-item">
                        <div className="icon">
                            <img src="/images/home/why-choosing-us/icon-4.png" alt="Icon" />
                        </div>
                        <div className="text">
                            <p className="title">Highest Quality</p>
                            <p className="description">
                                High-quality services designed in a variety of packages at smart and flexible prices are suitable for small, medium, and large enterprises and companies.
                            </p>
                        </div>
                    </div>
                    <div className="why-item">
                        <div className="icon">
                            <img src="/images/home/why-choosing-us/icon-5.png" alt="Icon" />
                        </div>
                        <div className="text">
                            <p className="title">Design</p>
                            <p className="description">
                                Your Responsive design is built from scratch using the latest technology. all the ideas  will be done by our dedicated designers. Only contact us to find suitable solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WhyChoosingUs