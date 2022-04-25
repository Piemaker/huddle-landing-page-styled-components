import React from "react";
import { useTheme } from "styled-components";
import StyledButton from "../styles/Button.styled";
import { StyledNav } from "../styles/Nav.styled";
export function Nav() {
  const theme = useTheme();
  return (
    <StyledNav>
      <ul>
        <li></li>
        <li>
          <StyledButton color_hover={theme.colors.Grayish_Blue}>
            try it free
          </StyledButton>
        </li>
      </ul>
    </StyledNav>
  );
}
