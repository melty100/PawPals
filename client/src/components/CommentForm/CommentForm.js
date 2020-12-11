import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

const CommentForm = ({ handleSubmit, commentRef }) => {
    return (
        <div>
            <Card className='my-3 rounded questionCard'>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label><h4>Answer this question</h4></Form.Label>
                            <Form.Control as="textarea" rows={3} required ref={commentRef}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CommentForm
