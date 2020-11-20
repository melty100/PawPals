import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Question from '../components/Question/Question'
import Topics from '../components/Topics/Topics'
import questions from '../questions'

const QuestionPage = () => {
    return (
        <div>
            <>
                <Row>
                {questions.map(question => (
                    <Col key ={question.id} sm={12} md={6} lg={4} xl={3}>
                        <Question question={question}/>
                    </Col>
                ))}
                    <Col sm={4}>
                        <Topics />
                    </Col>
                </Row>
            </>
        </div>
    )
}

export default QuestionPage
