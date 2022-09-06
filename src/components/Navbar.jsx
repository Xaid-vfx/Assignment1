import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons"

export default function Navigate() {
    return (
        <div className='navcom'>




            <Navbar expand="lg">
                <Container fluid id="center">
                    <div className='title'><FontAwesomeIcon className='icon' icon={faEnvelopeOpen} />
                    <Navbar.Brand  href="#"><strong>Estatery</strong></Navbar.Brand></div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 gap"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='Rent' href="#action1">Rent</Nav.Link>
                            <Nav.Link className='other' href="#action2">Buy</Nav.Link>
                            <Nav.Link className='other' href="#action2">Sell</Nav.Link>

                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle other" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Manage Property
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>

                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle other" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resources
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>


                        </Nav>
                        <Form className="d-flex gap">
                            <button className='loginbtn'>Login</button>
                            <button className='signupbtn'>Sign Up</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </div>
    )
}
