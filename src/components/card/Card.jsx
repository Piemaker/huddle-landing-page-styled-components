import React from "react";
import StyledCard from "../styles/Card.styled";
import StyledImage from "../styles/Image.styled";

export default function Card({ title, body, image, layout }) {
  return (
    <StyledCard {...{layout}}>
      <StyledImage>
        <img src={`./images/${image}`} alt="" />
      </StyledImage>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </StyledCard>
  );
}
