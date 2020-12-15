import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from 'react-bootstrap'
import { FaRegComments } from 'react-icons/fa'
import { format, formatDistanceToNow } from 'date-fns';
import API from "../../utils/API";
import './style.css'


const AllQuestions = ({ post }) => {

    
    const [user, setUser] = useState({})

    useEffect(() => {
        loadUsers()
    }, [])


    function loadUsers() {
        API.getUser(post.UserId)
            .then(res =>
                setUser(res.data)
            )
            .catch(err => console.log(err));
    };

    const questionDate = formatDistanceToNow(new Date(post.createdAt))
    console.log(questionDate)


    return (
        <div>
            
                <Card key={post.id} className='my-3 rounded questionCard' >
                    <Card.Header className="questionDiv">
                        {/* <small className="text-muted"> */}
                        <div style={{fontSize: "22px"}}>
                            Posted by:{' '}
                            <Link to={`/profile/${user.id}`} style={{fontWeight: "bold", fontSize: "22px",color: "green"}}>
                             { user.userName} 
                            </Link>
                        </div>
                        <div>
                            {questionDate} ago
                        </div>
                            
                        {/* </small> */}
                    </Card.Header>
                    <Card.Body>
                        <Link to={`/question/${post.id}`} style={{ textDecoration: "none" }}>

                            <Card.Title as='div' className="questionTitle" style={{ color: 'black' }}>{post.question} </Card.Title>
                        </Link>
                        <Card.Text as='div' className="questionText p-3">
                            {post.content}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Badge pill variant="success">
                            {post.topic}
                        </Badge>
                        <div className="comments_icon">
                            <FaRegComments />
                        </div>
                    </Card.Footer>
                </Card>

        </div>
    )
}

export default AllQuestions;
