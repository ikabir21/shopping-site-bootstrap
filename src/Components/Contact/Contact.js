import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import contact from "../../assets/images/contact.png";

const Contact = () => {
  return (
    <>
    <img width="100%" src={contact} alt=""/>
    <Container className="mt-5 mb-5">
      <Row>
        <Container>
          <Row className="pl-4 pr-4">
            <h2 className="fw-600">Get In Touch</h2>
            <h6 className="fw-600">Do you have any Queries or Have sales/advertising queries or looking for any other informationFill out the form below and we will get back to you at the earliest.</h6>
          </Row>
          <Row className="p-3" >
            <Col className="p-5 mb-5" style={{border: "2px solid red", borderRadius: "20px"}}>
              <Container>
                <Row className="mt-1">
                  <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" type="text"/>
                </Row>
                <Row className="mt-5">
                  <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" type="email" />
                </Row>
                <Row className="mt-5">
                  <input className="form-control" id="exampleInputEmail1" aria-describedby="numberHelp" placeholder="Mobile" type="text" />
                </Row>
                <Row className="mt-5">
                  <input className="form-control" id="exampleCountry" aria-describedby="counrtyHelp" placeholder="Country" type="text" />
                </Row>
                <Row className="mt-5">
                  <textarea class="form-control" id="exampleTextArea" rows="2" placeholder="Message" ></textarea>
                </Row>
                <Row>
                  <Button className="ml-auto mr-auto mt-5 pl-5 pr-5" variant="danger mt-3">Submit</Button>
                </Row>
              </Container>
            </Col>
            <Col>
              <Container style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "90%"}} className="pl-5 pr-5 text-center">
                <Row style={{display: "flex", flexDirection: "column", alignItems: "space-evnely"}}>
                  <h5 className="bold">Connect With US</h5>
                  <h6>For Support, information or Queries email us at info@techotrade.org</h6>
                </Row>
                <Row style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <h6 className="bold">Please call Us at </h6>
                  <h6>+91 7354213542, +91 3521402356</h6>
                  <h6>GLOBAL HEADQUARTER</h6>
                </Row>
                <Row style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <h4 style={{color: "#ffa500"}} className="bold">TECHOTRADE</h4>
                  <h6>Wertdfyujgkmhgnfvdcx</h6>
                </Row>
                <Row style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <h4 style={{color: "#ffa500"}}>zegrthyjkiyugtrdfsd</h4>
                  <h6>zegrthyjkiyugtrdfsd</h6>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
    </>
  )
}

export default Contact
