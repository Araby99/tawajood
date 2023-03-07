import React from 'react'
import { Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OurClients = (props) => {
    const owlRespoinsive = {
        0: {
            items: 3,
            margin: 50
        },
        900: {
            items: 3
        },
        1400: {
            items: 5
        },
        1600: {
            items: 6
        }
    }
    return (
        <div className='our-clients py-5'>
            <Container fluid className='px-5'>
                <div className="section-main-title mb-5">
                    <p className="section-title-sm">Clients</p>
                    <p className="section-title">Our Clients</p>
                </div>
                <div className="clients">
                    <OwlCarousel className='owl-theme' autoplay autoplayTimeout="3000" autoplayHoverPause loop margin={150} center responsive={owlRespoinsive}>
                        <div className={`item ${props.mode}`}>
                            <img src="/images/home/clients/client-1.png" alt="Client" />
                        </div>
                        <div className={`item ${props.mode}`}>
                            <img src="/images/home/clients/client-2.png" alt="Client" />
                        </div>
                        <div className={`item ${props.mode}`}>
                            <img src="/images/home/clients/client-3.png" alt="Client" />
                        </div>
                        <div className={`item ${props.mode}`}>
                            <img src="/images/home/clients/client-4.png" alt="Client" />
                        </div>
                        <div className={`item ${props.mode}`}>
                            <img src="/images/home/clients/client-5.png" alt="Client" />
                        </div>
                        <div className={`item ${props.mode}`}>
                            <img src="/images/home/clients/client-6.png" alt="Client" />
                        </div>
                        <div className={`item ${props.mode}`}>
                            <img src="/images/home/clients/client-7.png" alt="Client" />
                        </div>
                        <div className={`item ${props.mode}`}>
                            <img src="/images/home/clients/client-8.png" alt="Client" />
                        </div>
                        <div className={`item ${props.mode}`}>
                            <img src="/images/home/clients/client-9.png" alt="Client" />
                        </div>
                        <div className={`item ${props.mode}`}>
                            <img src="/images/home/clients/client-10.png" alt="Client" />
                        </div>
                        <div className={`item ${props.mode}`}>
                            <img src="/images/home/clients/client-11.png" alt="Client" />
                        </div>
                        <div className={`item ${props.mode}`}>
                            <img src="/images/home/clients/client-12.png" alt="Client" />
                        </div>
                    </OwlCarousel>
                </div>
            </Container>
        </div>
    )
}

export default OurClients