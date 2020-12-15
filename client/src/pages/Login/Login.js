import React from 'react'
import { Form, Card, Button } from 'react-bootstrap'

const Login = () => {


    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card style={{display: "flex", justifyContent: "center", width: "500px", marginTop: "50px" }}>
                <Card.Body>
                    <h1>Login</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
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

export default Login
