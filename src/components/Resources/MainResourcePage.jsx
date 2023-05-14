import React from "react";
import Resource from "./Resource";
import { data as content } from "../../db";
function MainResourcePage({ location }) {
  console.log(location);
  let moreContent = [...content];
  return (
    <>
      {moreContent.map((data) => {
        return <Resource data={data} />;
      })}
    </>
  );
}

export default MainResourcePage;
