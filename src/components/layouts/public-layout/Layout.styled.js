import styled from "styled-components";
import Header from "../header";
import { Layout as UnstyledLayout } from "./Layout";

export const Layout = styled(UnstyledLayout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .main-body {
    flex-grow: 1;
    background-image: url('background/Background.svg');
    background-attachment: local;
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .view {
    max-width: 1440px;
    margin: auto;
    padding: 2rem 4.2%;
  }
`