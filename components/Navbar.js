import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarSection = ({ mode }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg={mode == "light" ? "white" : mode} variant={mode} className="p-0 border-bottom navigate">
            <Container fluid className='px-5'>
                <Navbar.Brand className='p-0'>
                    <Link href="/"><img src={`/images/logo/logo-${mode}.png`} alt="Tawajood" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav className='gap-5 font-cairo-bold'>
                        <Link href="/jobs" className={`${mode} px-0 py-2`}>hiring</Link>
                        <Link href="/about" className={`${mode} px-0 py-2`}>about us</Link>
                        <Link href="/#services" className={`${mode} px-0 py-2`}>services</Link>
                        <Nav.Link className={`${mode} px-0 py-2`}>projects</Nav.Link>
                        <Link href="/blog" className={`${mode} px-0 py-2`}>blog</Link>
                        <Link href="/#whyChoosingUs" className={`${mode} px-0 py-2`}>why choosing us</Link>
                        <Link href="/contact-us" className={`${mode} px-0 py-2`}>contact us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarSection