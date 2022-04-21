import styled from "styled-components";
export const StyledNav = styled.div`
  nav {
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li:first-child {
        flex: 1;
        max-width: 100px;
        height: 2rem;
        background-image: url("./images/logo.svg");
        background-size: contain;
        background-repeat: no-repeat, repeat;
      }
    
      /* li:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100px;
        min-height: 1.5rem;
        padding: 0.5rem 1.5rem 0.5rem 1.5rem;
        text-transform: ${({ theme }) => theme.button.text_transform};
        border-radius: ${({ theme }) => theme.button.border_radius};
        box-shadow: ${({ theme }) => theme.shadows.shadow_3};
        font-weight: 700;
        &:hover {
          cursor: pointer;
        }
      } */
    }
  }
`;
