import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useParams } from "react-router-dom";
// import Header from '../components/Header'
import Topics from '../components/Topics/Topics'
// import questions from '../questions'
import CommentForm from '../components/CommentForm/CommentForm'
import Comments from '../components/Comments/Comments'
import API from "../utils/API";
// import { useStoreContext } from "../utils/GlobalState";
import { GET_POST } from "../utils/actions";
// import axios from 'axios'

const QuestionPage = (props) => {

   const [question, setQuestion] = useState({})

   const {id} = useParams()
   useEffect(() => {
       API.getPost(id)
        .then(res => setQuestion(res.data))
        .catch(err => console.log(err))
   }, [])
    
   

    // useEffect(() => {
    //     const fetchQuestion = async() => {
    //         const { data } = await axios.get(`/questions/question/${match.params.id}`)

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
                        <Card className='my-3 rounded questionCard' >
                            <Card.Header><small className="text-muted">Posted: 30 minutes ago</small></Card.Header>
                            <Card.Body>
                                <Card.Title as='div' className="questionTitle">{question.question}</Card.Title>
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
