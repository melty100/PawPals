import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { LikeButton, DislikeButton, FooterContents } from './CommentsElements'
const Comments = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <Card >
                <Card.Body>
                    <Card.Title>@Username</Card.Title>
                    <Card.Text className="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </Card.Text>

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
