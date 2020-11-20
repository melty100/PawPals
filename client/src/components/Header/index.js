import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import "./style.css"

const Header = () => {
    return (
        <>
            <Navbar className="header__navbar" variant="dark">
                <Navbar.Brand as='div' href="#home">Navbar</Navbar.Brand>
                <Nav as='div' className="mr-auto">
                    <Nav.Link href="#features">Questions</Nav.Link>
                    <Nav.Link href="#pricing">My Profile</Nav.Link>
                </Nav>
                <Form as='div' inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>
    )
}

export default Header