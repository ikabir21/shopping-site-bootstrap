import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { workingData } from "./workingData";

const Cards = (props) => {
  return(
    <>
      {
        props.obj.map(obj => {
          return(
            <Row className="mt-3 p-5 mr-5">
              {
                obj.isLeft  ? (
                  <>
                  <Col lg={5} md style={{borderRight: "3px solid gray"}}>
                <div>
                  <p style={{width: "100%", height: "100px", background: "#acb345"}}></p>
                </div>
              </Col>
              <Col lg={5} md className="text-center ml-5" style={{padding: "0 5rem", borderLeft: "3px solid gray"}}>
                <h3 className="fw-600">{obj.heading}</h3>
                <h6 className="mt-3 text-left">{obj.description}</h6>
              </Col>
              </>
                ) : (
                  <>
                  <Col lg={5} md className="text-center mr-5" style={{padding: "0 5rem", borderRight: "3px solid gray"}}>
                <h3 className="fw-600">{obj.heading}</h3>
                <h6 className="mt-3 text-left">{obj.description}</h6>
              </Col>
                  <Col lg={5} md style={{borderLeft: "3px solid gray"}}>
                <div>
                  <p style={{width: "100%", height: "100px", background: "#acb345"}}></p>
                </div>
              </Col>
              </>
                )
              }
            </Row>
          )
        })
      }
    </>
  )
};

const Working = () => {
  return (
    <>
      <Container className="mb-5">
        <Row className="pt-5">
          <h2 className="text-uppercase bold ml-auto mr-auto">
            Working Method
          </h2>
        </Row>
        <Cards obj={workingData} />
      </Container>
      <Footer />
    </>
  );
};

export default Working;
