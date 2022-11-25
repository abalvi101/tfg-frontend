import styled from "styled-components";
import { Header as UnstyledHeader } from "./Header";

const Header = styled(UnstyledHeader)`
  box-shadow: 0 3px 6px rgba(227, 227, 227, 33%);
  padding: 0 4.2%;
  
  * {
    font-family: Sora;
  }
  .content {
    max-width: 1440px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
  }
  .menu {
    display: flex;
    gap: 6rem;
    height: 100%;
  }
  h1 {
    font-size: 1.6rem;
    color: ${props => props.theme.primary};
    display: flex;
    align-items: center;
  }
  .links {
    display: flex;
    align-items: center;
    /* gap: 3rem; */
    height: 100%;
  }
  .links > li {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .links > li > a {
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    display: flex; 
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.4s ease;
    border-color: ${props => props.theme.primary};
    /* transition: border-color 0s; */
  }
  .links > li > a:hover {
    background-color: rgba(255, 191, 105, 0.3)
  }
  .links > li > a.selected {
    color: ${props => props.theme.primary};
    /* border-bottom: 2px solid; */
  }
  div.selected {
    height: 2px;
    width: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transition: 0.6s ease;
    background-color: ${props => props.theme.primary};
    /* z-index: 2; */
  }
  a.selected ~ div.selected {
    width: 100%;
    left: 0;
  }
  .auth {
    display: flex;
    gap: 2rem;
  }
`

export default Header;