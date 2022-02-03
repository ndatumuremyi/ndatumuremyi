import {Button, Col, Container, Image, Row} from "react-bootstrap";
import resumeSvg from "../assets/images/undraw_resume_re_hkth.svg";
import resume from "../assets/ndatumuremyi_paterne_cv.pdf";

const MyCV = () => {
    const download = () => {
        fetch(resume)
            .then(res =>res.blob())
            .then(buffer => {
                const blob = new Blob([buffer])
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `Resume.pdf`,
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
            }).catch(error => {
            console.log("error occur" + error);
        })

    }


    const imagePart = (<div>
        <Image src={resumeSvg} className="image" />
    </div>)

    const wordPart =(
        <div className="d-flex align-items-center h-100 justify-content-start">

            <Container>
                <Row>
                    <Col>
                        <p>
                            The software engineer who learns it and loves it with full passion
                            mostly uses Java to develop desktop applications, mobile applications,
                            and back-end development and react for front-end development.
                        </p>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <div className="">
                            <Row>
                                <Col sm={{offset:2}}>
                                    <Button className="button"><a href="https://resume.io/r/mXSL4mXP0" target="_blank" rel="noopener noreferrer"> View CV</a></Button>
                                </Col>
                                <Col>
                                    <Button onClick={download}>Download CV</Button>
                                </Col>
                            </Row>


                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
    return (
        <Container fluid>
            <Row className="pt-5">
                <Col>
                    {wordPart}
                </Col>
                <Col>
                    {imagePart}
                </Col>
            </Row>
        </Container>
    )
}
export default MyCV