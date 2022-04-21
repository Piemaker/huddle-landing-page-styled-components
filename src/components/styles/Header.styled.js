import styled from "styled-components";

export const StyledHeader = styled.header`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("./images/bg-hero-mobile.svg");
  margin-bottom: 3rem;
  div:first-child {
    flex: 1;
  }
  div:last-child {
    flex: 2;
    margin-top: 3rem;
  }
  @media only screen and (min-width: ${(({theme})=> theme.desktop.width)}) {
    flex-direction: row;
    background-image: url("./images/bg-hero-desktop.svg");
    justify-content: center;
    align-items: center;
    h1 {
      text-align: start;
    }
  }
  h1 {
    margin-top: 5rem;
    text-align: center;
  }
  p {
    text-align: center;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  img {
    width: 70%;
    height: 100%;
  }
`;
