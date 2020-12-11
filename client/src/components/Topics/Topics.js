import React from 'react'
import { Card, ListGroup, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './style.css'

const Topics = () => {


    return (
        <Container className='topicContainer'>
            <Card className='my-3 p-3 rounded topic__card'>

                <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}><h3>Topics</h3></Card.Title>
                    <ListGroup variant='flush' >

                        <ListGroup.Item className="topic__list" >
                            <Link to={`/topic/feeding`}>
                                <h5 >Feeding</h5>
                            </Link>
                        </ListGroup.Item>


                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/potty training`}>
                                <h5>Potty Training</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/exercise`}>
                                <h5>Exercise</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/toys`}>
                                <h5>Toys</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list" >
                            <Link to={`/topic/housing`}>
                                <h5>Housing</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/small animals`}>
                                <h5>Small Animals</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/large animals`}>
                                <h5>Large Animals</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/reptiles`}>
                                <h5>Reptiles</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/amphibians`}>
                            <h5>Amphibians</h5>
                            </Link>
                        </ListGroup.Item>
                    <ListGroup.Item className="topic__list">
                        <Link to={`/topic/exotic pets`}>
                            <h5>Exotic Pets</h5>
                        </Link>
                    </ListGroup.Item>


                    </ListGroup>
                </Card.Body>
            </Card>
        </Container >
    )
}

export default Topics