import { Typography } from "@mui/material";
import React from "react";
import DefaultCard from "../default_card/DefaultCard";
import { useParams, useRoutes } from "react-router-dom";
function AboutMe() {
  return (
    <>
      <DefaultCard location="About Me">
        <Typography variant="h6">
          Ahhhhhhhhh this is going to be where I talk about myself
        </Typography>
      </DefaultCard>
    </>
  );
}

export default AboutMe;
