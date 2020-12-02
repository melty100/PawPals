import React, { useState } from 'react'
import HeroImage from '../../images/dogBG3.jpg'
import { Modal, Form } from 'react-bootstrap'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, QuestionEmpty, QuestionFilled } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <HeroContainer id="home">
                <HeroBg>
                    <ImageBg src={HeroImage} />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Project 3</HeroH1>
                    <HeroP>Helping pet parents one paw at a time</HeroP>
                    <HeroBtnWrapper>
                        <Button to="askquestion" big='true' fontBig='true' primary='true' onMouseEnter={onHover} onMouseLeave={onHover} onClick={handleShow}>
                            Ask a Question! {hover ? <QuestionEmpty /> : <QuestionFilled />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ask the Project 3 community a question!</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>

                        <Form.Group controlId="UserQuestionInput">
                            <Form.Label>What would you like to ask?</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Anymore information you would like to add?</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Topic</Form.Label>
                            <Form.Control as="select">
                                <option>Feeding</option>
                                <option>Potty Training</option>
                                <option>Exercise</option>
                                <option>Training</option>
                                <option>Toys</option>
                                <option>Housing</option>
                                <option>Small Animals</option>
                                <option>Large Animals</option>
                                <option>Reptiles</option>
                                <option>Amphibians</option>
                                <option>Exotic Pets</option>
                            </Form.Control>
                        </Form.Group>
                        


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default HeroSection
