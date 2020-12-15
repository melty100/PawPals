import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useParams, Link } from "react-router-dom";
import { format, formatDistanceToNow } from 'date-fns';
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
        async function getThisPost (){
         await API.getPost(id)
            .then(res => setQuestion(res.data))
            .catch(err => console.log(err))
        }

        getThisPost();
    }, [])

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

    


    

    // const questionPageDate = formatDistanceToNow(new Date(question.createdAt));
    // console.log(questionPageDate)



    return (
        <div>
            <>
                {/* <Header /> */}
                <Row>
                    <Col sm={8}>
                        <Card className='my-3 rounded questionCard' >
                            <Card.Header>
                                <div style={{ fontSize: "22px" }}>
                                    Posted by:{' '}
                                    <Link to={`/profile/${user.id}`} style={{ fontWeight: "bold", fontSize: "22px", color: "green" }}>
                                        {user.userName}
                                    </Link>
                                </div>
                                </Card.Header>
                            <Card.Body>
                                <Card.Title as='div' className="questionTitle">{question.question}</Card.Title>
                                <Card.Text as='div' className="questionText px-3">
                                    {question.content}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <CommentForm handleSubmit={handleSubmit} commentRef={commentRef} />
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
