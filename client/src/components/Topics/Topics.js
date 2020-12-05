import React from 'react'
import { Card, ListGroup, Container} from 'react-bootstrap'
import './style.css'

const Topics = () => {
    return (
        <Container className='topicContainer'>
        <Card className='my-3 p-3 rounded topic__card'>
            
            <Card.Body>
            <Card.Title style={{ textAlign: "center" }}><h3>Topics</h3></Card.Title>
            <ListGroup variant='flush' >
                <ListGroup.Item className="topic__list">
                    <h5>Feeding</h5>
                </ListGroup.Item>
                <ListGroup.Item className="topic__list">
                    <h5>Potty Training</h5>
                </ListGroup.Item>
                <ListGroup.Item className="topic__list">
                    <h5>Exercise</h5>
                </ListGroup.Item>
                <ListGroup.Item className="topic__list">
                    <h5>Training</h5>
                </ListGroup.Item>
                <ListGroup.Item className="topic__list">
                    <h5>Toys</h5>
                </ListGroup.Item>
                <ListGroup.Item className="topic__list">
                    <h5>Housing</h5>
                </ListGroup.Item>
                <ListGroup.Item className="topic__list">
                    <h5>Small Animals</h5>
                </ListGroup.Item>
                <ListGroup.Item className="topic__list">
                    <h5>Large Animals</h5>
                </ListGroup.Item>
                <ListGroup.Item className="topic__list">
                    <h5>Reptiles</h5>
                </ListGroup.Item>
                <ListGroup.Item className="topic__list">
                    <h5>Amphibians</h5>
                </ListGroup.Item>
                <ListGroup.Item className="topic__list">
                    <h5>Exotic Pets</h5>
                </ListGroup.Item>
                
                
            </ListGroup>
            </Card.Body>
        </Card>
        </Container>
    )
}

export default Topics