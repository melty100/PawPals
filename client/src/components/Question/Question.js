import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './style.css'

const Question = ({ question }) => {
    return (
        <Card className='my-3 p-3 rounded questionCard' >
            <Card.Body>
                <Link to={`/question/${question.id}`}>

                <Card.Title as='div'className="questionTitle">{question.title}</Card.Title>
                </Link>
                <Card.Text as='div' className="questionText">
                    {question.content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Question
