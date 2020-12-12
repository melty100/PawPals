import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useParams } from "react-router-dom";
// import Header from '../components/Header'
import Topics from '../components/Topics/Topics'
import Search from '../components/Search/Search'
// import questions from '../questions'
import Comments from '../components/Comments/Comments'
import CommentForm from '../components/CommentForm/CommentForm'
import API from "../utils/API";


const QuestionPage = (props) => {

    const [question, setQuestion] = useState({})
    const [comments, setComments] = useState([])
    const [user, setUser] = useState({})
    const commentRef = useRef();

    const { id } = useParams()
    useEffect(() => {
        API.getPost(id)
            .then(res => setQuestion(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        loadComments()
    }, [])

    function loadComments() {
        API.getCommentsById(id)
            .then(res =>
                setComments(res.data)
            )
            .catch(err => console.log(err));
    };


    const handleSubmit = e => {
        e.preventDefault();
        API.addComment({
            likes: commentRef.current.value,
            QuestionId: id,
            // user: userRef.current.value
        })
            .then(result => loadComments())

            .catch(err => console.log(err));

        commentRef.current.value = "";

    };

    useEffect(() => {
        loadUsers()
    }, [])


    function loadUsers() {
        API.getUser(question.UserId)
            .then(res =>
                setUser(res.data)
            )
            .catch(err => console.log(err));
    };




    


    return (
        <div>
            <>
                {/* <Header /> */}
                <Row>
                    <Col sm={8}>
                        <Card className='my-3 rounded questionCard' >
                            <Card.Header><small className="text-muted">Posted By: {user.userName} {question.createdAt}</small></Card.Header>
                            <Card.Body>
                                <Card.Title as='div' className="questionTitle">{question.question}</Card.Title>
                                <Card.Text as='div' className="questionText px-3">
                                    {question.content}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <CommentForm handleSubmit={handleSubmit} commentRef={commentRef}/>
                        {comments.map(comment => (
                        <Comments questionId={question.id} comment={comment} />
                        ))}
                    </Col>
                    <Col sm={4}>
                        <Search />
                        <Topics />
                    </Col>
                </Row>

            </>
        </div>
    )
}

export default QuestionPage
