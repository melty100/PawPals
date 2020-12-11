import React, { useEffect, useState, useRef } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import HeroSection from '../../components/HeroSection/'
import AllQuestions from '../../components/AllQuestions.js'
import API from '../../utils/API'
// import Question from '../../components/Question/Question'
import Topics from '../../components/Topics/Topics'
// import questions from '../../questions'
import './style.css'


const HomePage = () => {
    const [questions, setQuestions] = useState([])
    const questionRef = useRef();
    const contentRef = useRef();
    // const userRef = useRef();
    const topicRef = useRef();

    useEffect(() => {
        loadQuestions()
    }, [])

    function loadQuestions() {
        API.getPosts()
            .then(res =>
                setQuestions(res.data)
            )
            .catch(err => console.log(err));
    };

    const handleSubmit = e => {
        e.preventDefault();
        API.addPost({
            question: questionRef.current.value,
            content: contentRef.current.value,
            topic: topicRef.current.value,
            // userId: 
            // user: userRef.current.value
        })
            .then(result => loadQuestions())

            .catch(err => console.log(err));

        questionRef.current.value = "";
        contentRef.current.value = "";
        topicRef.current.value = "";

    };

    return (
        <>
            <HeroSection handleSubmit={handleSubmit} questionRef={questionRef} contentRef={contentRef} topicRef={topicRef} />
            {/* <div className="home_container"> */}
            <Container>
                <Row>
                    <Col  sm={8}>
                        {questions.map(question => (
                        <AllQuestions post={question}/>
                        ))}
                    </Col>
                    {/* <div className="topic_contianer"> */}
                    <Col sm={4}>
                        <Topics />
                    </Col>
                    {/* </div> */}
                </Row>
            </Container>


        </>
    )
}

export default HomePage
