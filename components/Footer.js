import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = (props) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <footer>
            <div className={`go-to-top ${props.mode}`}>
                <img src="/images/icons/go-to-top.png" alt="Go to top" onClick={scrollToTop} />
            </div>
            <Container fluid className='px-5'>
                <div className='d-flex justify-content-between footer-cont gap-5'>
                    <div className="company-logo">
                        <div className="logo">
                            <img src="/images/logo/logo-dark.png" alt="Tawajood" />
                        </div>
                        <p className='fs-5 text-white w-75'>Tawajood is a company specialized in providing high-quality web design, store design</p>
                    </div>
                    <div className="links">
                        <Link href="/about"><span>about us</span></Link>
                        <Link href="/#whyChoosingUs"><span>why us</span></Link>
                        <Link href="/#services"><span>services</span></Link>
                        <Link href="/contact-us"><span>contact us</span></Link>
                        <Link href="/projects"><span>projects</span></Link>
                        <Link href=""><span>privacy policy</span></Link>
                        <Link href="/blog"><span>blog</span></Link>
                        <Link href=""><span>terms and conditions</span></Link>
                    </div>
                    <div className="contact-us">
                        <p className="title fs-1 font-cairo-bold text-white"><span>contact us</span></p>
                        <div className="d-flex flex-column gap-1">
                            <Link href={"tel:+201024848723"} className="contact-item d-flex justify-content-between align-items-center">
                                <p href={"tel:+201024848723"} className="contact-value font-cairo-MontMedium m-0 text-white">+201024848723</p>
                                <div className="contact-icon">
                                    <div className="background"></div>
                                    <i className="fas fa-phone"></i>
                                </div>
                            </Link>
                            <Link href={"mailto:info@tawajood.com"} className="contact-item d-flex justify-content-between align-items-center">
                                <p className="contact-value font-cairo-MontMedium m-0 text-white">info@tawajood.com</p>
                                <div className="contact-icon">
                                    <div className="background"></div>
                                    <i className="far fa-envelope"></i>
                                </div>
                            </Link>
                            <Link target={"_blank"} href={"https://www.linkedin.com/company/tawajood/"} className="contact-item d-flex justify-content-between align-items-center">
                                <p className="contact-value font-cairo-MontMedium m-0 text-white">@Tawajood</p>
                                <div className="contact-icon">
                                    <div className="background"></div>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                            </Link>
                            <Link target={"_blank"} href={"https://www.instagram.com/tawajoodco/"} className="contact-item d-flex justify-content-between align-items-center">
                                <p className="contact-value font-cairo-MontMedium m-0 text-white">@tawajoodco</p>
                                <div className="contact-icon">
                                    <div className="background"></div>
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </Link>
                            <Link target={"_blank"} href={"https://www.behance.net/tawajoodcompany"} className="contact-item d-flex justify-content-between align-items-center">
                                <p className="contact-value font-cairo-MontMedium m-0 text-white">@tawajoodcompany</p>
                                <div className="contact-icon">
                                    <div className="background"></div>
                                    <i className="fab fa-behance"></i>
                                </div>
                            </Link>
                            <Link target={"_blank"} href={"https://www.facebook.com/tawajood"} className="contact-item d-flex justify-content-between align-items-center">
                                <p className="contact-value font-cairo-MontMedium m-0 text-white">@Tawajood</p>
                                <div className="contact-icon">
                                    <div className="background"></div>
                                    <i className="fab fa-facebook-f"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='all-rights text-center font-cairo-semibold text-white'>
                    All Rights Reserved {new Date().getFullYear()}
                </p>
            </Container>
        </footer>
    )
}

export default Footer