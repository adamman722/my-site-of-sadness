import React from "react";
import Resource from "./Resource";
import { data as content } from "../../db";
function MainResourcePage() {
  console.log(content);
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
