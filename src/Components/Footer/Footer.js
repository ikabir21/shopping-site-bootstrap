import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import {products} from "./products";
import {constructionMaterials} from "./constructionMaterials";
import {rawMaterials} from "./rawMaterials";
import payment from "../../assets/images/payment.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Materials = (props) => {
  return (
    <Container className="p-0" style={{ display: 'flex', flexWrap: "wrap"}}>
      <span className="mr-2 fw-500" >{props.title}: </span>
      {
        props.obj.map(obj => <a key={obj.key} style={{ padding: 0, marginRight: 10}} href={obj.link}>{obj.name}</a>)
      }
    </Container>
  );
};

const ExternalLinks = (props) => {
  return (
    <Col >
      <h5 className="fw-600" >{props.name}</h5>
      {
        props.obj.map(obj => <Row className="m-0"><a href={obj.link}>{obj.name}</a></Row>)
      }
    </Col>
  )
}

const Footer = () => {
  return (
    <Container className="p-0" span={3} fluid="md">
      <Row>
        <Col>
          <h5 className="mt-2 fw-600">Products: </h5>
          <Materials title="Agri Commodities" obj={products} />
          <Materials title="Construction Materials" obj={constructionMaterials} />
          <Materials title="Raw Materials" obj={rawMaterials} />
          <h5 className="mt-4 fw-600">Welcome to Tradologie.com - One-Stop Solution To All Your Trade Requirements, Fulfilled.</h5>
          <p style={{color: "#8b8b8b"}}>World's First Enquiry-To-Delivery Trade Enabling Platform solely devoted to Bulk Sellers and Buyers alike, Tradologie is tirelessly facilitating ways of enquiring, filtering, bidding, negotiating, as well as of payment, by assembling all essentials in one revolutionary platform while at the same time shouldering the needs of our partners most efficiently. We have success stories of more than 8 thousand sellers and over 1 million buyers around the globe to testify our undivided dedication.</p>
        </Col>
      </Row>
      <Row>
        <ExternalLinks obj={tradology} name="Tradology.com" />
        <ExternalLinks obj={knowMore} name="Know More" />
        <ExternalLinks obj={policyInfo} name="Polify Info" />
      </Row>
      <Row className="mt-3">
        <Col>
          <h5 className="fw-600">Super E Factory Depot Pvt. Ltd.</h5>
          <Container className="p-0">D-160, Ground Floor Sector 63, Noida, Uttar Pradesh - 201309 (India)
 Phone No: +91 85959 57412 +91-120 - 4148741, +91-120 - 4148742</Container>
        </Col>
        <Col>
          <h5 className="fw-600">Super E Factory Depot Pvt. Ltd.</h5>
          <Container className="p-0">Unit No:AG-PF-207 AG Tower' Plot No:JLT-PH1-I1A' Jumeirah Lakes Tower, Dubai, United Arab Emirates.</Container>
        </Col>
        <Col>
          <h5 className="fw-600">Need Help</h5> 
          <Container className="p-0">
            <Col className="p-0"><a href="#h">FAQs</a></Col>
            <Col className="p-0"><a href="#h">Contact Us</a></Col>
            <Col className="p-0 mt-1"><Button variant="outline-danger" >Get A Quote</Button></Col>
            <Col className="p-0 mt-1"><Button variant="danger">Buy Cement</Button></Col>
          </Container>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          <h5 className="fw-600">Payment</h5>
          <img src={payment} alt="payment"/>
        </Col>
        <Col>
          <h5>Follow Us On</h5>
          <a className="mr-2" href="#h"><FaFacebookF /></a> 
          <a className="mr-2" href="#h"><FaTwitter /></a>
          <a className="mr-2" href="#h"><FaInstagram /></a>
          <a className="mr-2" href="#h"><FaYoutube /></a>
          <a className="mr-2" href="#h"><FaLinkedinIn /></a>
        </Col>
      </Row>
      <hr/>
      <Row className="pb-1 pt-1">
        <p className="ml-auto mr-auto">Copyright © 2021 techotrade Pvt. Ltd. All rights reserved.</p>
      </Row>
    </Container>
  );
};

//objects
const tradology = [
  {name: "Brochure", link: "#"},
  {name: "About us", link: "#"},
  {name: "How it works", link: "#"},
  {name: "Updates", link: "#"},
  {name: "1121 Basmati Rice Suppliers", link: "#"},
  {name: "Gulfood 2021", link: "#"},
];
const knowMore = [
  {name: "Brochure", link: "#"},
  {name: "About us", link: "#"},
  {name: "How it works", link: "#"},
  {name: "Updates", link: "#"},
  {name: "1121 Basmati Rice Suppliers", link: "#"},
  {name: "Gulfood 2021", link: "#"},
];
const policyInfo = [
  {name: "Privacy", link: "#"},
  {name: "Terms of Use", link: "#"},
  {name: "Payment Policy", link: "#"},
  {name: "Trade Policy", link: "#"},
  {name: "Escrow", link: "#"},
  {name: "Careers", link: "#"},
];

export default Footer;