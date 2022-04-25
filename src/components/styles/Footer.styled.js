import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: ${({ theme }) => theme.spacing.padding};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  background-color: ${({ theme }) => theme.colors.Very_Dark_Cyan};
  color: ${({ theme }) => theme.colors.Grayish_Blue};
  form {
    position: absolute;
    top: -12.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 85%;
    padding: 1rem;
    min-height: 175px;
    border-radius: 1rem;
    background-color: white;
    box-shadow: ${({ theme }) => theme.shadows.shadow_3};
    h2 {
      color: black;
      text-transform: capitalize;
    }
    button {
      width: 50%;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 3rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  li {
    min-height: 1.5rem;
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    :hover {
      padding-bottom: 3px;
      border-bottom: 1px solid white;
      cursor: pointer;
      color: white;
    }
    p {
      margin: 0;
      width: 90%;
      max-width: 30ch;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.desktop.width}) {
    form {
      width: 45%;
      top: -25%;
    }
    div {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }
  }
`;

export default StyledFooter;
