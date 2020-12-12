import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from 'react-bootstrap'
import { FaRegComments } from 'react-icons/fa'
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import './style.css'


const AllQuestions = ({ post }) => {

    // const [state, dispatch] = useStoreContext();
    const [user, setUser] = useState({})

    // useEffect(() => {
    //     getPosts();
    // }, []);

    

    // const getPosts = () => {
    //     dispatch({ type: LOADING });
    //     API.getPosts()
    //         .then(results => {
    //             dispatch({
    //                 type: UPDATE_POSTS,
    //                 posts: results.data
    //             });
    //         })
    //         .catch(err => console.log(err));
    // };

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



    return (
        <div>
            {/* {state.posts.map(post => ( */}
                <Card key={post.id} className='my-3 rounded questionCard' >
                    <Card.Header>
                        <small className="text-muted">
                            Posted by: 
                            <Link to={`/profile/${user.id}`}>
                            {user.userName} 
                            </Link>
                            {post.createdAt}
                        </small>
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

            {/* ))} */}

        </div>
    )
}

export default AllQuestions;
