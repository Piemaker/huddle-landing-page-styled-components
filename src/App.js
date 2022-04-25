import content from "./content";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { StyledContainer } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles.styled";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
const theme = {
  colors: {
    Pink: "hsl(322, 100%, 66%)",
    Very_Pale_Cyan: "hsl(193, 100%, 96%)",
    Very_Dark_Cyan: "hsl(192, 100%, 9%)",
    Grayish_Blue: "hsl(208, 11%, 55%)",
  },
  button: {
    border_radius: "1.5rem",
    text_transform: "capitalize",
  },
  shadows: {
    shadow_1: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    shadow_2:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    shadow_3:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    shadow_4:
      "0 20px 25px - 5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04),",
  },
  desktop: {
    width: "1000px",
  },
  spacing: {
    padding: "2rem",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Nav />
        <Header />
        <StyledContainer>
          {content.map((info, index) => {
            const layout = index % 2 === 0 ? "row-reverse" : "row";
            return <Card key={index} {...{ ...info, layout }} />;
          })}
        </StyledContainer>

        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
