import {Col, Container, Row} from "react-bootstrap";
import Navigation from "./Navigation";
import Welcome from "./Welcome";
import MyCV from "./MyCV";


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

                                <div className="main  d-flex align-self-center" >
                                    <div className="">
                                        Welcome to paterneN portfolio // still in development
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </div>

    )
}
export default Main;