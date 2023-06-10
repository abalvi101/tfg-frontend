import styled from "styled-components";
import { Error as UnstyledError } from "./Error";

const Error = styled(UnstyledError)`
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  * {
    text-align: center;
  }

  span {
    color: ${props => props.theme.error};
    opacity: 0.45;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  section a {
    color: ${props => props.theme.primary};
  }
  
  @media only screen and (max-width: 1024px) {
    padding: 5%;
  }
`;

export default Error;
