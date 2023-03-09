import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarSection = ({ mode, navHeigh }) => {
    return (
        <Navbar ref={navHeigh} collapseOnSelect expand="lg" bg={mode == "light" ? "white" : mode} variant={mode} className="p-0 border-bottom navigate">
            <Container fluid className='px-5'>
                <Navbar.Brand className='p-0'>
                    <Link href="/"><img src={`/images/logo/logo-${mode}.png`} alt="Tawajood" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav className='gap-5 nav-cont font-cairo-bold'>
                        <Nav.Link as={Link} href="/jobs" className={`${mode} px-0 py-2`}>hiring</Nav.Link>
                        <Nav.Link as={Link} href="/about" className={`${mode} px-0 py-2`}>about us</Nav.Link>
                        <Nav.Link as={Link} href="/#services" className={`${mode} px-0 py-2`}>services</Nav.Link>
                        <Nav.Link as={Link} href="/projects" className={`${mode} px-0 py-2`}>projects</Nav.Link>
                        <Nav.Link as={Link} href="/blog" className={`${mode} px-0 py-2`}>blog</Nav.Link>
                        <Nav.Link as={Link} href="/#whyChoosingUs" className={`${mode} px-0 py-2`}>why choosing us</Nav.Link>
                        <Nav.Link as={Link} href="/contact-us" className={`${mode} px-0 py-2`}>contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarSection