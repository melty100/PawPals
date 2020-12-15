import React, { useRef, useState } from 'react'
import { Form, Card, Button, Col, Alert } from 'react-bootstrap'
import { Link } from "react-router-dom"
import API from '../../utils/API'

const Register = () => {

    const [regData, setRegData] = useState({})
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();



    const handleSubmit = e => {
        e.preventDefault();
        API.userRegister({
            userName: userNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            lastName: lastNameRef.current.value,
            firstName: firstNameRef.current.value


            // userId: 
            // user: userRef.current.value
        })
            .then(result => {
                if(result.status === 200){
                    HandleRedirect();
                } else {
                    console.log("WROOOONG");
                }
                
                

            })

            .catch(err => console.log(err));

        userNameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        lastNameRef.current.value = "";
        firstNameRef.current.value = "";

    };

    function HandleRedirect(){
        // e.preventDefault();
        
        // console.log("REDIRECTED");
        return <div>
            <p></p>
        </div>
            // return <Alert variant = "success" >
            //                  This is a alert with{' '}
            //                  <Alert.Link to={"login"}>an example link</Alert.Link>. Give it a click if you
            //                like.
            //                           </div>
        
        // {regData === 200 ? <Alert variant = "success" >
        //                     This is a alert with{' '}
        //                     <Link to={"login"}>an example link</Link>. Give it a click if you
        //                     like.
        //                             </Alert>
        //                             : console.log("WRONG")}
    }


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
                                    <Form.Control placeholder="First name" required ref={firstNameRef} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="Last name" required ref={lastNameRef} />
                                </Form.Group>

                            </Col>
                        </Form.Row>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required ref={emailRef} />
                        </Form.Group>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="userName" placeholder="Enter username" required ref={userNameRef} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required ref={passwordRef} />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                        
                    </Form>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default Register
