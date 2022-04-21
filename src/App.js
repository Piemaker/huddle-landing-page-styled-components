import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import { StyledContainer } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles.styled";
const theme = {
  colors: {
    Pink: "hsl(322, 100%, 66%)",
    Very_Pale_Cyan: "hsl(193, 100%, 96%)",
    Very_Dark_Cyan: "hsl(192, 100%, 9%)",
    Grayish_Blue: "hsl(208, 11%, 55%)",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header/>
        <StyledContainer>
          <h1>hello there</h1>
        </StyledContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
