import styled from "styled-components";
import Button from "../../../components/common/button";
import { Header as UnstyledHeader } from "./Header";

const PADDING_HORIZONTAL_DESKTOP = '64px';
const PADDING_HORIZONTAL_MOBILE = '5%';

const Header = styled(UnstyledHeader)`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 8px ${PADDING_HORIZONTAL_DESKTOP};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
  z-index: 10;
  background-color: ${props => props.theme.headerBackground};
  
  * {
    font-family: Sora;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-grow: 1;
  }
  .brand img {
    width: 64px;
    color: ${props => props.theme.headerBackground};
  }
  .brand h1 {
    font-size: 24px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 128px;
  background-color: ${props => props.theme.headerBackground};
  }
  .dark-mode {
    width: 16px;
    margin-right: 32px;
  }
  nav ul {
    display: flex;
    align-items: center;
    gap: 55px;
  }
  nav ul li {
    position: relative;
  }
  nav ul li * {
    text-decoration: none;
    font-size: 12px;
  }
  nav .selected {
    font-weight: 800;
  }
  nav > ul li:nth-child(n + 2)::before {
    content: '';
    height: 16px;
    width: 1.3px;
    background-color: rgb(215, 215, 215);
    position: absolute;
    top: 50%;
    left: -27px;
    translate: 0 -50%;
  }

  .user-profile {
    display: flex;
    font-size: 12px;
    gap: 16px;
  }
  .user-profile > img {
    width: 24px;
  }
  .user-profile > span {
    display: flex;
    align-items: center;
  }
  .user-profile .user-menu {
    min-width: 190px;
    position: absolute;
    top: 100%;
    right: calc(${PADDING_HORIZONTAL_DESKTOP} - 32px);
    padding: 12px 32px;
    background-color: ${props => props.theme.headerBackground};
    flex-direction: column;
    gap: 17px;
    align-items: flex-end;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  }
  .user-profile .user-menu li:nth-child(n + 2)::before {
    content: '';
    background-color: rgb(215, 215, 215);
    position: absolute;
    width: 80%;
    height: 1px;
    top: -8px;
    right: 0;
    translate: 0;
  }
  .icon-menu {
    position: absolute;
    right: ${PADDING_HORIZONTAL_MOBILE};
    width: 32px;
    top: 11px;
    display: none;
  }
  .hidden {
    display: none;
  }



  @media only screen and (max-width: 1024px) {
    nav {
      gap: 64px;
    }
    .user-profile > span {
      display: none;
    }
  }

  @media only screen and (max-width: 950px) {
    nav ul {
      gap: 25px;
    }
    nav > ul li:nth-child(n + 2)::before {
      content: '';
      height: 16px;
      width: 1.3px;
      background-color: rgb(215, 215, 215);
      position: absolute;
      top: 50%;
      left: -12px;
      translate: 0 -50%;
    }
  }
  
  @media only screen and (max-width: 870px) {
    .brand h1 {
      font-size: 18px;
    }
    nav {
      gap: 42px;
    }
    .user-profile {
      gap: 12px;
    }
  }
  
  @media only screen and (max-width: 768px) {
    padding: 8px ${PADDING_HORIZONTAL_MOBILE};

    .dark-mode {
      width: 24px;
      position: absolute;
      right: calc(5% + 24px + 24px);
      top: 16px;
      margin: 0;
    }
    .brand h1 {
      font-size: 24px;
    }
    nav {
      min-width: 164px;
      position: absolute;
      right: 0;
      top: 100%;
      padding: 8px 32px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
      z-index: 9;
      flex-direction: column;
      gap: 17px;
      align-items: flex-end;
    }
    nav ul {
      flex-direction: column;
      gap: 17px;
      width: 100%;
    }
    nav ul li {
      width: 100%;
      text-align: end;
    }
    nav > ul li:nth-child(n)::before {
      content: '';
      background-color: rgb(215, 215, 215);
      position: absolute;
      width: 80%;
      height: 1px;
      top: initial;
      bottom: -8px;
      left: initial;
      right: 0;
      translate: 0;
    }
    
    .user-profile .user-menu {
      right: 0;
      min-width: 0;
    }
    .icon-menu {
      display: initial;
    }
  }

  @media only screen and (min-width: 769px) {
    nav.hidden {
      display: flex;
    }
  }

  @media only screen and (max-width: 425px) {
    .brand h1 {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 350px) {
    min-height: 56px;
    .brand img {
      display: none;
    }
  }
`

export default Header;