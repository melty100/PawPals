import React from 'react'
import { Card, ListGroup, Container} from 'react-bootstrap'
import './style.css'

const Topics = () => {
    return (
        <Container className='topicContainer'>
        <Card className='my-3 p-3 rounded topic__card'>
            <Card.Title>Topics</Card.Title>
            <Card.Body>
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
                    <h5>Behavior Issues</h5>
                </ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
        </Container>
    )
}

export default Topics