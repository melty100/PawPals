import React, { useState, useRef, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import PlaceholderImg from '../../images/profile-placeholder.png'
import { Card, Row, Col, ListGroup, Button, Modal, Form } from 'react-bootstrap'
import API from '../../utils/API'

const CurrentProfile = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [profile, setProfile] = useState([])
    const [userQuestions, setUserQuestions] = useState([])
    const [userComments, setUserComments] = useState([])
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const petBioRef = useRef();
    const userBioRef = useRef();
    

    useEffect(() => {
        loadProfile()
    }, [])

    useEffect(() => {
        loadUserQuestions()
    }, [profile.id])

    useEffect(() => {
        loadUserComments()
    }, [profile.id])

    // const { profileId } = useParams();

    function loadProfile() {
        API.getMyProfile()
            .then(res =>
                // console.log(res.data)
                setProfile(res.data[0])
            )
            .catch(err => console.log(err));
    };

    function loadUserQuestions() {
        API.getUserQuestions(profile.id)
            .then(res =>
                // console.log(res.data)
                setUserQuestions(res.data)
            )
            .catch(err => console.log(err));
    };

    function loadUserComments() {
        API.getUserComments(profile.id)
            .then(res =>
                setUserComments(res.data)
            )
            .catch(err => console.log(err));
    };

    const handleSubmit = e => {
        // e.preventDefault();
        API.updateProfile({
            userName: profile.userName,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            petBio: petBioRef.current.value,
            userBio: userBioRef.current.value
        })
            .then(result => console.log(result)
                    
                )

            .catch(err => console.log(err));

            firstNameRef.current.value = "";
            lastNameRef.current.value = "";
            petBioRef.current.value = "";
            userBioRef.current.value = "";

    };

     console.log(profile)
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <Card style={{
                        margin: '40px 0px'
                    }}>

                        <Card.Body
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}>
                            <Card.Img
                                variant="top"
                                src={PlaceholderImg}
                                style={{
                                    height: '150px',
                                    width: '150px'
                                }} />
                            <div style={{
                                padding: '5px 20px'
                            }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Card.Title><h2>{profile.firstName} {profile.lastName}</h2></Card.Title>


                                    <Button variant="danger" size="sm" style={{ height: 'max-content' }} onClick={handleShow}>
                        
                                        Edit Profile
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit your Profile: </Modal.Title>
                                        </Modal.Header>
                                        <Form onSubmit={handleSubmit}>
                                            <Modal.Body>
                                            <Form.Row>
                                                    <Col>
                                                        <Form.Label>First Name </Form.Label>
                                                        <Form.Control placeholder="First name" required ref={firstNameRef}/>
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Last Name </Form.Label>
                                                        <Form.Control placeholder="Last name" required ref={lastNameRef}/>
                                                    </Col>
                                                </Form.Row>
                                            

                                                <Form.Group controlId="AboutMeInput">
                                                    <Form.Label>About Me: </Form.Label>
                                                    <Form.Control as="textarea" rows={3} ref={userBioRef}/>
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>My Pet: </Form.Label>
                                                    <Form.Control as="textarea" rows={3} ref={petBioRef}/>
                                                </Form.Group>
                                                




                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="primary" type="submit" onClick={() => setShow(false)}>
                                                    Submit
                                                </Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Modal>

                                </div>

                                <Card.Text>
                                    <p>
                                        <strong>About Me: </strong>
                                        {profile.userBio}
                                    </p>

                                    <p>
                                        <strong>My Pet: </strong>
                                        {profile.petBio}
                                    </p>

                                </Card.Text>
                            </div>

                        </Card.Body>

                    </Card>
                </Col>

            </Row>

            <Row>
                <Col sm={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}><h3>Questions</h3></Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    {userQuestions.map(userQuestion => (
                                    <ListGroup.Item>
                                        <Link to={`/question/${userQuestion.id}`} style={{color: 'black'}}>
                                        {userQuestion.question}
                                        </Link>
                                    </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}><h3>Community Contributions</h3></Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                {userComments.map(userComment => (
                                    <ListGroup.Item>
                                        <Link to={`/question/${userComment.QuestionId}`} style={{color: 'black'}}>
                                        {userComment.comment}
                                        </Link>
                                    </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CurrentProfile
