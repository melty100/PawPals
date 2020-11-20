import { Row, Col} from 'react-bootstrap'
import Question from '../../components/Question/Question'
import Topics from '../../components/Topics/Topics'
import questions from '../../questions'
import './style.css'


const HomePage = () => {

    return (
        <>
            <div className="home_container">
                <Row>
                    {questions.map(question => (
                        <Col key={question.id} sm={8}>
                            <Question question={question} />
                        </Col>
                    ))}
                    {/* <div className="topic_contianer"> */}
                    <Col sm={4}>
                        <Topics />
                    </Col>
                    {/* </div> */}
                </Row>
            </div>
        </>
    )
}

export default HomePage
