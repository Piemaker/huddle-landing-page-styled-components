import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@100;300;400;500;700&display=swap');
    h1,h2,h3,h4,h5,h6{
        font-family: 'Poppins', sans-serif;
    }
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
`;

export default GlobalStyles;