import React, { useEffect, useState, useRef } from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import API from '../../utils/API'
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom"

const Login = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [invalidLogin, setinvalidLogin] = useState("");

    var userNameRef = useRef();
    var passwordRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        API.userLogin({
            userName: userNameRef.current.value,
            password: passwordRef.current.value
        })
        .then(result => {
            console.log({result});
            setLoggedIn(true);
            
        }).catch(err => {
            setinvalidLogin(err);
            console.log({err});
        });

        userNameRef.current.value = "";
        passwordRef.current.value = "";

    };

    /*const validLogin = () => {


        if(loggedIn){
            return (
            <div style={{display: "flex", justifyContent: "center"}}>
            <Card style={{display: "flex", justifyContent: "center", width: "500px", marginTop: "50px" }}>
                <Card.Body>
                    <h1>Login</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="userName" placeholder="Enter username" required ref={userNameRef}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required ref={passwordRef}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
        );

        } else {
            return (<Redirect to="/" />);
        }
    }

    return validLogin*/

    const getErrorMessage = () => {

        if(invalidLogin) {
            return;
        }
        
        return (<p>`${invalidLogin}` </p>)
    }

    return (
    <>
    {loggedIn && <Redirect to='/' /> }
        <div style={{display: "flex", justifyContent: "center"}}>
        <Card style={{display: "flex", justifyContent: "center", width: "500px", marginTop: "50px" }}>
            <Card.Body>
                <h1>Login</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="userName" placeholder="Enter username" required ref={userNameRef}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required ref={passwordRef}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                </Button>
                </Form>
                <p class="mt-3" >{`${invalidLogin}`}</p>
            </Card.Body>
        </Card>
    </div>
    </>
    );
}

export default Login
