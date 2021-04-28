import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { workingData } from "./workingData";
import "./styles.css";

const Cards = (props) => {
  return(
    <>
      {
        props.obj.map(obj => {
          return(
            <Row style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}} className="mt-3 mr-5">
              {
                obj.isLeft  ? (
                  <>
                  <Col className="img-container1 p-0" lg={5} md >
                <div className="img-div img-div1 pl-3">
                  <p className="step">Step{obj.step}</p>
                  <img className="img" src="https://picsum.photos/300/300" alt=""/>
                </div>
              </Col>
              <Col lg={5} md className="text-center ml-5 text-container1">
                <h3 className="fw-600">{obj.heading}</h3>
                <h6 className="mt-3 text-left pl-4">{obj.description}</h6>
              </Col>
              </>
                ) : (
                  <>
                  <Col lg={5} md className="text-container2 text-center mr-5 pr-4">
                <h3 className="fw-600">{obj.heading}</h3>
                <h6 className="mt-3 text-left pr-3">{obj.description}</h6>
              </Col>
                  <Col className="img-container2 p-0" lg={5} md >
                <div className="img-div img-div2">
                  <img className="img" src="https://picsum.photos/300/300" alt=""/>
                  <p className="step2 step">Step{obj.step}</p>
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
