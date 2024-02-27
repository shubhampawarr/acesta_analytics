import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import "../Services.css";

function Card({ item }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <div className="box" key={item.index}>
      <img src={item.image} alt="Web Development" className="servImage" />
      <span className="servicesTitle">{item.title}</span>
      <br></br>
      <span className="serData"> {item.para} </span>
      <span {...getCollapseProps()}>{item.show}</span>
      <br></br>
      <button
        className="servButton"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? "...show less" : "Read more..."}
      </button>
    </div>
  );
}

export default Card;
