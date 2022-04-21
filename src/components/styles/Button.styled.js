import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-transform: capitalize;
  border: none;
  border-radius: ${({ theme }) => theme.button.border_radius};
  box-shadow: ${({ theme }) => theme.shadows.shadow_3};
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};

  &:hover {
    cursor: pointer;
    color: ${({ color_hover }) => color_hover};
    background-color: ${(({bg_hover})=> bg_hover)};
  }
`;

export default StyledButton;
