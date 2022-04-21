import React from "react";
import { useTheme } from "styled-components";
import StyledButton from "../styles/Button.styled";
import FlexCol from "../styles/FlexCol.styled";
import { StyledHeader } from "../styles/Header.styled";
import StyledImage from "../styles/Image.styled";

export default function Header() {
  const theme = useTheme();
  return (
    <StyledHeader>
      <FlexCol>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <StyledButton color={"white"} bg={theme.colors.Pink} bg_hover="#ff9bda">
          get started for free
        </StyledButton>
      </FlexCol>
      <StyledImage>
        <img src="./images/illustration-mockups.svg" alt="" />
      </StyledImage>
    </StyledHeader>
  );
}
