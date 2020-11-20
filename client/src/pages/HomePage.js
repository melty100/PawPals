import { Row, Col } from 'react-bootstrap'
import Question from '../components/Question/Question'
import Topics from '../components/Topics/Topics'


const HomePage = () => {

    return (
        <>
        <Row>
            <Col sm={8}>
                <Question />
            </Col>
            <Col sm={4}>
                <Topics />
            </Col>
        </Row>
        </>
    )
}

export default HomePage
