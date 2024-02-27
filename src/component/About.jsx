import React from "react";
import "./About.css";
import BA from "../assests/BoxAbout.jpg";
import { Container } from "react-bootstrap";

function About() {
  return (
    <>
      <div className="title" style={{ backgroundColor: "#31A089" }}>
        {" "}
        About Us.
      </div>
      <Container>
        <div className="about">
          <h1 className="aTitle"> Acesta Analytics</h1>
          <p>
            {" "}
            At Acesta Analytics, our mission is to empower businesses to thrive
            in the digital world. Specializing in harnessing the power of paid
            traffic and advanced analytics, we guide companies towards
            substantial growth.{" "}
          </p>
          <p>
            By pinpointing areas that require enhancement through insightful
            analysis, we lay the foundation for a customized business model that
            aligns with your unique needs.
          </p>
          <p>
            Our dedicated team is passionate about turning data into actionable
            insights, providing you with the roadmap to success. Let us be your
            partner in driving progress and achieving your business aspirations.
          </p>
        </div>
        <div className="team">
          <h1 style={{ color: "black" }}>Our Team</h1>
          <div className="details">
            <div className="personalDetails">
              <div className="nameDetails">
                <img className="image" src={BA} alt="" />
                <div>
                  <h3 className="name">Shubham Pawar</h3>
                  <h4 className="name">(Founder,CEO)</h4>
                </div>
              </div>
              <p className="nameData">Data yet To come</p>
            </div>
            <div className="personalDetails">
              <div className="nameDetails">
                <img className="image" src={BA} alt="" />
                <div>
                  <h3 className="name">Santosh Nandiyawar</h3>
                  <h4 className="name">(CTO)</h4>
                </div>
              </div>
              <p className="nameData">Data yet To come</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
