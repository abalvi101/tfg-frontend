import styled from "styled-components";
import { Footer as UnstyledFooter } from "./Footer";

const Footer = styled(UnstyledFooter)`
  padding: 2rem 4.2% 1.2rem 4.2%;
  background-color: ${props => props.theme.primary};
  
  .content {
    max-width: 1440px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .rrss {
    display: flex;
    gap: 1rem;
  }
  .rrss > .icon {
    width: 1.5rem;
  }
  .links > ul {
    text-align: right;
    list-style-position: inside;
  }
`

export default Footer;