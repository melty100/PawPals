import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { FaRegComments } from 'react-icons/fa'
import './style.css'

const Question = ({ question }) => {
    // const [commentCount, setCommentCount] = useState[0];

    return (
        <Card className='my-3 rounded questionCard' >
            <Card.Header><small className="text-muted">Posted: 30 minutess ago</small></Card.Header>
            <Card.Body>
                <Link to={`/question/${question.id}`}>

                    <Card.Title as='div' className="questionTitle">{question.title}</Card.Title>
                </Link>
                <Card.Text as='div' className="questionText p-3">
                    {question.content}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className="comments_icon">
                    <FaRegComments  /> 
                </div>
                </Card.Footer>
        </Card>
    )
}

export default Question
