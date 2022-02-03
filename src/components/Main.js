import {Col, Container, Row} from "react-bootstrap";
import Navigation from "./Navigation";
import Welcome from "./Welcome";
import MyCV from "./MyCV";
import Footer from "./Footer";


const Main = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Navigation/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Container className="">
                        <Row><Col>
                                <Welcome/>
                        </Col></Row>
                        <Row><Col>
                            <MyCV/>
                        </Col></Row>

                        <Row className="">
                            <Col className="">
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
            <div>
                <Row><Col><Footer/></Col></Row>
            </div>
        </div>

    )
}
export default Main;