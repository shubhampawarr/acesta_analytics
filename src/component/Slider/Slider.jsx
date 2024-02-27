import React, { useState } from "react";
import SliderData from "./SliderData";
import "./Slider.css";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);

  const length = slides.length;
  console.log(length);

  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="imageSlider">
      <FaAnglesLeft onClick={handlePrev} className="prev" />
      <FaAnglesRight onClick={handleNext} className="next" />
      {SliderData.map((item, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <div className="sliderTitile">
                <div className="leftSLider">
                  <h1>{item.dummyData}</h1>
                  <span> {item.para} </span><br></br>
                  <button className="sliderBtn">
                    <NavLink to="/services" className="nav-link">
                      Find out more
                    </NavLink>
                  </button>
                </div>
                <div className="rightSlider">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="currentImage"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Slider;
