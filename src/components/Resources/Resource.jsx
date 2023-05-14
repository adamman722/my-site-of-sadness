import React, { useEffect, useRef, useState } from "react";
import DefaultCard from "../default_card/DefaultCard";
import "./resources.css";
import { useLocation } from "react-router-dom";

function Resource({ location, data }) {
  const params = useLocation();

  console.log(location);

  return (
    <DefaultCard>
      <div className="resources-block">
        <h2>{data.nameOfContent}</h2>
        <a href={data.linkToPage}>
          {" "}
          <img src={data.photo} />
        </a>

        <p>{data.description}</p>
        <a href={data.linkToPage}>Link here</a>
      </div>
    </DefaultCard>
  );
}

export default Resource;
