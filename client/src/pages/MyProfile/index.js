import React, { useState } from 'react'
import PlaceholderImg from '../../images/profile-placeholder.png'
import { Card, Row, Col, ListGroup, Button, Modal, Form } from 'react-bootstrap'


const MyProfile = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                    <Card.Title><h2>John Smith</h2></Card.Title>


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

                                                <Form.Group controlId="AboutMeInput">
                                                    <Form.Label>About Me: </Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>My Pet: </Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
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
                                        <strong>About Me: </strong>Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </p>

                                    <p>
                                        <strong>My Pet: </strong>Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
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
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
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
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
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
