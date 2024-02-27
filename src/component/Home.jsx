import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import BG from "../assests/HomeBG.jpg";
import Slider from "./Slider/Slider";
import SliderData from "./Slider/SliderData";
function Home() {
  return (
    <>
      <div className="firstPage">
        <img src={BG} alt="Image" className="homeBG" />
        <div className="imageText">
          <span> WE</span>
          <span> TURN</span>
          <span> DATA</span>
          <span> INTO</span>
          <span> MEANING.</span>{" "}
        </div>
      </div>
      <p
        className="title"
        style={{ backgroundColor: "#212935", textAlign: "center" }}
      >
        {" "}
        ACESTA ANALYTICS
        <br />
        <h3> WE HELP BUSINESS GROW </h3>
      </p>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <Card style={{ border: "none" }}>
              <Card.Title style={{fontSize:"55px",fontWeight:"600"}} className="pseTitle" >PLAN</Card.Title>
              <Card.Text
                style={{
                  fontFamily: "EB Garamond",
                  marginBottom: "10px",
                  marginTop: "5px",
                }}
              >
                Develop a comprehensive roadmap that aligns with Acesta
                Analytics' vision, outlining the step-by-step approach to
                achieve our goals. Carefully chart out the course of action,
                considering resources, timelines, and potential challenges, to
                ensure Acesta Analytics moves forward with precision.
              </Card.Text>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card style={{ border: "none" }}>
              <Card.Title style={{fontSize:"50px",fontWeight:"600"}} className="pseTitle"  >STRATAGIZE</Card.Title>
              <Card.Text
                style={{
                  fontFamily: "EB Garamond",
                  marginBottom: "10px",
                  marginTop: "5px",
                }}
              >
                Formulate a well-structured strategy that leverages Acesta
                Analytics' strengths to seize emerging opportunities in the
                dynamic data analytics market. Devise a tactical approach that
                not only positions Acesta Analytics as a thought leader but also
                establishes a competitive edge by anticipating industry shifts.
              </Card.Text>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card style={{ border: "none" }}>
              <Card.Title style={{fontSize:"55px",fontWeight:"600"}} className="pseTitle" >EVALUATE</Card.Title>
              <Card.Text
                style={{
                  fontFamily: "EB Garamond",
                  marginBottom: "10px",
                  marginTop: "5px",
                }}
              >
                Regularly assess the performance metrics and key performance
                indicators to gauge Acesta Analytics' progress towards its
                growth targets. Implement a robust evaluation mechanism to
                objectively review projects, identifying successes and areas for
                improvement, ensuring Acesta Analytics maintains its commitment
                to excellence.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
      <Slider slides={SliderData} />
    </>
  );
}

export default Home;
