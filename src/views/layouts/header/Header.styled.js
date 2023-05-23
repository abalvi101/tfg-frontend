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
  background-color: ${props => props.theme.background};
  
  * {
    font-family: Sora;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .brand img {
    width: 64px;
  }
  .brand h1 {
    font-size: 24px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 128px;
    background-color: ${props => props.theme.background};
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
    min-width: 164px;
    position: absolute;
    top: calc(100%);
    right: ${PADDING_HORIZONTAL_DESKTOP};
    padding: 12px 32px;
    background-color: ${props => props.theme.background};
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
    display: none;
  }
  .hidden {
    display: none;
  }



  
  @media only screen and (max-width: 768px) {
    padding: 8px ${PADDING_HORIZONTAL_MOBILE};

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




  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
  padding: 0 4.2%;
  position: relative;
  background-color: ${props => props.theme.background};
  
  * {
    font-family: Sora;
    user-select: none;
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
    flex-grow: 1;
    display: flex;
    gap: 4rem;
    height: 100%;
  }
  .brand {
    display: flex;
    gap: 0.8rem;
  }
  .menu_icon {
    width: 1.6rem;
    display: none;
  }
  h1 {
    font-size: 1.6rem;
    color: ${props => props.theme.primary};
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .links_wrapper {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    height: 100%;
  }
  .links {
    display: flex;
    align-items: center;
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
  }
  .links > li > a:hover {
    background-color: rgba(255, 191, 105, 0.3)
  }
  .links > li > a.selected {
    color: ${props => props.theme.primary};
  }
  div.selected {
    height: 2px;
    width: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transition: 0.6s ease;
    background-color: ${props => props.theme.primary};
  }
  a.selected ~ div.selected {
    width: 100%;
    left: 0;
  }
  .auth {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .user {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }
  .user_icon {
    width: 1.8rem;
  }
  .user_menu {
    position: absolute;
    top: 100%;
    right: -1rem;
    list-style-position: inside;
    text-align: right;
    z-index: 10;
    padding: 1rem;
    background-color: ${props => props.theme.background};
    min-width: 13rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    
    transition: 2s;
  }

  .user_menu a {
    text-decoration: none;
  }

  .user_menu.hidden {
    display: none;
    height: 0;
    transition: 2s;
  }
  
  @media only screen and (max-width: 915px) {
    * {
      font-size: 0.9rem;
    }
    .brand * {
      font-size: 1.2rem;
    }
    .menu {
      gap: 2rem;
    }
  }
  
  @media only screen and (max-width: 840px) {
    * {
      font-size: 0.8rem;
    }
    .brand * {
      font-size: 1.2rem;
    }
    .menu {
      gap: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .links_wrapper {
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 0;
      z-index: 5;
      height: auto;
      width: 220px;
      background-color: ${props => props.theme.background};
      box-shadow: 0 6px 3px rgba(0, 0, 0, 0.1);
    }
    .links {
      background-color: ${props => props.theme.background};
      flex-direction: column;
      transition: 2s;
      align-items: flex-end;
    }
    .links_wrapper.hidden {
      height: 0;
      overflow: hidden;
    }
    .links > li {
      width: 100%;
    }
    .links > li > a {
      padding: 0.8rem;
      display: flex;
      justify-content: flex-end;
    }
    .menu {
      flex-grow: 1;
      justify-content: space-between;
    }
    .menu_icon {
      display: initial;
    }
    div.selected {
      height: 0;
      width: 2px;
      position: absolute;
      top: 50%;
      right: 0;
      left: calc(100% - 2px);
      transition: 0.6s ease;
      background-color: ${props => props.theme.primary};
    }
    a.selected ~ div.selected {
      height: 100%;
      width: 2px;
      top: 0;
      left: calc(100% - 2px);
    }
    .auth {
      justify-content: flex-end;
      flex-direction: column;
      align-items: flex-end;
      gap: 0;
    }
    .auth > ${Button} {
      margin: 0.8rem;
    }
    .user {
      padding: 0.8rem;
    }
    .user_menu * {
      font-size: 0.8rem;
    }
    .user_menu {
      width: 220px;
      right: 0;
      padding-right: 2rem
    }
  }

  @media only screen and (max-width: 425px) {
    .brand * {
      font-size: 1.2rem;
    }
    .brand img {
      width: 4rem;
    }
  } */
`

export default Header;