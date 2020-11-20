import React from 'react'
import { Card } from 'react-bootstrap'

const UserSidebar = () => {
    return (
        <div>
            <Card>
                <Card.Title>User1234</Card.Title>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>My Questions</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserSidebar
