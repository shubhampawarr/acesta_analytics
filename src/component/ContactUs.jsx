import React from "react";
import "./Contactus.css";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
} from "react-bootstrap";
import Cs from "../assests/BOX.jpg";

function ContactUs() {
  return (
    <>
      <p className="title" style={{ backgroundColor: "#31A089" }}>
        {" "}
        Let us assist you in achieving growth.
      </p>
      <Container className="main">
        <Card
          className="bg-light text-black"
          style={{ border: "none", margin: "10px" }}
        >
          <span style={{ marginBottom: "10px" }}>
            What would you like to talk to us about?
          </span>
          <Form style={{ backgroundColor: "white" }}>
            <Form.Select
              aria-label="Default select example"
              style={{
                backgroundColor: "white",
                color: "black",
                marginBottom: "20px",
              }}
            >
              <option>Please Select</option>
              <option value="New business enquiry">New business enquiry</option>
              <option value="Existing client enquiry">
                Existing client enquiry
              </option>
            </Form.Select>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button
              style={{
                backgroundColor: "#40E0D0",
                border: "none",
                color: "black",
                marginTop: "15px",
              }}
            >
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default ContactUs;
