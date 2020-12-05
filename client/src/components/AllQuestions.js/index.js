import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap'
import { FaRegComments } from 'react-icons/fa'
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import './style.css'


const AllQuestions = () => {

    const [state, dispatch] = useStoreContext();

    const getPosts = () => {
        dispatch({ type: LOADING });
        API.getPosts()
            .then(results => {
                dispatch({
                    type: UPDATE_POSTS,
                    posts: results.data
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            {state.posts.map(post => (
                <Card className='my-3 rounded questionCard' >
                <Card.Header><small className="text-muted">Posted: {post.createdAt}</small></Card.Header>
                <Card.Body key={post.id}>
                    <Link to={`/question/${post.id}`}>

                        <Card.Title as='div' className="questionTitle">{post.question}</Card.Title>
                    </Link>
                    <Card.Text as='div' className="questionText p-3">
                        {post.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="comments_icon">
                        <FaRegComments />
                    </div>
                </Card.Footer>
            </Card>

            ))}
            
        </div>
    )
}

export default AllQuestions;
