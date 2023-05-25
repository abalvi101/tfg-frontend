import styled from "styled-components";
import { Layout as UnstyledLayout } from "./Layout";

export const Layout = styled(UnstyledLayout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .main-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    margin: auto;
  }
  .main-body > * {
    flex-grow: 1;
  }

  #loader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
  }
`