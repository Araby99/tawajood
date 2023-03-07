import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const GetInTouchWithUs = () => {
    return (
        <div className='get-in-touch-with-us py-5'>
            <Container fluid className='p-5'>
                <div className="section-main-title mb-5 white">
                    <p className="section-title-sm">Get In Touch With Us</p>
                    <p className="section-title">Get In Touch With Us</p>
                </div>
                <div className="contact">
                    <Link href="/contact-us">
                        Contact Us
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default GetInTouchWithUs