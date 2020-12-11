import React, { useState, useRef, useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { LikeButton, DislikeButton, FooterContents } from './CommentsElements'
import API from "../../utils/API";

const Comments = ({ comment }) => {
    const [count, setCount] = useState(0)
    

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    
    // const userRef = useRef();
    // const [state, dispatch] = useStoreContext();
    
    

    return (
        <div>
            <Card >
                <Card.Body>
                    <Card.Title>@Username</Card.Title>
                    <Card.Text className="px-5"> {comment.comment}</Card.Text>

                </Card.Body>
                <Card.Footer>
                    <FooterContents>
                        <small className="text-muted">Posted: 20 minutes ago</small>
                        <div>
                            <LikeButton onClick={increment} />
                            <span>{count}</span>
                            <DislikeButton onClick={decrement} />
                        </div>

                        {/* <ReplyComment /> */}
                    </FooterContents>
                </Card.Footer>
            </Card>
            
        </div>
    )
}

export default Comments
