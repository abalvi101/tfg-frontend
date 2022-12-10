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
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Sora;
  }
  body {
    background-color: ${props => props.theme.background};
  }
  ul, ol {
    list-style: none;
  }
  
  @media only screen and (max-width: 1024px) {
    * {
      font-size: 0.95rem;
    }
  }
`;

export default GlobalStyle;