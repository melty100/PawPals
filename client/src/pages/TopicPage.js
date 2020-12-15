import React, { useState, useEffect }  from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import AllQuestions from '../components/AllQuestions.js'
import Topics from '../components/Topics/Topics'
import Search from '../components/Search/Search'
import API from '../utils/API'

const TopicPage = () => {

    const [questions, setQuestions] = useState([])
    const [questionSearch, setQuestionSearch] = useState("");
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

    const handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { value } = event.target;
        setQuestionSearch(value);
      };
    
      const handleFormSubmit = event => {
        
        event.preventDefault();
        API.searchPosts(questionSearch)
        //   .then(res => setQuestions(res.data))
        .then(res => setQuestions(res.data))
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
                        <Search handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} questionSearch={questionSearch}/>
                        <Topics topic={topic} onClick={loadQuestions} />
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default TopicPage
