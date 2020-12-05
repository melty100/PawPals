import React, { useState, useEffect } from 'react'
import { Row, Col, Card} from 'react-bootstrap'
// import Header from '../components/Header'
import Topics from '../components/Topics/Topics'
// import questions from '../questions'
import CommentForm from '../components/CommentForm/CommentForm'
import Comments from '../components/Comments/Comments'
import axios from 'axios'

const QuestionPage = ({ match }) => {

    

    // const question = questions.find((q) => q.id === match.params.id)
    const [question, setQuestion] = useState({})

    useEffect(() => {
        const fetchQuestion = async() => {
            const { data } = await axios.get(`/questions/question/${match.params.id}`)

            setQuestion(data)
        }

        fetchQuestion()
    }, [match])


    return (
        <div>
            <>
                {/* <Header /> */}
                <Row>
                    <Col sm={8}>
                        <Card className='my-3 rounded questionCard' >
                        <Card.Header><small className="text-muted">Posted: 30 minutes ago</small></Card.Header>
                            <Card.Body>
                                <Card.Title as='div' className="questionTitle">{question.title}</Card.Title>
                                <Card.Text as='div' className="questionText px-3">
                                    {question.content}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <CommentForm />
                        <Comments />
                        
                    </Col>
                    <Col sm={4}>
                        <Topics />
                    </Col>
                </Row>
                
            </>
        </div>
    )
}

export default QuestionPage
