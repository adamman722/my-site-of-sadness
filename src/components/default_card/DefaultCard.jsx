import React, { useState } from "react";
import "./defaultCard.css";
import { useNavigate } from "react-router-dom";

function DefaultCard(props) {
  const navigate = useNavigate();
  const [mainClass, setMainClass] = useState("outer-box");

  setTimeout(() => {
    setMainClass("outer-box is-visible");
  }, 300);

  return (
    <div className={mainClass}>
      <div className="head-section">
        <p style={{ margin: "0" }}>{props.location}</p>
        <div className="button-container">
          <button className="underscore">_</button>
          <button className="small-box-container">
            <div className="small-box"></div>
          </button>
          <button className="close-x" onClick={() => navigate("/")}>
            {" "}
            X
          </button>
        </div>
      </div>
      <div className="inner-box">{props.children}</div>
    </div>
  );
}

export default DefaultCard;
