import React from 'react'
// import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './style.css'

const Question = () => {
    return (
        <Card className='my-3 p-3 rounded questionCard' >
            <Card.Body>
                
            <Card.Title className="questionTitle">What should I feed my puppy?</Card.Title>
                <Card.Text className="questionText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Question
