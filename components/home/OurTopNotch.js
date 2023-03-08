import React from 'react'
import { Container } from 'react-bootstrap'

const OurTopNotch = (props) => {
    return (
        <div className='our-top-notch py-5'>
            <Container fluid className='p-5'>
                <div className="section-main-title mb-5">
                    <p className={`section-title-sm ${props.mode}`}>Notch</p>
                    <p className="section-title">Our Top Notch</p>
                </div>
                <div className="notch d-flex justify-content-between">
                    <div className="item">
                        <img src="/images/home/our-top-notch/notch-1.png" alt="Notch" />
                    </div>
                    <div className="item">
                        <img src="/images/home/our-top-notch/notch-2.png" alt="Notch" />
                    </div>
                    <div className="item">
                        <img src="/images/home/our-top-notch/notch-3.png" alt="Notch" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OurTopNotch