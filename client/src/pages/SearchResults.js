import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import AllQuestions from '../components/AllQuestions.js'
import Topics from '../components/Topics/Topics'
import Search from '../components/Search/Search'
import API from "../utils/API";

const SearchResults = () => {
    const [questions, setQuestions] = useState([])
    const [questionSearch, setQuestionSearch] = useState("");

    const handleInputChange = event => {
        
        const { value } = event.target;
        setQuestionSearch(value);
      };
    
      const handleFormSubmit = event => {
        
        event.preventDefault();
        API.searchPosts(questionSearch)
          .then(res => setQuestions(res.data))
        // .then(res => console.log(res.data))
          .catch(err => console.log(err));
      };
    
    
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8}>
                        {questions.map(question => (
                            <AllQuestions post={question} />
                        ))}
                    </Col>
                    
                    <Col sm={4}>
                        <Search handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} questionSearch={questionSearch}/>
                        <Topics />
                    </Col>
                   
                </Row>
            </Container>
        </div>
    )
}

export default SearchResults
