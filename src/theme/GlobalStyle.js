import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Sora';
    src: url('../public/fonts/Sora.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Lusitana';
    src: url('../public/fonts/Lusitana-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Lusitana';
    src: url('../public/fonts/Lusitana-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: 700;
  }

  * {
    color: ${props => props.theme.primaryFont};
    font-family: Lusitana;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Sora;
    margin: 0;
  }
  body {
    background-color: ${props => props.theme.background};
    margin: 0;
  }
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;