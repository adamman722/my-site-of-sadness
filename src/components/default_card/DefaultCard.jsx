import React from "react";
import "./defaultCard.css";

function DefaultCard(props) {
  return (
    <div className="outer-box">
      <div className="head-section">
        <p style={{ margin: "0" }}>{props.location}</p>
        <div className="button-container">
          <button className="underscore">_</button>
          <button className="small-box-container">
            <div className="small-box"></div>
          </button>
          <button className="close-x"> X</button>
        </div>
      </div>
      <div className="inner-box">{props.children}</div>
    </div>
  );
}

export default DefaultCard;
