import styled from "styled-components";

const SocialMedia = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row !important;
  gap: 1rem;
  justify-content: center;

  svg {
    box-shadow: 0px 0px 0px 4px ${({ theme }) => theme.colors.Very_Dark_Cyan},
      0px 0px 0px 5px ${({ theme }) => theme.colors.Grayish_Blue};
    border-radius: 50%;
    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 0px 4px ${({ theme }) => theme.colors.Very_Dark_Cyan},
        0px 0px 0px 5px white;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.desktop.width}) {
    transform: translateY(-50%);
    width: auto;
  }
`;

export default SocialMedia;
