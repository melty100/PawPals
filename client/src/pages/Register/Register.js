import React from 'react'
import { Form, Card, Button, Col } from 'react-bootstrap'

const Register = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ display: "flex", justifyContent: "center", width: "500px", marginTop: "50px" }}>
                <Card.Body>
                    <h1>Register</h1>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId="formBasicFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder="First name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicFirstName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last name" />
                                </Form.Group>
                                
                            </Col>
                        </Form.Row>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="userName" placeholder="Enter username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Register
