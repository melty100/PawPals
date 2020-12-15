import React, { useState, useEffect }  from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import AllQuestions from '../components/AllQuestions.js'
import Topics from '../components/Topics/Topics'
import Search from '../components/Search/Search'
import API from '../utils/API'

const TopicPage = () => {

    const [questions, setQuestions] = useState([])
    // const userRef = useRef();
   
    const { topic } = useParams()

    useEffect(() => {
        loadQuestions()
    }, [topic])

    function loadQuestions() {
        API.getTopic(topic)
            .then(res =>
                setQuestions(res.data)
            )
            .catch(err => console.log(err));
    };

    

    return (
        <div>
            <Container>
                <Row>
                    <Col  sm={8}>
                        {questions.map(question => (
                        <AllQuestions post={question}/>
                        ))}
                    </Col>
                    
                    <Col sm={4}>
                        <Search />
                        <Topics topic={topic} onClick={loadQuestions}/>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default TopicPage
