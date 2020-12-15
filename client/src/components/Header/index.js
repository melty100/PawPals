import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import "./style.css";

const Header = () => {
    return (
        <>
            <Navbar className="header__navbar" variant="dark">
                <Link to="/">

                <Navbar.Brand as='div' href="#home">Project 3</Navbar.Brand>
                </Link>
                <Nav as='div' className="mr-auto">
                    <Link to="/myprofile">
                        <Navbar.Text>My Profile</Navbar.Text>
                    
                    </Link>
                    
                </Nav>
                
                
                    <Button variant="outline-info">Login</Button>
                
            </Navbar>
        </>
    )
}

export default Header