import styled from "styled-components";
import { Footer as UnstyledFooter } from "./Footer";

const Footer = styled(UnstyledFooter)`
  padding: 2rem 4.2% 1.2rem 4.2%;
  background-color: ${props => props.theme.primary};
  
  * {
    color: ${props => props.theme.black};
  }

  .content {
    max-width: 1440px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .brand img {
    width: 160px;
  }
  .rrss {
    display: flex;
    gap: 1rem;
  }
  .rrss > .icon {
    width: 24px;
    cursor: pointer;
  }
  .links > ul {
    text-align: right;
    list-style-position: inside;
  }
  .links > ul li {
    cursor: pointer;
    font-size: 14px;
  }

@media only screen and (max-width: 525px) {
  .content {
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }
  .brand {
    order: 1;
  }
  .rrss {
    order: 2;
  }
  .links {
    order: 3;
  }
  .links > ul {
    text-align: center;
  }
}
`

export default Footer;