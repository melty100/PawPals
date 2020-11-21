import { Row, Col, Container } from 'react-bootstrap'
import HeroSection from '../../components/HeroSection/'
import Question from '../../components/Question/Question'
import Topics from '../../components/Topics/Topics'
import questions from '../../questions'
import './style.css'


const HomePage = () => {

    return (
        <>
            <HeroSection />
            {/* <div className="home_container"> */}
            <Container>
                <Row>
                    <Col  sm={8}>
                        {questions.map(question => (

                            <Question key={question.id} question={question} />

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
