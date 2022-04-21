import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.shadow_1};
  padding: 5rem;
  p {
    max-width: 75ch;
    color: grey;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: ${({ theme }) => theme.desktop.width}) {
    width: 80%;
    margin: auto;
    flex-direction: ${({ layout }) => layout};
    align-items: center;
    margin-top: 5rem;

    text-align: left;
  }
`;
export default StyledCard;
