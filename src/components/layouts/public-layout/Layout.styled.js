import styled from "styled-components";
import { Layout as UnstyledLayout } from "./Layout";

export const Layout = styled(UnstyledLayout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  header {
    background-color: ${props => props.theme.primary};
    color: palevioletred;
  }
  .main-body {
    flex-grow: 1;
  }
  footer {
    justify-self: flex-end
  }
`