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
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { value } = event.target;
        setQuestionSearch(value);
      };
    
      const handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
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
                    {/* <div className="topic_contianer"> */}
                    <Col sm={4}>
                        <Search handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} questionSearch={questionSearch}/>
                        <Topics />
                    </Col>
                    {/* </div> */}
                </Row>
            </Container>
        </div>
    )
}

export default SearchResults
