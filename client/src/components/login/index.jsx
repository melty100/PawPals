import "./style.scss";
import "../Header/style.css";
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
export { Login } from "./login";
export { Register } from "./register";

const Header = () => {
    return (
        <>
            <Navbar className="header__navbar" variant="dark">
                <Link to="/">

                <Navbar.Brand as='div' href="#home">Project 3</Navbar.Brand>
                </Link>
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

