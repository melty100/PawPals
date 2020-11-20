import React from 'react'
import { Card, ListGroup} from 'react-bootstrap'
import './style.css'

const Topics = () => {
    return (
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
    )
}

export default Topics