import React from 'react'
import { Card, ListGroup, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './style.css'

const Topics = () => {


    return (
        <Container className='topicContainer'>
            <Card className='my-3 p-3 rounded topic__card' style={{ width: '18rem' }}>

                <Card.Body >
                    <Card.Title style={{ textAlign: "center" }}><h3>Topics</h3></Card.Title>
                    <ListGroup variant='flush' >

                        <ListGroup.Item className="topic__list" >
                            <Link to={`/topic/feeding`} style={{ textDecoration: "none" }}>
                                <h5 >Feeding</h5>
                            </Link>
                        </ListGroup.Item>


                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/potty training`} style={{ textDecoration: "none" }}>
                                <h5>Potty Training</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/exercise`} style={{ textDecoration: "none" }}>
                                <h5>Exercise</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list" >
                            <Link to={`/topic/toys`} style={{ textDecoration: "none" }}>
                                <h5>Toys</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list" >
                            <Link to={`/topic/housing`} style={{ textDecoration: "none" }}>
                                <h5>Housing</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/small animals`} style={{ textDecoration: "none" }}>
                                <h5>Small Animals</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/large animals`} style={{ textDecoration: "none" }}>
                                <h5>Large Animals</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/reptiles`} style={{ textDecoration: "none" }}>
                                <h5>Reptiles</h5>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="topic__list">
                            <Link to={`/topic/amphibians`} style={{ textDecoration: "none" }}>
                            <h5>Amphibians</h5>
                            </Link>
                        </ListGroup.Item>
                    <ListGroup.Item className="topic__list">
                        <Link to={`/topic/exotic pets`} style={{ textDecoration: "none" }}>
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