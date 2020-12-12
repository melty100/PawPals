import React, { useState, useRef, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import PlaceholderImg from '../../images/profile-placeholder.png'
import { Card, Row, Col, ListGroup, Button, Modal, Form } from 'react-bootstrap'
import API from '../../utils/API'


const MyProfile = () => {

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
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        loadProfile()
    }, [])

    useEffect(() => {
        loadUserQuestions()
    }, [])

    useEffect(() => {
        loadUserComments()
    }, [])

    const { profileId } = useParams();

    function loadProfile() {
        API.getUser(profileId)
            .then(res =>
                setProfile(res.data)
            )
            .catch(err => console.log(err));
    };

    function loadUserQuestions() {
        API.getUserQuestions(profileId)
            .then(res =>
                setUserQuestions(res.data)
            )
            .catch(err => console.log(err));
    };

    function loadUserComments() {
        API.getUserComments(profileId)
            .then(res =>
                setUserComments(res.data)
            )
            .catch(err => console.log(err));
    };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     API.addProfile({
    //         // email: req.body.email,
    //         // password: req.body.password,
    //         // userName: req.body.userName,
    //         email: emailRef.current.value,
    //         password: passwordRef.current.value,
    //         userName: usernameRef.current.value,
    //         firstName: firstNameRef.current.value,
    //         lastName: lastNameRef.current.value,
    //         petBio: petBioRef.current.value,
    //         userBio: userBioRef.current.value,
            

    //         // userId: 
    //         // user: userRef.current.value
    //     })
    //         // .then(result => loadProfile())
    //         .then(result => console.log(result))

    //         .catch(err => console.log(err));

    //         emailRef.current.value = "";
    //         passwordRef.current.value = "";
    //         usernameRef.current.value = "";
    //         firstNameRef.current.value = "";
    //         lastNameRef.current.value = "";
    //         petBioRef.current.value = "";
    //         userBioRef.current.value = "";
            


    // };

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
                                        {/* <Link className='text-white' to='/edit-profile' style={{textDecoration: 'none'}}>
                                            Edit Profile
                                        </Link> */}
                                        Edit Profile
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit your Profile: </Modal.Title>
                                        </Modal.Header>
                                        <Form>
                                            <Modal.Body>
                                            <Form.Row>
                                                    <Col>
                                                        <Form.Label>email </Form.Label>
                                                        <Form.Control placeholder="email" required ref={emailRef}/>
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>password </Form.Label>
                                                        <Form.Control placeholder="pw" required ref={passwordRef}/>
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>userName </Form.Label>
                                                        <Form.Control placeholder="un" required ref={usernameRef}/>
                                                    </Col>
                                                </Form.Row>
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
                                                <div className="mb-3">
                                                    <Form.File id="formcheck-api-regular">
                                                        <Form.File.Label>Upload a Picture of yourself</Form.File.Label>
                                                        <Form.File.Input />
                                                    </Form.File>
                                                </div>




                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="primary" type="submit">
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

export default MyProfile
