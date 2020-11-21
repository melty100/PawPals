import React from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
// import Header from '../components/Header'
import Topics from '../components/Topics/Topics'
import questions from '../questions'
// import axios from 'axios'

const QuestionPage = ({ match }) => {

    const question = questions.find((q) => q.id === match.params.id)
    // const [question, setQuestion] = useState({})

    // useEffect(() => {
    //     const fetchQuestion = async() => {
    //         const { data } = await axios.get(`/api/question/${match.params.id}`)

    //         setQuestion(data)
    //     }

    //     fetchQuestion()
    // }, [match])


    return (
        <div>
            <>
                {/* <Header /> */}
                <Row>
                    <Col sm={8}>
                        <Card className='my-3 p-3 rounded questionCard' >
                            <Card.Body>
                                <Card.Title as='div' className="questionTitle">{question.title}</Card.Title>
                                <Card.Text as='div' className="questionText">
                                    {question.content}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card >
                            <Card.Body>
                                <Card.Title>Username</Card.Title>
                                <Card.Text>Here's some help</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='my-3 p-3 rounded questionCard'>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label><h3>Answer this question</h3></Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
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
