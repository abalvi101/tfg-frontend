import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    color: ${props => props.theme.primaryFont}
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