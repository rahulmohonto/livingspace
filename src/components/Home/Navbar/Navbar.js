import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import './Navbar.css';
import Anime, { anime } from 'react-anime';
import Reveal from 'react-reveal/Reveal';

const NavbarTop = () => {
    return (
        <section className="container navbar-section">
            <div className="row">
                <Anime opacity={[0, 1]}>
                    < Navbar fixed="top" collapseOnSelect expand="lg" className="bg-light text-dark" >
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Reveal duration={3000}>
                                <h3 duration={3000} delay={2000} className="nav-title">Living Space Organizer</h3>
                            </Reveal>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="m-auto text-dark">

                                    <Nav.Link className="text-dark homer" href="/home">Home</Nav.Link>
                                    <Nav.Link className="text-dark homer" href="#">About</Nav.Link>
                                    <Nav.Link className="text-dark homer" href="#contact">Contact</Nav.Link>
                                    <Nav.Link className="text-dark homer" href="#services">Services</Nav.Link>
                                </Nav>

                                <Nav className="text-dark">
                                    <Nav.Link className="text-dark homer" href="/login">Sign Up / </Nav.Link>
                                    <Nav.Link className="text-dark homer" href="/login"> Sign In</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </  Navbar>
                </Anime>
            </div >
        </section >
    );
};

export default NavbarTop;