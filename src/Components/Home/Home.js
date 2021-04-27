import React from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Carousel,
  Dropdown,
  Button,
  ListGroup,
  icon1icon2,
  ListGroupItem,
} from "react-bootstrap";
import qrCode from "../../assets/images/qrCode.png";
import live from "../../assets/images/live.png";
import nego from "../../assets/images/nego.png";
import order from "../../assets/images/order.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Home = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md lg={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="fw-600">Select Products</h3>
              <ListGroup className="list-group-flush">
                <ListGroupItem style={{ border: "none" }}>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn2"
                      variant="outline-dark"
                      id="dropdown-basic"
                    >
                      Product Segment
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">First</Dropdown.Item>
                      <Dropdown.Item href="#">Second</Dropdown.Item>
                      <Dropdown.Item href="#">Third</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ListGroupItem>
                <ListGroupItem padding="p-auto" style={{ border: "none" }}>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn2"
                      variant="outline-dark"
                      id="dropdown-basic"
                    >
                      Commodities
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">First</Dropdown.Item>
                      <Dropdown.Item href="#">Second</Dropdown.Item>
                      <Dropdown.Item href="#">Third</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ListGroupItem>
                <ListGroupItem style={{ border: "none" }}>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn2"
                      variant="outline-dark"
                      id="dropdown-basic"
                    >
                      Product
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">First</Dropdown.Item>
                      <Dropdown.Item href="#">Second</Dropdown.Item>
                      <Dropdown.Item href="#">Third</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ListGroupItem>
                <Button variant="primary">Submit</Button>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card
            className="mt-3"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img width="100px" src={qrCode} alt="QR Code" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h5>Download</h5>
              <h6>Scan to Download</h6>
            </div>
          </Card>
        </Col>
        <Col md lg={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/600/460"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/600/460"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/600/460"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md lg={3}>
          <img
            style={{ borderRadius: "10px", width: "100%" }}
            src="https://picsum.photos/260/420"
            alt="ad"
          />
        </Col>
      </Row>
      <Row className="p-3">
        <Button className="mt-2 p-2" style={{ width: "100%" }} variant="danger">
          <h5 className="m-0">
            BUY OR SELL GLOBALLY WITHOUT A PHONE CALL OR AN EMAIL
          </h5>
        </Button>
      </Row>
      <Row>
        <Col md lg={6} style={{ display: "flex", flexDirection: "row" }}>
          <Container>
            <Row>
              <Col
                className="p-3 mt-2"
                style={{
                  display: "flex",
                  borderRight: "1px solid gray",
                  background: "#fff",
                }}
              >
                <div>
                  <img src={live} alt="live" />
                </div>
                <div>
                  <p>
                    Registered <br /> Agri Buyers
                  </p>
                  <h3 className="bold">350,000</h3>
                </div>
              </Col>
              <Col
                className="p-3 mt-2"
                style={{
                  display: "flex",
                  borderRight: "1px solid gray",
                  background: "#fff",
                }}
              >
                <div>
                  <img src={nego} alt="live" />
                </div>
                <div>
                  <p>
                    Registered <br />
                    Construction Buyers
                  </p>
                  <h3 className="bold">350,000</h3>
                </div>
              </Col>
              <Col
                className="p-3 mt-2"
                style={{ display: "flex", background: "#fff" }}
              >
                <div>
                  <img src={order} alt="live" />
                </div>
                <div>
                  <p>
                    Registered <br /> Sellers
                  </p>
                  <h3 className="bold">350,000</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col lg={6} className="mt-2" style={{ display: "flex", flexDirection: "row" }}>
          <Col className="p-3" style={{ background: "#fff" }} lg={9}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #555",
                }}
              >
                <sapn className="bold" style={{ color: "#222" }}>
                  TODAY'S NEWS
                </sapn>
                <div style={{ cursor: "pointer" }}>
                  <FaChevronLeft className="mr-3" />
                  <FaChevronRight />
                </div>
              </div>
              <div className="pt-2">
                <p style={{ color: "#222" }} className="bold">
                  News Conttent
                </p>
                <p style={{ color: "#222" }}>News Content</p>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <img
              style={{ borderRadius: "10px" }}
              src="https://picsum.photos/120/200"
              alt=""
            />
          </Col>
        </Col>
      </Row>
      <Row>
        <Card style={{ width: "100%" }} className="m-3 text-center">
          <Card.Body className="pl-5 pr-5">
            <h5 className="fw-600">What Is Tradologie?</h5>
            <h6 className="pl-3 pr-3 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h6>
            <Button className="mt-3" variant="info">
              Read More
            </Button>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col lg={4}>
          <h3 className="fw-600 mt-3 mb-3 text-uppercase">Why Technotrade</h3>
          <Col style={{ background: "#fff" }}>
            <Row>
              <Col
                style={{
                  borderRight: "1px solid gray",
                  borderBottom: "1px solid gray",
                }}
                className="p-4 text-center"
              >
                <img src={icon1} alt="" />
                <h6 className="mt-3">Trade Across The World</h6>
              </Col>
              <Col
                style={{ borderBottom: "1px solid gray" }}
                className="p-4 text-center"
              >
                <img src={icon2} alt="" />
                <h6 className="mt-3">Completely Transparent</h6>
              </Col>
            </Row>
            <Row>
              <Col
                style={{ borderRight: "1px solid gray" }}
                className="p-4 text-center"
              >
                <img src={icon3} alt="" />
                <h6 className="mt-3">Modelled Around Bussiness</h6>
              </Col>
              <Col className="p-4 text-center">
                <img src={icon4} alt="" />
                <h6 className="mt-3">Cost Effective</h6>
              </Col>
            </Row>
          </Col>
        </Col>
        <Col lg={8}>
          <h3 className="fw-600 m-3 text-uppercase">How We HELPS SUPPLIERS</h3>
          <Container>
            <Row>
              <Col className="mt-1" lg={3}>
                <img width="100%" src="https://picsum.photos/150" alt="" />
              </Col>
              <Col className="mt-1" lg={3}>
                <img width="100%" src="https://picsum.photos/150" alt="" />
              </Col>
              <Col className="mt-1" lg={3}>
                <img width="100%" src="https://picsum.photos/150" alt="" />
              </Col>
              <Col className="mt-1" lg={3}>
                <img width="100%" src="https://picsum.photos/150" alt="" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Container lg={12}>
          <Row className="mt-5 pl-3">
            <h3 className="fw-600 text-uppercase">Technotrade videos</h3>
          </Row>
          <Row>
            <Col className="p-3" md={12} lg={6}>
              <h3 className="text-center fw-600">Buyer's Process</h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/eH4Eg1SNFuE"
                title="YouTube    video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;   gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Col>
            <Col className="p-3" md={12} lg={6}>
              <h3 className="text-center fw-600">Seller's Process</h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/eH4Eg1SNFuE"
                title="YouTube    video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;   gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row>
        <Container className="mt-5 mb-5">
          <Row>
            <h3 className="text-uppercase pl-3 fw-600">Technotrade products</h3>
          </Row>
          <Row>
          <Col className="mt-3" lg={3} md>
          <img width="100%" src="https://picsum.photos/200/150" alt=""/>
          <div className="mt-3" style={{display: "flex", justifyContent: "space-around"}}>
            <Button variant="info">First Button</Button>
            <Button variant="outline-info">Second Button</Button>
          </div>
        </Col>
        <Col className="mt-3" lg={3} md>
          <img width="100%" src="https://picsum.photos/200/150" alt=""/>
          <div className="mt-3" style={{display: "flex", justifyContent: "space-around"}}>
            <Button variant="info">First Button</Button>
            <Button variant="outline-info">Second Button</Button>
          </div>
        </Col>
        <Col className="mt-3" lg={3} md>
          <img width="100%" src="https://picsum.photos/200/150" alt=""/>
          <div className="mt-3" style={{display: "flex", justifyContent: "space-around"}}>
            <Button variant="info">First Button</Button>
            <Button variant="outline-info">Second Button</Button>
          </div>
        </Col>
        <Col className="mt-3" lg={3} md>
          <img width="100%" src="https://picsum.photos/200/150" alt=""/>
          <div className="mt-3" style={{display: "flex", justifyContent: "space-around"}}>
            <Button variant="info">First Button</Button>
            <Button variant="outline-info">Second Button</Button>
          </div>
        </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default Home;
