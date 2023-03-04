import React from 'react'
import { Container } from 'react-bootstrap'

const Services = (props) => {
    return (
        <div className={`services py-5 ${props.mode}`} id="services">
            <Container fluid className='px-5'>
                <div className="section-main-title mb-5">
                    <p className="section-title-sm">services</p>
                    <p className="section-title">our services</p>
                </div>
                <div className="services-container py-5">
                    <div className="image">
                        <img src="/images/home/services/services.png" alt="Services" />
                    </div>
                    <div className="services-item">
                        <div className="images"><img src="/images/home/services/icon-1.png" alt="Icon" /></div>
                        <div className="contect">
                            <p className="title">UI/UX Design</p>
                            <p className="description">We provide mobile app design, web and desktop design, and redesign services with a simple and coherent product experience to provide a better user experience. </p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="images"><img src="/images/home/services/icon-2.png" alt="Icon" /></div>
                        <div className="contect">
                            <p className="title">Web Development</p>
                            <p className="description">Our qualified developers specialize in a wide range of web development services. Here are some of the solutions that we can deliver for you (websites, e-commerce, and web applications). We deliver comprehensive web development services with clear results and a clear development process.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="images"><img src="/images/home/services/icon-3.png" alt="Icon" /></div>
                        <div className="contect">
                            <p className="title">Web Hosting</p>
                            <p className="description">Enjoy with us secure hosting against intrusions, hackers, and spam with a backup feature, the latest hacking blockers, and the best protection programs for the website, store, or forest.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="images"><img src="/images/home/services/icon-4.png" alt="Icon" /></div>
                        <div className="contect">
                            <p className="title">Outsourcing</p>
                            <p className="description">We can take under our responsibility your deployment process, and we can help you with implementing your projects from scratch to delivery. </p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="images"><img src="/images/home/services/icon-5.png" alt="Icon" /></div>
                        <div className="contect">
                            <p className="title">Technical Support | Maintenance </p>
                            <p className="description">Tawajood provides technical support for all services (24/7). We are continuously serving your website. We design scalable architecture, which helps to sustain low maintenance costs.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="images"><img src="/images/home/services/icon-6.png" alt="Icon" /></div>
                        <div className="contect">
                            <p className="title">Digital Marketing</p>
                            <p className="description">We provide e-marketing services, including social media management, creating paid ads campaigns for social media, SEO, and SEM.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="images"><img src="/images/home/services/icon-7.png" alt="Icon" /></div>
                        <div className="contect">
                            <p className="title">Mobile App Development</p>
                            <p className="description">Designing mobile applications that are compatible with all operating systems (Android and iOS) with the same design and quality. We have a team that is able to design, implement, and develop your ideas and apply them on the ground to get the best applications, the most beautiful design, and the highest performance.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services