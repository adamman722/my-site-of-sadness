import React from "react";
import DefaultCard from "../default_card/DefaultCard";
import "./resources.css";

function Resource({ location, data }) {
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
