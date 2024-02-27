import React, { useState } from "react";
import "./Services.css";
import { Container } from "react-bootstrap";
import DataService from "../component/ServiceData";
import Card from "./Card/Card";
function Services() {
  return (
    <>
      <div className="title" style={{ backgroundColor: "#31A089" }}>
        {" "}
        Services.
      </div>
      <Container>
        <div className="ourServices">
          {DataService.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default Services;
