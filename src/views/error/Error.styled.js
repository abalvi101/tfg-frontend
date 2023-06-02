import styled from "styled-components";
import { Error as UnstyledError } from "./Error";

const Error = styled(UnstyledError)`
  color: ${props => props.theme.error};
`;

export default Error;
