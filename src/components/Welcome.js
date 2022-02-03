import {Col, Container, Image, Row} from "react-bootstrap";
import welcomeP from "../assets/images/undraw_programming_re_kg9v.svg"

const Welcome = () =>{
    const imagePart = (<div>
        <Image src={welcomeP} className="image" />
    </div>)

    const wordPart =(
        <div className="d-flex align-items-center h-100 justify-content-end">

            <Container>
                <Row>
                    <Col>
                        <h4>
                            I am computer engineer
                        </h4>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <p>Freelance Web,Mobile & desktop Designer & Developer</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
    return (
        <Container fluid>
            <Row className="pt-5">
                <Col>
                    {imagePart}
                </Col>
                <Col>
                    {wordPart}
                </Col>
            </Row>
        </Container>
    )
}
export default Welcome;